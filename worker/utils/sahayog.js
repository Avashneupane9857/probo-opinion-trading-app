import { INR_BALANCES, ORDERBOOK, STOCK_BALANCES } from "../data.js";
import { ws } from "../index.js";

import { mintOppositeStock } from "./mintOppStock.js";
import { initializeStockBalance, validateOrder } from "./orderValidation.js";

export const buyYesOption = (userId, stockSymbol, quantity, price, res) => {
  if (!validateOrder(userId, quantity, price, INR_BALANCES)) {
    return { error: "Invalid order" };
  }

  INR_BALANCES[userId].balance -= quantity * price;
  INR_BALANCES[userId].locked += quantity * price;

  if (!ORDERBOOK[stockSymbol]) {
    return { msg: "Invalid stockSymbol" };
  }

  let availableQuantity = 0;
  let availableNoQuantity = 0;
  if (ORDERBOOK[stockSymbol].yes[price]) {
    availableQuantity = ORDERBOOK[stockSymbol].yes[price].total;
    availableNoQuantity = ORDERBOOK[stockSymbol].no[10 - price]?.total || 0;
  }

  let tempQuantity = quantity;

  if (availableQuantity > 0) {
    for (let user in ORDERBOOK[stockSymbol].yes[price].orders) {
      if (tempQuantity <= 0) break;

      const available = ORDERBOOK[stockSymbol].yes[price].orders[user].quantity;
      const toTake = Math.min(available, tempQuantity);

      ORDERBOOK[stockSymbol].yes[price].orders[user].quantity -= toTake;
      ORDERBOOK[stockSymbol].yes[price].total -= toTake;
      tempQuantity -= toTake;

      if (ORDERBOOK[stockSymbol].yes[price].orders[user].type == "sell") {
        if (STOCK_BALANCES[user][stockSymbol].yes) {
          STOCK_BALANCES[user][stockSymbol].yes.locked -= toTake;
          INR_BALANCES[user].balance += toTake * price;
        }
      } else if (
        ORDERBOOK[stockSymbol].yes[price].orders[user].type == "reverted"
      ) {
        if (STOCK_BALANCES[user][stockSymbol].no) {
          STOCK_BALANCES[user][stockSymbol].yes.quantity += toTake;
          INR_BALANCES[user].locked -= toTake * price;
        }
      }

      if (ORDERBOOK[stockSymbol].yes[price].orders[user].quantity === 0) {
        delete ORDERBOOK[stockSymbol].yes[price].orders[user];
      }
    }

    if (ORDERBOOK[stockSymbol].yes[price].total === 0) {
      delete ORDERBOOK[stockSymbol].yes[price];
    }
  }

  if (availableNoQuantity > 0 && ORDERBOOK[stockSymbol].no[10 - price]) {
    for (let user in ORDERBOOK[stockSymbol].no[10 - price].orders) {
      if (tempQuantity <= 0) break;

      const available =
        ORDERBOOK[stockSymbol].no[10 - price].orders[user].quantity;
      const toTake = Math.min(available, tempQuantity);

      ORDERBOOK[stockSymbol].no[10 - price].orders[user].quantity -= toTake;
      ORDERBOOK[stockSymbol].no[10 - price].total -= toTake;
      tempQuantity -= toTake;

      if (ORDERBOOK[stockSymbol].no[10 - price].orders[user].type == "sell") {
        if (STOCK_BALANCES[user][stockSymbol].no) {
          STOCK_BALANCES[user][stockSymbol].no.locked -= toTake;
          INR_BALANCES[user].balance += toTake * (10 - price);
        }
      } else if (
        ORDERBOOK[stockSymbol].no[10 - price].orders[user].type == "reverted"
      ) {
        if (STOCK_BALANCES[user][stockSymbol].yes) {
          STOCK_BALANCES[user][stockSymbol].yes.quantity += toTake;
          INR_BALANCES[user].locked -= toTake * (10 - price);
        }
      }

      if (ORDERBOOK[stockSymbol].no[10 - price].orders[user].quantity === 0) {
        delete ORDERBOOK[stockSymbol].no[10 - price].orders[user];
      }
    }

    if (ORDERBOOK[stockSymbol].no[10 - price].total === 0) {
      delete ORDERBOOK[stockSymbol].no[10 - price];
    }
  }

  if (tempQuantity > 0) {
    mintOppositeStock(stockSymbol, price, tempQuantity, userId, "yes");
  }

  initializeStockBalance(userId, stockSymbol);

  if (STOCK_BALANCES[userId][stockSymbol]?.yes) {
    STOCK_BALANCES[userId][stockSymbol].yes.quantity += quantity - tempQuantity;
  }

  INR_BALANCES[userId].locked -= (quantity - tempQuantity) * price;

  return {
    message: `Buy order for 'yes' added for ${stockSymbol}`,
    orderbook: ORDERBOOK[stockSymbol],
  };
};

export const buyNoOption = (userId, stockSymbol, quantity, price, res) => {
  if (!validateOrder(userId, quantity, price, INR_BALANCES)) {
    return { error: "Invalid order" };
  }

  INR_BALANCES[userId].balance -= quantity * price;
  INR_BALANCES[userId].locked += quantity * price;

  if (!ORDERBOOK[stockSymbol]) {
    return { msg: "Invalid stock symbol" };
  }

  let availableQuantity = 0;
  let availableYesQuantity = 0;
  if (ORDERBOOK[stockSymbol].no[price]) {
    availableQuantity = ORDERBOOK[stockSymbol].no[price].total;
    availableYesQuantity = ORDERBOOK[stockSymbol].yes[10 - price]?.total;
  }

  let tempQuantity = quantity;

  if (availableQuantity > 0) {
    for (let user in ORDERBOOK[stockSymbol].no[price].orders) {
      if (!STOCK_BALANCES[userId]) {
        STOCK_BALANCES[userId] = {};
      }

      if (!STOCK_BALANCES[user]) {
        STOCK_BALANCES[user] = {};
      }

      if (!STOCK_BALANCES[userId][stockSymbol]) {
        STOCK_BALANCES[userId][stockSymbol] = {
          yes: { quantity: 0, locked: 0 },
          no: { quantity: 0, locked: 0 },
        };
      }

      if (!STOCK_BALANCES[user][stockSymbol]) {
        STOCK_BALANCES[user][stockSymbol] = {
          yes: { quantity: 0, locked: 0 },
          no: { quantity: 0, locked: 0 },
        };
      }
      if (tempQuantity <= 0) break;

      const available = ORDERBOOK[stockSymbol].no[price].orders[user].quantity;
      const toTake = Math.min(available, tempQuantity);

      ORDERBOOK[stockSymbol].no[price].orders[user].quantity -= toTake;
      ORDERBOOK[stockSymbol].no[price].total -= toTake;
      tempQuantity -= toTake;

      if (ORDERBOOK[stockSymbol].no[price].orders[user].type == "sell") {
        if (STOCK_BALANCES[user][stockSymbol].no) {
          STOCK_BALANCES[user][stockSymbol].no.locked -= toTake;
          INR_BALANCES[user].balance += toTake * price;
        }
      } else if (
        ORDERBOOK[stockSymbol].no[price].orders[user].type == "reverted"
      ) {
        if (STOCK_BALANCES[user][stockSymbol].yes) {
          STOCK_BALANCES[user][stockSymbol].yes.quantity += toTake;
          INR_BALANCES[user].locked -= toTake * price;
        }
        if (!ORDERBOOK[stockSymbol]) {
          return { msg: "Invalid stock symbol" };
        }
      }

      if (ORDERBOOK[stockSymbol].no[price].orders[user].quantity === 0) {
        delete ORDERBOOK[stockSymbol].no[price].orders[user];
      }
    }

    if (ORDERBOOK[stockSymbol].no[price].total === 0) {
      delete ORDERBOOK[stockSymbol].no[price];
    }
  }

  if (availableYesQuantity > 0 && ORDERBOOK[stockSymbol].yes[10 - price]) {
    for (let user in ORDERBOOK[stockSymbol].yes[10 - price].orders) {
      if (!STOCK_BALANCES[userId]) {
        STOCK_BALANCES[userId] = {};
      }

      if (!STOCK_BALANCES[user]) {
        STOCK_BALANCES[user] = {};
      }

      if (!STOCK_BALANCES[userId][stockSymbol]) {
        STOCK_BALANCES[userId][stockSymbol] = {
          yes: { quantity: 0, locked: 0 },
          no: { quantity: 0, locked: 0 },
        };
      }

      if (!STOCK_BALANCES[user][stockSymbol]) {
        STOCK_BALANCES[user][stockSymbol] = {
          yes: { quantity: 0, locked: 0 },
          no: { quantity: 0, locked: 0 },
        };
      }
      if (tempQuantity <= 0) break;

      const available =
        ORDERBOOK[stockSymbol].yes[10 - price].orders[user].quantity;
      const toTake = Math.min(available, tempQuantity);

      ORDERBOOK[stockSymbol].yes[10 - price].orders[user].quantity -= toTake;
      ORDERBOOK[stockSymbol].yes[10 - price].total -= toTake;
      tempQuantity -= toTake;

      if (ORDERBOOK[stockSymbol].yes[10 - price].orders[user].type == "sell") {
        if (STOCK_BALANCES[user][stockSymbol].yes) {
          STOCK_BALANCES[user][stockSymbol].yes.locked -= toTake;
          INR_BALANCES[user].balance += toTake * (10 - price);
        }
      } else if (
        ORDERBOOK[stockSymbol].yes[10 - price].orders[user].type == "reverted"
      ) {
        if (STOCK_BALANCES[user][stockSymbol].no) {
          STOCK_BALANCES[user][stockSymbol].no.quantity += toTake;
          INR_BALANCES[user].locked -= toTake * (10 - price);
        }
      }

      if (ORDERBOOK[stockSymbol].yes[10 - price].orders[user].quantity === 0) {
        delete ORDERBOOK[stockSymbol].yes[10 - price].orders[user];
      }
    }

    if (ORDERBOOK[stockSymbol].yes[10 - price].total === 0) {
      delete ORDERBOOK[stockSymbol].yes[10 - price];
    }
  }

  if (tempQuantity > 0) {
    mintOppositeStock(stockSymbol, price, tempQuantity, userId, "no");
  }

  initializeStockBalance(userId, stockSymbol);

  if (STOCK_BALANCES[userId][stockSymbol]?.no) {
    STOCK_BALANCES[userId][stockSymbol].no.quantity += quantity - tempQuantity;
  }

  INR_BALANCES[userId].locked -= (quantity - tempQuantity) * price;

  return {
    message: `Buy order for 'no' added for ${stockSymbol}`,
    orderbook: ORDERBOOK[stockSymbol],
  };
};
export const sellYesOption = (userId, stockSymbol, quantity, price) => {
  if (STOCK_BALANCES[userId][stockSymbol]?.yes) {
    if (STOCK_BALANCES[userId]?.[stockSymbol]?.yes.quantity < quantity) {
      return 'Insufficient "yes" stocks to sell';
    }

    STOCK_BALANCES[userId][stockSymbol].yes.quantity -= quantity;
    STOCK_BALANCES[userId][stockSymbol].yes.locked += quantity;
  }

  if (!ORDERBOOK[stockSymbol].yes[price]) {
    ORDERBOOK[stockSymbol].yes[price] = { total: 0, orders: {} };
  }
  if (!ORDERBOOK[stockSymbol]) {
    return { msg: "Invalid stock symbol" };
  }

  ORDERBOOK[stockSymbol].yes[price].total += quantity;
  ORDERBOOK[stockSymbol].yes[price].orders[userId].quantity =
    (ORDERBOOK[stockSymbol].yes[price].orders[userId].quantity || 0) + quantity;
  return {
    message: `Sell order for 'yes' added for ${stockSymbol}`,
    orderbook: ORDERBOOK[stockSymbol],
  };
};
export const sellNoOption = (userId, stockSymbol, quantity, price) => {
  if (!ORDERBOOK[stockSymbol]) {
    return { msg: "Invalid stock symbol" };
  }

  if (STOCK_BALANCES[userId]?.[stockSymbol]?.no) {
    if (STOCK_BALANCES[userId]?.[stockSymbol]?.no.quantity < quantity) {
      return res.json({ error: 'Insufficient "no" stocks to sell' });
    }

    STOCK_BALANCES[userId][stockSymbol].no.quantity -= quantity;
    STOCK_BALANCES[userId][stockSymbol].no.locked += quantity;
  }

  if (!ORDERBOOK[stockSymbol].no[price]) {
    ORDERBOOK[stockSymbol].no[price] = { total: 0, orders: {} };
  }

  if (!ORDERBOOK[stockSymbol].no[price].orders[userId]) {
    ORDERBOOK[stockSymbol].no[price].orders[userId] = {
      quantity: 0,
      type: "sell",
    };
  }

  ORDERBOOK[stockSymbol].no[price].orders[userId].type = "sell";

  ORDERBOOK[stockSymbol].no[price].total += quantity;
  ORDERBOOK[stockSymbol].no[price].orders[userId].quantity =
    (ORDERBOOK[stockSymbol].no[price].orders[userId].quantity || 0) + quantity;
  return {
    message: `Sell order for 'no' added for ${stockSymbol}`,
    orderbook: ORDERBOOK[stockSymbol],
  };
};

export function sendOrderBook() {
  ws.send(JSON.stringify(ORDERBOOK));
}
