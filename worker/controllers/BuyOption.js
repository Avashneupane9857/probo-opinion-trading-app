import { buyNoOption, buyYesOption, sendOrderBook } from "../utils/sahayog.js";

export const BuyOptionWorker = (
  userId,
  stockSymbol,
  quantity,
  price,
  stockType
) => {
  let response;

  if (stockType == "yes") {
    response = buyYesOption(userId, stockSymbol, quantity, price);
  } else if (stockType == "no") {
    response = buyNoOption(userId, stockSymbol, quantity, price);
  }

  sendOrderBook();
  return response;
};
