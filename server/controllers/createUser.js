import { INR_BALANCES, ORDERBOOK } from "../data.js";
import { ws } from "../index.js";
import { sendOrderBook } from "../utils/sahayog.js";

export const createUser = (req, res) => {
  const { userId } = req.params;
  if (INR_BALANCES[userId]) {
    return res.json({
      msg: "User already exists",
      success: false,
    });
  }
  INR_BALANCES[userId] = { balance: 0, locked: 0 };
  sendOrderBook();
  res.status(200).json({
    msg: `User '${userId}'  created `,
    data: INR_BALANCES,
  });
};
