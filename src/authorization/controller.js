import db from "../postgresDB/db.js";
import { queries } from "./queries.js";

require("dotenv").config();
import jwt from "jsonwebtoken-as-promised";

export async function setUser(req, res, next) {
  try {
    const { manager_id, password } = req.body;
    if (!manager_id || !password) return res.status(400).send("bad request");
    const user = await getUser(manager_id);
    if (user) {
      if (user.password === password) {
        req.user = user;
        return next();
      }
      return res.status(401).send("Invalid credentials");
    }
    return res.status(404).send("The manager_id is not found.");
  } catch (error) {
    console.error(error);
    return res.status(500).send("Internal Error");
  }
}
async function getUser(manager_id) {
  try {
    const user = await db.one(queries.getUser, [manager_id]);
    return user;
  } catch (error) {
    return null;
  }
}

export async function getToken(req, res) {
  try {
    const { user } = req;
    const token = await jwt.sign(user, process.env.ACCESS_TOKEN_SECRET);
    return res.json(token);
  } catch (error) {
    console.error("error: ", error);
    return res.status(500).send("Internal Error");
  }
}

export async function authenticateToken(req, res, next) {
  try {
    const authHeader = req.headers["authorization"];
    const token = authHeader && authHeader.split(" ")[1];
    if (!token) return res.status(400).send("bad request");
    const user = await jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);
    if (user) {
      req.user = user;
      return next();
    }
    return res.status(404).send("The token is invalid");
  } catch (error) {
    console.error(error);
    return res.status(500).send("Internal Error");
  }
}
