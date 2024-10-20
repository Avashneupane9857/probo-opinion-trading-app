import { sellNoOption, sellYesOption } from "../utils/sahayog.js";

export const SellOptionWorker = (
  userId,
  stockSymbol,
  quantity,
  price,
  stockType
) => {
  let res;
  if (stockType == "yes") {
    res = sellYesOption(userId, stockSymbol, quantity, price);
  } else if (stockType == "no") {
    res = sellNoOption(userId, stockSymbol, quantity, price);
  }
  sendOrderBook();
  return res;
};
