import express from "express";
import { authenticateToken } from "../authorization/controller";
import managerRoute from "./manager/managerRoute";
const cors = require("cors");

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

app.listen(PORT, (err) => {
  if (err) {
    console.log("Error in server setup");
  }
  console.log("server listening on Port", PORT);
});
