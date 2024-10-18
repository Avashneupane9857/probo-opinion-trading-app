import { INR_BALANCES } from "../data.js";

export const loadBalanceWorker = (userId, amount) => {
  const amountINR = amount / 100;
  if (!INR_BALANCES[userId]) {
    return {
      msg: "User not found ",
    };
  }
  INR_BALANCES[userId].balance = INR_BALANCES[userId].balance + amountINR;
  return {
    msg: `Amount of INR ${amountINR} is added to ${userId} balance`,
  };
};
