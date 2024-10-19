import { INR_BALANCES, ORDERBOOK, STOCK_BALANCES } from "../data.js";
import { clearObject } from "../utils/sahayog.js";

export const resetWorker = () => {
  clearObject(INR_BALANCES);
  clearObject(STOCK_BALANCES);
  clearObject(ORDERBOOK);
  return "All data has been reset!";
};
