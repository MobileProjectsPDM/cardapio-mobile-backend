import dotenv from "dotenv";
import cors from "cors";
import express from "express";

dotenv.config();

const server = express();

server
  .use(cors())
  .use(express.json())
  .get("/health", (_req, res) => res.send("Hello world!"));

const port = process.env.PORT || 5000;

server.listen(port, () => console.log(`Server running in port ${port}`));
