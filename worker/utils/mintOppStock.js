import { ORDERBOOK } from "../data.js";

export const mintOppositeStock = (
  stockSymbol,
  price,
  quantity,
  userId,
  orderType
) => {
  const oppositePrice = 1000 - price;

  if (orderType === "yes") {
    if (!ORDERBOOK[stockSymbol].no[oppositePrice]) {
      ORDERBOOK[stockSymbol].no[oppositePrice] = { total: 0, orders: {} };
    }
    ORDERBOOK[stockSymbol].no[oppositePrice].total += quantity;
    ORDERBOOK[stockSymbol].no[oppositePrice].orders[userId] = {
      type: "reverted",
      quantity:
        (ORDERBOOK[stockSymbol].no[oppositePrice].orders[userId]?.quantity ||
          0) + quantity,
    };
  } else {
    if (!ORDERBOOK[stockSymbol].yes[oppositePrice]) {
      ORDERBOOK[stockSymbol].yes[oppositePrice] = { total: 0, orders: {} };
    }
    ORDERBOOK[stockSymbol].yes[oppositePrice].total += quantity;
    ORDERBOOK[stockSymbol].yes[oppositePrice].orders[userId] = {
      type: "reverted",
      quantity:
        (ORDERBOOK[stockSymbol].yes[oppositePrice].orders[userId]?.quantity ||
          0) + quantity,
    };
  }
};
