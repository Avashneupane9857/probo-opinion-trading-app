import express from "express";
import dotenv from "dotenv";
import routes from "./routes.js";
import { createClient } from "redis";

dotenv.config();

const app = express();
const port = 3001;

const client = createClient({
  host: process.env.REDIS_HOST || "my-redis", // Use the service name
  port: process.env.REDIS_PORT || 6379,
});

client.on("error", (err) => {
  console.error("Redis connection error:", err);
});

async function connectToRedis() {
  try {
    await client.connect();
    console.log("Connected to Redis");
  } catch (error) {
    console.error("Failed to connect to Redis:", error);
    process.exit(1);
  }
}

connectToRedis();

app.use(express.json());
app.get("/", (req, res) => {
  res.status(200).json({
    msg: "Server is listening",
  });
});

app.use("/api/v1", routes);

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
