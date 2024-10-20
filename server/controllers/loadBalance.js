import { createClient } from "redis";
import { v4 } from "uuid";
import { listener } from "../pubSubmanager.js";
export const loadBalance = async (req, res) => {
  const { userId, amount } = req.body;
  const id = v4();
  const client = createClient();
  await client.connect();
  await client.LPUSH(
    "req",
    JSON.stringify({ userId, amount, id, reqType: "loadBalance" })
  );
  listener(id, res);
};
