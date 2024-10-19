import { createClient } from "redis";
import { v4 } from "uuid";
import { listener } from "../pubSubmanager.js";

export const createStockSymbol = async (req, res) => {
  const id = v4();
  const { stockSymbol } = req.params;
  const client = createClient();
  await client.connect();
  await client.LPUSH(
    "req",
    JSON.stringify({ id, stockSymbol, reqType: "createStockSymbol" })
  );
  listener(id, res);
};
