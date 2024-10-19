import { createClient } from "redis";
import { v4 } from "uuid";
import { listener } from "../pubSubmanager.js";
export const createUser = async (req, res) => {
  const id = v4();
  const { userId } = req.params;
  const client = createClient();
  await client.connect();
  await client.LPUSH(
    "req",
    JSON.stringify({ id, userId, reqType: "createUser" })
  );
  // const ress = creatUserWorker(userId);
  listener(id, res);
};
