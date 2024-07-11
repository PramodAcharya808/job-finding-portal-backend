import express from "express";
import { apiVersion } from "./constants.js";
import "dotenv/config";

export const app = express();

app.use(express.json({ limit: "16kb" }));

app.get(`/${apiVersion}/health`, (req, res) => {
  res.json({ message: "API's are working ✅" }).status(200);
});
