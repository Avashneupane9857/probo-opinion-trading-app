import { createClient } from "redis";
import { creatUserWorker } from "./controllers/createUser.js";
import { createStockSymbolWorker } from "./controllers/createStockSymbol.js";
import {
  getBalanceWorker,
  getUserBalanceWorker,
} from "./controllers/getBalance.js";
import { WebSocket } from "ws";
import {
  getOrderBookSymbolWorker,
  getOrderbookWorker,
} from "./controllers/getOrderbook.js";
import {
  getStockBalanceWorker,
  getUserStockBalanceWorker,
} from "./controllers/getStockBalance.js";
import { resetWorker } from "./controllers/reset.js";
import { BuyOptionWorker } from "./controllers/BuyOption.js";
import { SellOptionWorker } from "./controllers/SellOption.js";
import { loadBalanceWorker } from "./controllers/loadBalance.js";
import { mintStockWorker } from "./controllers/mintStock.js";
import dotenv from "dotenv";
dotenv.config({});
export const ws = new WebSocket(
  process.env.WEBSOCKET_URL || "ws://localhost:8080"
);

async function main() {
  const client = createClient({
    host: process.env.REDIS_HOST || "my-redis",
    port: process.env.REDIS_PORT || 6379,
  });
  await client.connect();
  while (1) {
    const response = await client.BRPOP("req", 0);
    console.log(response.element.reqType);
    const data = JSON.parse(response.element);
    const publishClient = createClient();
    publishClient.connect();

    switch (data.reqType) {
      case "createUser":
        const ans = await creatUserWorker(data.userId);
        publishClient.publish(data.id, JSON.stringify(ans));
        console.log("processeed users submission", ans);
        break;
      case "createStockSymbol":
        const anS = await createStockSymbolWorker(
          data.stockSymbol
          // data.endTime,
          // data.description,
          // data.source
        );
        publishClient.publish(data.id, JSON.stringify(anS));
        console.log("Proceeddede stock symbol create is in queue", anS);
        break;
      case "getBalance":
        const bal = getBalanceWorker();
        publishClient.publish(data.id, JSON.stringify(bal));
        console.log(bal);
        break;
      case "getUserBalance":
        const Ubal = getUserBalanceWorker(data.userId);
        publishClient.publish(data.id, JSON.stringify(Ubal));

        console.log(Ubal);
        break;
      case "getOrderBookSymbolWorker":
        const OrdSymb = getOrderBookSymbolWorker(data.stockSymbol);
        publishClient.publish(data.id, JSON.stringify(OrdSymb));
        console.log(OrdSymb);
        break;
      case "getOrderbook":
        const orderBook = await getOrderbookWorker();
        publishClient.publish(data.id, JSON.stringify(orderBook));
        console.log(orderBook);
        break;
      case "getStockBalance":
        const getStock = await getStockBalanceWorker();
        publishClient.publish(data.id, JSON.stringify(getStock));
        console.log(getStock);
        break;

      case "getUserStockBalance":
        const stockBal = await getUserStockBalanceWorker(data.userId);
        publishClient.publish(data.id, JSON.stringify(stockBal));
        console.log(stockBal);
        break;
      case "loadBalance":
        const loadBal = await loadBalanceWorker(data.userId, data.amount);
        publishClient.publish(data.id, JSON.stringify(loadBal));
        console.log(loadBal);

        break;
      case "mintStock":
        const mint = await mintStockWorker(
          data.userId,
          data.stockSymbol,
          data.quantity
        );
        publishClient.publish(data.id, JSON.stringify(mint));
        console.log(mint);
        break;
      case "reset":
        const reset = await resetWorker();
        publishClient.publish(data.id, JSON.stringify(reset));
        console.log(reset);
        break;
      case "BuyOption":
        const buy = await BuyOptionWorker(
          data.userId,
          data.stockSymbol,
          data.quantity,
          data.price,
          data.stockType
        );
        publishClient.publish(data.id, JSON.stringify(buy));
        console.log(buy);
        break;
      case "SellOption":
        const sell = await SellOptionWorker(
          data.userId,
          data.stockSymbol,
          data.quantity,
          data.price,
          data.stockType
        );
        publishClient.publish(data.id, JSON.stringify(sell));
        console.log(sell);
        break;

      default:
        console.log("Route not found");
    }
  }
}
main();
