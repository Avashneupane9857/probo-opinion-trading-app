import { STOCK_BALANCES } from "../data";

export const mintStockWorker = (userId, stockSymbol, quantity) => {
  if (!STOCK_BALANCES[userId]) {
    STOCK_BALANCES[userId] = {};
  }

  if (!STOCK_BALANCES[userId][stockSymbol]) {
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
  }

  if (
    !STOCK_BALANCES[userId][stockSymbol].yes ||
    !STOCK_BALANCES[userId][stockSymbol].no
  ) {
    STOCK_BALANCES[userId][stockSymbol].yes = { quantity: 0, locked: 0 };
    STOCK_BALANCES[userId][stockSymbol].no = { quantity: 0, locked: 0 };
  }

  STOCK_BALANCES[userId][stockSymbol].yes.quantity += quantity;
  STOCK_BALANCES[userId][stockSymbol].no.quantity += quantity;

  return { msg: STOCK_BALANCES[userId][stockSymbol] };
};
