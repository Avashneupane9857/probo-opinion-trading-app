import { createClient } from "redis";
import { v4 } from "uuid";
import { listener } from "../pubSubmanager.js";
export const getStockBalance = async (req, res) => {
  const id = v4();
  const client = createClient({
    host: process.env.REDIS_HOST || "my-redis", // Use the service name
    port: process.env.REDIS_PORT || 6379,
  });
  await client.connect();
  await client.LPUSH("req", JSON.stringify({ id, reqType: "getStockBalance" }));
  listener(id, res);
};
export const getUserStockBalance = async (req, res) => {
  const { userId } = req.params;
  const id = v4();
  const client = createClient();
  await client.connect();
  await client.LPUSH(
    "req",
    JSON.stringify({ id, userId, reqType: "getUserStockBalance" })
  );
  listener(id, res);
};
