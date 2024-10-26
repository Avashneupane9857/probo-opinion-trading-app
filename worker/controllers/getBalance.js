import { INR_BALANCES } from "../data.js";

export const getBalanceWorker = () => {
  return {
    msg: " All user balances are  ",
    data: INR_BALANCES,
  };
};

export const getUserBalanceWorker = (userId) => {
  if (!INR_BALANCES[userId]) {
    return { msg: "No user found" };
  }

  return {
    msg: `user: ${userId}`,
    data: INR_BALANCES[userId],
  };
};
