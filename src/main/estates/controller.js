import db from "../../postgresDB/db.js";
import { queries } from "./queries.js";
import { queries as peopleQueries } from "../people/queries.js";

export async function getIdleEstates(req, res) {
  try {
    const idleEstates = await db.any(queries.getIdleEstates);
    res.json(idleEstates);
  } catch (error) {
    console.error("error: ", error);
    return res.status(500).send("Internal Error");
  }
}
export async function getSoldEstates(req, res) {
  try {
    const soldEstates = await db.any(queries.getSoldEstates);
    res.json(soldEstates);
  } catch (error) {
    console.error("error: ", error);
    return res.status(500).send("Internal Error");
  }
}
export async function getRentedEstates(req, res) {
  try {
    const rentedEstates = await db.any(queries.getRentedEstates);
    res.json(rentedEstates);
  } catch (error) {
    console.error("error: ", error);
    return res.status(500).send("Internal Error");
  }
}

export async function getEstate(req, res) {
  const id = Number(req.params.id);
  try {
    const estate = await db.one(queries.getEstate, [id]);
    res.json(estate);
  } catch (error) {
    console.error("error: ", error);
    return res.status(500).send("Internal Error");
  }
}

export async function insertEstate(req, res) {
  const {
    property_id,
    owner_id,
    address,
    geo_location,
    type,
    area,
    room_count,
    description,
    for: _for,
    price,
    mortgage,
    rent,
    registration_date,
  } = req.body;
  if (
    typeof property_id != "string" ||
    typeof owner_id != "number" ||
    typeof address != "string" ||
    typeof geo_location != "string" ||
    checkType(type) ||
    typeof area != "number" ||
    typeof room_count != "number" ||
    typeof description != "string" ||
    checkFor(_for) ||
    typeof price != "number" ||
    typeof mortgage != "number" ||
    typeof rent != "number" ||
    typeof registration_date != "object"
  )
    return res.status(400).send("Bad Request");
  try {
    const records = await db.any(peopleQueries.getPerson, [owner_id]);
    if (!records.length) {
      return res.status(404).send("owner_id Not found.");
    }
    await db.none(queries.insertEstate, [
      property_id,
      owner_id,
      address,
      geo_location,
      type,
      area,
      room_count,
      description,
      _for,
      price,
      mortgage,
      rent,
      registration_date,
    ]);
    res.status(204).send();
  } catch (error) {
    console.error("error: ", error);
    return res.status(500).send("Internal Error");
  }
}

export async function updateEstate(req, res) {
  const id = Number(req.params.id);
  const {
    property_id,
    owner_id,
    address,
    geo_location,
    type,
    area,
    room_count,
    description,
    for: _for,
    price,
    mortgage,
    rent,
    registration_date,
  } = req.body;
  if (
    typeof property_id != "string" ||
    typeof owner_id != "number" ||
    typeof address != "string" ||
    typeof geo_location != "string" ||
    checkType(type) ||
    typeof area != "number" ||
    typeof room_count != "number" ||
    typeof description != "string" ||
    checkFor(_for) ||
    typeof price != "number" ||
    typeof mortgage != "number" ||
    typeof rent != "number" ||
    typeof registration_date != "object"
  )
    return res.status(400).send("Bad Request");
  try {
    const records = await db.any(peopleQueries.getPerson, [owner_id]);
    if (!records.length) {
      return res.status(404).send("owner_id Not found.");
    }
    await db.none(queries.updateEstate, [
      id,
      property_id,
      owner_id,
      address,
      geo_location,
      type,
      area,
      room_count,
      description,
      _for,
      price,
      mortgage,
      rent,
      registration_date,
    ]);
    res.status(204).send();
  } catch (error) {
    console.error("error: ", error);
    return res.status(500).send("Internal Error");
  }
}

function checkType(type) {
  if (
    type === "residential" ||
    type === "commercial" ||
    type === "raw land" ||
    type === "industrial" ||
    type === "special purpose"
  )
    return false;
  else return true;
}

function checkFor(_for) {
  if (_for === "rent" || _for === "sale" || _for === "any") return false;
  else return true;
}

export async function deleteEstate(req, res) {
  const id = Number(req.params.id);
  try {
    const records = await db.any(queries.getEstate, [id]);
    if (!records.length) {
      return res.status(404).send("Not found.");
    }
    await db.none(queries.deleteEstate, [id]);
    res.status(204).send();
  } catch (error) {
    console.error("error: ", error);
    return res.status(500).send("Internal Error");
  }
}
