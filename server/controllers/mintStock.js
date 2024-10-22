import { createClient } from "redis";
import { v4 } from "uuid";
import { listener } from "../pubSubmanager.js";
export const mintStock = async (req, res) => {
  const { userId, stockSymbol, quantity } = req.body;
  const id = v4();
  const client = createClient({
    host: process.env.REDIS_HOST || "my-redis", // Use the service name
    port: process.env.REDIS_PORT || 6379,
  });
  await client.connect();
  await client.LPUSH(
    "req",
    JSON.stringify({ userId, stockSymbol, quantity, id, reqType: "mintStock" })
  );
  listener(id, res);
};
