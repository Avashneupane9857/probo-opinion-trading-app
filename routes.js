import express from "express";
import { createUser } from "./controllers/createUser.js";
import { createStockSymbol } from "./controllers/createStockSymbol.js";
import { getOrderbook } from "./controllers/getOrderbook.js";
import { getBalance, getUserBalance } from "./controllers/getBalance.js";
import {
  getStockBalance,
  getUserStockBalance,
} from "./controllers/getStockBalance.js";
import { loadBalance } from "./controllers/loadBalance.js";
import { reset } from "./controllers/reset.js";
import { mintTrade } from "./controllers/mintStock.js";
import { BuyOption } from "./controllers/BuyOption.js";
import { SellOption } from "./controllers/SellOption.js";

const routes = express.Router();
routes.post("/user/create/:userId", createUser);
routes.post("/symbol/create/:stockSymbol", createStockSymbol);
routes.get("/orderbook", getOrderbook);
routes.get("/balances/inr", getBalance);
routes.get("/balance/inr/:userId", getUserBalance);
routes.get("/balances/stock", getStockBalance);
routes.post("/onramp/inr", loadBalance);
routes.get("/balance/stock/:userId", getUserStockBalance);
routes.post("/mint/stock", mintTrade);
routes.get("/reset", reset);
routes.post("/order/buy", BuyOption);
routes.post("/order/sell", SellOption);
export default routes;
