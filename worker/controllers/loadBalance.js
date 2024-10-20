import { INR_BALANCES } from "../data.js";

export const loadBalanceWorker = (userId, amount) => {
  if (!INR_BALANCES[userId]) {
    return {
      msg: "User not found ",
    };
  }
  INR_BALANCES[userId].balance = INR_BALANCES[userId].balance + amount;
  return {
    msg: `Amount of INR ${amount} is added to ${userId} balance`,
  };
};
