import { createClient } from "redis";
import { creatUserWorker } from "./controllers/createUser.js";
import { createStockSymbolWorker } from "./controllers/createStockSymbol.js";
import {
  getBalanceWorker,
  getUserBalanceWorker,
} from "./controllers/getBalance.js";

import { getOrderbookWorker } from "./controllers/getOrderbook.js";
import {
  getStockBalanceWorker,
  getUserStockBalanceWorker,
} from "./controllers/getStockBalance.js";
import { resetWorker } from "./controllers/reset.js";
import { BuyOptionWorker } from "./controllers/BuyOption.js";
import { SellOptionWorker } from "./controllers/SellOption.js";
async function main() {
  const client = createClient();
  await client.connect();
  while (1) {
    const response = await client.BRPOP("req", 0);
    console.log(response.element.reqType);
    const data = JSON.parse(response.element);
    switch (data.reqType) {
      case "createUser":
        const ans = creatUserWorker(data.userId);
        console.log("processeed users submission", ans);
        break;
      case "createStockSymbol":
        createStockSymbolWorker(data.stockSymbol);
        break;
      case "getBalance":
        getBalanceWorker();
        break;
      case "getUserBalance":
        getUserBalanceWorker();
        break;
      case "getOrderbook":
        getOrderbookWorker();
        break;
      case "getStockBalance":
        getStockBalanceWorker();
        break;

      case "getUserStockBalance":
        getUserStockBalanceWorker(data.userId);
        break;
      case "loadBalance":
        loadBalanceWorker(userId, amount);
        break;
      case "mintStock":
        mintStockWorker(userId, stockSymbol, quantity);
        break;
      case "reset":
        resetWorker();
        break;
      case "BuyOption":
        BuyOptionWorker(userId, stockSymbol, quantity, price, stockType);
        break;
      case "SellOption":
        SellOptionWorker(userId, stockSymbol, quantity, price, stockType);
        break;

      default:
        console.log("Route not found");
    }
  }
}
main();
