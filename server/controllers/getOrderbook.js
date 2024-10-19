import { createClient } from "redis";
import { v4 } from "uuid";

export const getOrderbook = async (req, res) => {
  const client = createClient();
  await client.connect();
  const id = v4();
  await client.LPUSH("req", JSON.stringify({ id, reqType: "getOrderbook" }));
  res.send("get order Book added to queue");
};

// when naya stock symbol create huncha teti bela tyo order book mah add huncha ki nai ?? navaye tah aali lyang hunch tah ani if huncha vaney tyo
// with 0 sabai kura huncha hola only stock ko name huncha ani tesko empty yes and no haina rah
