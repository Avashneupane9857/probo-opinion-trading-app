import { createClient } from "redis";
import { v4 } from "uuid";

export const createStockSymbol = async (req, res) => {
  const id = v4();
  const { stockSymbol } = req.params;
  const client = createClient();
  await client.connect();
  await client.LPUSH(
    "req",
    JSON.stringify({ id, stockSymbol, reqType: "createStockSymbol" })
  );

  res.status(200).json({ msg: "Create user added in queue" });
};
