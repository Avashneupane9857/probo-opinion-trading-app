import express from "express";
const app = express();
import dotenv from "dotenv";
import routes from "./routes.js";
import { WebSocket } from "ws";

dotenv.config({});
const port = process.env.PORT || 3000;

export const ws = new WebSocket("ws://localhost:8080")

app.use(express.json());
app.get("/", (req, res) => {
  res.status(200).json({
    msg: "Server is listening",
  });
});

app.use("/api/v1", routes);

app.listen(port, () => {
  console.log(`Server is listening to ${port} `);
});
