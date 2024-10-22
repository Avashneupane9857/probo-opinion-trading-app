import { createClient } from "redis";
import { v4 } from "uuid";
import { listener } from "../pubSubmanager.js";

export const BuyOption = async (req, res) => {
  const { userId, stockSymbol, quantity, price, stockType } = req.body;

  const id = v4();
  const client = createClient({
    host: process.env.REDIS_HOST || "my-redis",
    port: process.env.REDIS_PORT || 6379,
  });
  await client.connect();
  await client.LPUSH(
    "req",
    JSON.stringify({
      id,
      userId,
      stockSymbol,
      quantity,
      price,
      stockType,
      reqType: "BuyOption",
    })
  );
  listener(id, res);
};
