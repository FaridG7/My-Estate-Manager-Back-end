import { getBuyers, getOwners, getPeople, getPerson, getRenters, updatePerson } from "./controller";

const express = require("express");
const router = express.Router();

router.get("/", getPeople);
router.get("/owners", getOwners);
router.get("/buyers", getBuyers);
router.get("/renters", getRenters);
router.get("/:id", getPerson);

router.put("/:id", updatePerson);

export default router;
