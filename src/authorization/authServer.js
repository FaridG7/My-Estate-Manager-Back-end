import express from "express";
import { getToken, setManager } from "./controller";
const cors = require("cors");

const app = express();

const PORT = 4000;
app.use(cors({
  origin: 'http://localhost:5173',
  methods: 'GET, POST, PUT, DELETE',
  credentials: true,
}));
app.use(express.json());

app.post("/login", setManager, getToken);

app.listen(PORT, (err) => {
  if (err) {
    console.log("Error in authServer setup");
  }
  console.log("authServer listening on Port", PORT);
});
