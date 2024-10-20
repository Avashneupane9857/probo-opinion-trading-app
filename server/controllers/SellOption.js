import { createClient } from "redis";
import { v4 } from "uuid";

import { listener } from "../pubSubmanager.js";
export const SellOption = async (req, res) => {
  const { userId, stockSymbol, quantity, price, stockType } = req.body;

  const id = v4();
  const client = createClient();
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
      reqType: "SellOption",
    })
  );
  listener(id, res);
};
