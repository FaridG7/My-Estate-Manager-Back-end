const cors = require("cors");

import express from "express";
import { authenticateToken } from "../authorization/controller";
import managerRoute from "./manager/managerRoute";
import peopleRoute from "./people/peopleRoute";
import estatesRoute from "./estates/estatesRoute";
import saleContractsRoute from "./contracts/saleContracts/saleContractsRoute";
import rentContractsRoute from "./contracts/rentContracts/rentContractsRoute";

const app = express();

const PORT = 3000;

app.use(
  cors({
    origin: "http://localhost:5173",
    methods: "GET, POST, PUT, DELETE",
    credentials: true,
  })
);
app.use(express.json());
app.use(authenticateToken);

app.use("/manager", managerRoute);
app.use("/people", peopleRoute);
app.use("/estates", estatesRoute);
app.use("/contracts/sale", saleContractsRoute);
app.use("/contracts/rent", rentContractsRoute);

app.listen(PORT, (err) => {
  if (err) {
    console.log("Error in server setup");
  }
  console.log("server listening on Port", PORT);
});
