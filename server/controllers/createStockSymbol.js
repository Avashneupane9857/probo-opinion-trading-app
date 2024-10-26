import { createClient } from "redis";
import { v4 } from "uuid";
import { listener } from "../pubSubmanager.js";

export const createStockSymbol = async (req, res) => {
  const id = v4();
  const { stockSymbol, endTime, description, source } = req.body;
  const client = createClient({
    host: process.env.REDIS_HOST || "my-redis", // Use the service name
    port: process.env.REDIS_PORT || 6379,
  });
  await client.connect();
  await client.LPUSH(
    "req",
    JSON.stringify({
      id,
      stockSymbol,
      endTime,
      description,
      source,
      reqType: "createStockSymbol",
    })
  );
  listener(id, res);
};
