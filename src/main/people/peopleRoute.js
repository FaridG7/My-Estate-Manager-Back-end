import {
  deletePerson,
  getBuyers,
  getOwners,
  getPeople,
  getPerson,
  getRenters,
  insertPerson,
  updatePerson,
} from "./controller";

const express = require("express");
const router = express.Router();

router.get("/owners", getOwners);
router.get("/buyers", getBuyers);
router.get("/renters", getRenters);

router.get("/:id", getPerson);

router.post("/", insertPerson);

router.put("/:id", updatePerson);

router.delete("/:id", deletePerson);

export default router;
