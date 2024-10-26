import { createClient } from "redis";
import { v4 } from "uuid";
import { listener } from "../pubSubmanager.js";
export const createUser = async (req, res) => {
  const id = v4();
  const { userId } = req.params;
  const client = createClient({
    host: process.env.REDIS_HOST || "my-redis",
    port: process.env.REDIS_PORT || 6379,
  });
  await client.connect();
  await client.LPUSH(
    "req",
    JSON.stringify({ id, userId, reqType: "createUser" })
  );

  listener(id, res);
};
