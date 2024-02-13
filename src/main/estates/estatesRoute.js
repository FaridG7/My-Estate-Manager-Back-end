import {
  deleteEstate,
  getEstate,
  getIdleEstates,
  getRentedEstates,
  getSoldEstates,
  insertEstate,
  updateEstate,
} from "./controller";

const express = require("express");
const router = express.Router();

router.get("/idle", getIdleEstates);
router.get("/sold", getSoldEstates);
router.get("/rented", getRentedEstates);

router.get("/:id", getEstate);

router.put("/:id", updateEstate);

router.delete("/:id", deleteEstate);

router.post("/", insertEstate);

export default router;
