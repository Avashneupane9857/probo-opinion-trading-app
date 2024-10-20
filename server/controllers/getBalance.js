import { v4 } from "uuid";
import { INR_BALANCES } from "../data.js";
import { createClient } from "redis";
import { listener } from "../pubSubmanager.js";
// all balances ho yo 
export const getBalance = async (req, res) => {
  const id = v4();
  const client = createClient();
  await client.connect();
  await client.LPUSH("req", JSON.stringify({ id, reqType: "getBalance" }));

  res.status(200).json({ msg: "getBalance  added in queue" });
};

export const getUserBalance = async (req, res) => {
  const { userId } = req.params;
  const id = v4();
  const client = createClient();
  await client.connect();
  await client.LPUSH(
    "req",
    JSON.stringify({ id, userId, reqType: "getUserBalance" })
  );
  listener(id, res);

};
