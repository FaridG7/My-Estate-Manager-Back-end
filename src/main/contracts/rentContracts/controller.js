import db from "../../postgresDB/db.js";
import { queries } from "./queries.js";
import { queries as peopleQueries } from "../people/queries.js";
import { queries as estatesQueries } from "../../estates/queries.js";

export async function getContract(req, res) {
  try {
    const contract = await db.one(queries.getContract);
    res.json(contract);
  } catch (error) {
    console.error("error: ", error);
    return res.status(500).send("Internal Error");
  }
}
export async function getContracts(req, res) {
  try {
    const contracts = await db.any(queries.getContracts);
    res.json(contracts);
  } catch (error) {
    console.error("error: ", error);
    return res.status(500).send("Internal Error");
  }
}

export async function insertContract(req, res) {
  const {
    contract_id,
    estate_id,
    manager_id,
    commission_fee,
    start_date,
    expire_date,
    mortgage,
    rent,
    renter_id,
  } = req.body;
  if (
    typeof contract_id != "string" ||
    typeof estate_id != "number" ||
    typeof manager_id != "number" ||
    typeof commission_fee != "number" ||
    typeof new Date(start_date) != "object" ||
    typeof new Date(expire_date) != "object" ||
    typeof mortgage != "number" ||
    typeof rent != "number" ||
    typeof renter_id != "number"
  )
    return res.status(400).send("Bad Request");
  try {
    const estateRecords = await db.any(estatesQueries.getEstate, [estate_id]);
    if (!estateRecords.length) {
      return res.status(404).send("owner_id Not found.");
    }
    const renterRecords = await db.any(peopleQueries.getPerson, [buyer_id]);
    if (!renterRecords.length) {
      return res.status(404).send("owner_id Not found.");
    }
    await db.none(queries.insertContract, [
      contract_id,
      estate_id,
      manager_id,
      commission_fee,
      new Date(start_date),
      new Date(expire_date),
      mortgage,
      rent,
      renter_id,
    ]);
    res.status(204).send();
  } catch (error) {
    console.error("error: ", error);
    return res.status(500).send("Internal Error");
  }
}

export async function updateContract(req, res) {
  const id = Number(req.params.id);
  const {  contract_id,
    estate_id,
    commission_fee,
    start_date,
    expire_date,
    mortgage,
    rent,
    renter_id, } =
    req.body;
  if (
    typeof id != "number" ||
    typeof contract_id != "string" ||
    typeof estate_id != "number" ||
    typeof commission_fee != "number" ||
    typeof new Date(start_date) != "object" ||
    typeof new Date(expire_date) != "object" ||
    typeof mortgage != "number" ||
    typeof rent != "number" ||
    typeof renter_id != "number"
  )
    return res.status(400).send("Bad Request");
  try {
    const estateRecords = await db.any(estatesQueries.getEstate, [estate_id]);
    if (!estateRecords.length) {
      return res.status(404).send("owner_id Not found.");
    }
    const renterRecords = await db.any(peopleQueries.getPerson, [buyer_id]);
    if (!renterRecords.length) {
      return res.status(404).send("owner_id Not found.");
    }
    await db.none(queries.updateContract, [
      id,
      contract_id,
      estate_id,
      commission_fee,
      new Date(start_date),
      new Date(expire_date),
      mortgage,
      rent,
      renter_id,
    ]);
    res.status(204).send();
  } catch (error) {
    console.error("error: ", error);
    return res.status(500).send("Internal Error");
  }
}

export async function deleteContract(req, res) {
  const id = Number(req.params.id);
  try {
    const records = await db.any(queries.getContract, [id]);
    if (!records.length) {
      return res.status(404).send("Not found");
    }
    await db.none(queries.deleteContract, [id]);
    res.status(204).send();
  } catch (error) {
    console.error("error: ", error);
    return res.status(500).send("Internal Error");
  }
}
