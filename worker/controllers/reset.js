import { INR_BALANCES, ORDERBOOK, STOCK_BALANCES } from "../data.js";

export const resetWorker = () => {
  INR_BALANCES = {};
  ORDERBOOK = {};
  STOCK_BALANCES = {};
  return "All data has been reset!";
};
