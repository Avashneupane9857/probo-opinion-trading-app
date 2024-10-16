import { INR_BALANCES, ORDERBOOK, STOCK_BALANCES } from "../data.js";

export const reset = (req, res) => {
  INR_BALANCES = {};
  ORDERBOOK = {};
  STOCK_BALANCES = {};
  res.send("All data has been reset!");
};
