import { createClient } from "redis";
import { v4 } from "uuid";
import { listener } from "../pubSubmanager.js";
export const mintStock = async (req, res) => {
  const { userId, stockSymbol, quantity } = req.body;
  const id = v4();
  const client = createClient();
  await client.connect();
  await client.LPUSH(
    "req",
    JSON.stringify({ userId, stockSymbol, quantity, id, reqType: "mintStock" })
  );
  listener(id, res);
};
