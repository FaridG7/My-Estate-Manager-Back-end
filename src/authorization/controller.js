const pgp = require("pg-promise")();
const db = pgp({
  host: "localhost",
  port: 5432,
  database: "myestatemanager",
  user: "postgres",
  password: "farid.G1382",
});
import { queries } from "./queries.js";
require("dotenv").config();
import jwt from "jsonwebtoken";

export async function setManager(req, res, next) {
  try {
    const { managerId, password } = req.body;
    if (!managerId || !password) return res.status(400).send("bad request");
    const manager = await getManger(managerId);
    console.log("manager: ", manager);
    if (manager) {
      if (manager.password === password) {
        req.manager = manager;
        return next();
      }
      return res.status(401).send("Invalid credentials");
    }
    return res.status(404).send("The userId is not found.");
  } catch (error) {
    console.error(error);
    return res.status(500).send("Internal Error");
  }
}
async function getManger(managerId) {
  try {
    const manager = await db.one(queries.getManager, [managerId]);
    return manager;
  } catch (error) {
    return null;
  }
}

export function getToken(req, res) {
  try {
    const { manager } = req;
    const accessToken = jwt.sign(manager, process.env.ACCESS_TOKEN_SECRET);
    return res.json({ accessToken });
  } catch (error) {
    console.error("error: ", error);
    return res.status(500).send("Internal Error");
  }
}
