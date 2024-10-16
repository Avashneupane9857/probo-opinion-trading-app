import { INR_BALANCES } from "../data.js";
import { createClient } from "redis";
// all balances
export const getBalance = async (req, res) => {
  const client = createClient();
  await client.connect();
  await client.LPUSH("req", JSON.stringify({ reqType: "getBalance" }));

  res.status(200).json({ msg: "getBalance  added in queue" });
};

export const getUserBalance = async (req, res) => {
  const { userId } = req.params;
  const client = createClient();
  await client.connect();
  await client.LPUSH(
    "req",
    JSON.stringify({ userId, reqType: "getUserBalance" })
  );
  return { msg: "GetUserBalance added to queue" };
};
