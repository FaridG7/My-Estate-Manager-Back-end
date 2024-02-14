
const express = require("express");
const router = express.Router();

router.get("/idle");
router.get("/sold");
router.get("/rented");

router.get("/:id");

router.put("/:id");

router.delete("/:id");

router.post("/");

export default router;
