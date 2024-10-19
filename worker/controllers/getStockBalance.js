import { STOCK_BALANCES } from "../data.js";

export const getStockBalanceWorker = () => {
  return {
    msg: "Stock balances are ",
    data: STOCK_BALANCES,
  };
};
export const getUserStockBalanceWorker = (userId) => {
  if (!STOCK_BALANCES[userId]) {
    return {
      msg: "User not found in Stock balance",
    };
  }

  return {
    msg: `${userId} stock balance is  `,
    data: STOCK_BALANCES[userId],
  };
};

//get stock symbol garda tah aaila kei pani aairako chaina
