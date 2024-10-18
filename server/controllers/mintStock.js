import { createClient } from "redis";
import { v4 } from "uuid";
export const mintStock = async (req, res) => {
  const { userId, stockSymbol, quantity } = req.body;
  const id = v4();
  const client = createClient();
  await client.connect();
  await client.LPUSH(
    "req",
    JSON.stringify({ userId, stockSymbol, quantity, id, reqType: "mintStock" })
  );
  res.send("mintStock is in queue");
};
