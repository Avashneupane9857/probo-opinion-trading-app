import { createClient } from "redis";
import { v4 } from "uuid";
import { listener } from "../pubSubmanager.js";

export const getOrderbook = async (req, res) => {
  const client = createClient({
    host: process.env.REDIS_HOST || "my-redis", // Use the service name
    port: process.env.REDIS_PORT || 6379,
  });
  await client.connect();
  const id = v4();
  await client.LPUSH("req", JSON.stringify({ id, reqType: "getOrderbook" }));
  listener(id, res);
};
export const getOrderBookSymbol = async (req, res) => {
  const { stockSymbol } = req.params;
  const client = createClient({
    host: process.env.REDIS_HOST || "my-redis", // Use the service name
    port: process.env.REDIS_PORT || 6379,
  });
  await client.connect();
  const id = v4();
  await client.LPUSH(
    "req",
    JSON.stringify({ id, stockSymbol, reqType: "getOrderBookSymbolWorker" })
  );
  listener(id, res);
};
// when naya stock symbol create huncha teti bela tyo order book mah add huncha ki nai ?? navaye tah aali lyang hunch tah ani if huncha vaney tyo
// with 0 sabai kura huncha hola only stock ko name huncha ani tesko empty yes and no haina rah
