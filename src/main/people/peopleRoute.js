import {
  deletePerson,
  getBuyers,
  getNonUsed,
  getOwners,
  getPeople,
  getPerson,
  getRenters,
  insertPerson,
  updatePerson,
} from "./controller";

const express = require("express");
const router = express.Router();

router.get("/", getPeople);
router.get("/owners", getOwners);
router.get("/buyers", getBuyers);
router.get("/renters", getRenters);
router.get("/nonUsed", getNonUsed);

router.get("/:id", getPerson);

router.post("/", insertPerson);

router.put("/:id", updatePerson);

router.delete("/:id", deletePerson);

export default router;
