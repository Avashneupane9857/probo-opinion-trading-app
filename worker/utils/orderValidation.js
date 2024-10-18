import { INR_BALANCES, STOCK_BALANCES, ORDERBOOK } from "../data.js";
export const validateOrder = (userId, quantity, price, INR_BALANCES) => {
  if (!INR_BALANCES[userId]) return false;
  if (INR_BALANCES[userId].balance < quantity * price || price <= 0)
    return false;
  return true;
};

export const initializeStockBalance = (userId, stockSymbol) => {
  if (!STOCK_BALANCES[userId]) {
    STOCK_BALANCES[userId] = {};
  }
  if (!STOCK_BALANCES[userId][stockSymbol]) {
    STOCK_BALANCES[userId][stockSymbol] = {
      yes: { quantity: 0, locked: 0 },
      no: { quantity: 0, locked: 0 },
    };
  }
};
