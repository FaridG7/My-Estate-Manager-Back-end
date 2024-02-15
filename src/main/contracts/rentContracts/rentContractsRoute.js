import {
  deleteContract,
  getContract,
  getContracts,
  insertContract,
  updateContract,
} from "./controller";

const express = require("express");
const router = express.Router();

router.get("/", getContracts);

router.get("/:id", getContract);

router.put("/:id", updateContract);

router.delete("/:id", deleteContract);

router.post("/", insertContract);

export default router;
