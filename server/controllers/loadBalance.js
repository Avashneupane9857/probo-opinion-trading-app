import { INR_BALANCES } from "../data.js";

export const loadBalance = (req, res) => {
  const { userId, amount } = req.body;
  const amountINR = amount / 100;
  if (!INR_BALANCES[userId]) {
    return res.status(401).json({
      msg: "User not found ",
    });
  }
  INR_BALANCES[userId].balance = INR_BALANCES[userId].balance + amountINR;
  res.status(200).json({
    msg: `Amount of INR ${amountINR} is added to ${userId} balance`,
  });
};
