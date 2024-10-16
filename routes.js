import express from "express";
import { createUser } from "./controllers/createUser.js";
import { createStockSymbol } from "./controllers/createStockSymbol.js";
const routes = express.Router();
routes.post("/user/create/:userId", createUser);
routes.post("/symbol/create/:stocksymbol", createStockSymbol);
export default routes;
