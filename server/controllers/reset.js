import { createClient } from "redis";
import { v4 } from "uuid";
export const reset = async (req, res) => {
  const id = v4();
  const client = createClient();
  await client.connect();
  await client.LPUSH("req", JSON.stringify({ id, reqType: "reset" }));
  return res.send("Reset in queue");
};
