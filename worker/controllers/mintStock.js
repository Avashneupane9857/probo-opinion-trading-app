import { ORDERBOOK } from "../data.js";

export const mintStockWorker = (userId, stockSymbol, quantity) => {
  ORDERBOOK[stockSymbol].yes[5].total += quantity;
  ORDERBOOK[stockSymbol].yes[5].orders[userId] =
    (ORDERBOOK?.[stockSymbol]?.yes[5]?.orders[userId] || 0) + quantity;

  ORDERBOOK[stockSymbol].no[5].total += quantity;
  ORDERBOOK[stockSymbol].no[5].orders[userId] =
    (ORDERBOOK?.[stockSymbol]?.no[5]?.orders[userId] || 0) + quantity;

  return ORDERBOOK?.[stockSymbol];
};
