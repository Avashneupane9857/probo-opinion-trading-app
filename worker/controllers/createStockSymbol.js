import { ORDERBOOK, STOCK_BALANCES } from "../data.js";

export const createStockSymbolWorker = (stockSymbol) => {
  console.log(stockSymbol);
  Object.keys(STOCK_BALANCES).forEach((userId) => {
    STOCK_BALANCES[userId][stockSymbol] = {
      yes: {
        quantity: 0,
        locked: 0,
      },
      no: {
        quantity: 0,
        locked: 0,
      },
    };
  });

  ORDERBOOK[stockSymbol] = { yes: {}, no: {} };

  return { message: `Symbol ${stockSymbol} created successfully.` };
};
