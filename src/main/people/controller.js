import db from "../../postgresDB/db.js";
import { queries } from "./queries.js";

export async function getPeople(req, res) {
  try {
    const people = await db.any(queries.getPeople);
    res.json(people);
  } catch (error) {
    console.error("error: ", error);
    return res.status(500).send("Internal Error");
  }
}
export async function getOwners(req, res) {
  try {
    const owners = await db.any(queries.getOwners);
    res.json(owners);
  } catch (error) {
    console.error("error: ", error);
    return res.status(500).send("Internal Error");
  }
}
export async function getBuyers(req, res) {
  try {
    const buyers = await db.any(queries.getBuyers);
    res.json(buyers);
  } catch (error) {
    console.error("error: ", error);
    return res.status(500).send("Internal Error");
  }
}
export async function getRenters(req, res) {
  try {
    const renters = await db.any(queries.getRenters);
    res.json(renters);
  } catch (error) {
    console.error("error: ", error);
    return res.status(500).send("Internal Error");
  }
}

export async function getPerson(req, res) {
  const id = Number(req.params.id);
  try {
    const person = await db.one(queries.getPerson, [id]);
    res.json(person);
  } catch (error) {
    console.error("error: ", error);
    return res.status(404).send("Not Found");
  }
}

export async function updatePerson(req, res) {
  const id = Number(req.params.id);
  const { first_name, last_name, phone_number, meli_code } = req.body;
  if (!id || !first_name || !last_name || !meli_code || !phone_number)
    return res.status(404).send("Bad Request");
  try {
    const records = await db.any(queries.getPerson, [id]);
    if (!records.length) {
      return res.status(404).send("Not found.");
    }
    await db.none(queries.updatePerson, [
      id,
      first_name,
      last_name,
      meli_code,
      phone_number,
    ]);
    res.status(204).send();
  } catch (error) {
    console.error("error: ", error);
    return res.status(500).send("Internal Error");
  }
}

export async function insertPerson(req, res) {
  const { first_name, last_name, phone_number, meli_code } = req.body;
  if (!first_name || !last_name || !meli_code || !phone_number)
    return res.status(404).send("Bad Request");
  try {
    await db.none(queries.insertPerson, [
      first_name,
      last_name,
      meli_code,
      phone_number,
    ]);
    res.status(204).send();
  } catch (error) {
    console.error("error: ", error);
    return res.status(500).send("Internal Error");
  }
}

export async function deletePerson(req, res) {
  const id = Number(req.params.id);
  try {
    const records = await db.any(queries.getPerson, [id]);
    if (!records.length) {
      return res.status(404).send("Not found.");
    }
    await db.none(queries.deletePerson, [id]);
    res.status(204).send();
  } catch (error) {
    console.error("error: ", error);
    return res.status(500).send("Internal Error");
  }
}
