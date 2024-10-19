import { createClient } from "redis";
import { v4 } from "uuid";

export const BuyOption = async (req, res) => {
  const {
    userId,
    stockSymbol,
    quantity,
    price: originalPrice,
    stockType,
  } = req.body;

  const price = originalPrice / 100;
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
      reqType: "BuyOption",
    })
  );
  res.send("Buy option is in queue");
};
