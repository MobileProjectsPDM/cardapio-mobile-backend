import dotenv from "dotenv";
import cors from "cors";
import express from "express";
dotenv.config();
var server = express();
server.use(cors()).use(express.json());
var port = process.env.PORT || 5000;
server.listen(port, function () { return console.log("Server running in port ".concat(port)); });
