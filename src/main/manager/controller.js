import db from "../../postgresDB/db.js"

import { queries } from "./queries.js";

export async function getUser(req, res) {
  try {
    const { user } = req;
    const manager = await db.one(queries.getManager, [user.manager_id]);
    res.json(manager);
  } catch (error) {
    console.error("error: ", error);
    return res.status(500).send("Internal Error");
  }
}
