import express from "express";
import { createUser } from "./controllers/createUser.js";
import { createStockSymbol } from "./controllers/createStockSymbol.js";
import {
  getOrderbook,
  getOrderBookSymbol,
} from "./controllers/getOrderbook.js";
import { getBalance, getUserBalance } from "./controllers/getBalance.js";
import {
  getStockBalance,
  getUserStockBalance,
} from "./controllers/getStockBalance.js";
import { loadBalance } from "./controllers/loadBalance.js";
import { reset } from "./controllers/reset.js";
import { mintStock } from "./controllers/mintStock.js";
import { BuyOption } from "./controllers/BuyOption.js";
import { SellOption } from "./controllers/SellOption.js";

const routes = express.Router();
routes.post("/user/create/:userId", createUser);
routes.post("/symbol/create/:stockSymbol", createStockSymbol);
routes.get("/orderbook", getOrderbook);
routes.get("/orderbook/:stockSymbol", getOrderBookSymbol);
routes.post("/balances/inr", getBalance);
routes.get("/balance/inr/:userId", getUserBalance);
routes.get("/balances/stock", getStockBalance);
routes.post("/onramp/inr", loadBalance);
routes.get("/balance/stock/:userId", getUserStockBalance);
routes.post("/mint/stock", mintStock);
routes.post("/reset", reset);
routes.post("/order/buy", BuyOption);
routes.post("/order/sell", SellOption);
export default routes;
