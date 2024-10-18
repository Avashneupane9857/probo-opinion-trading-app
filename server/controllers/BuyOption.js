import { buyNoOption, buyYesOption, sendOrderBook } from "../utils/sahayog.js";

export const BuyOption = (req, res) => {
  const {
    userId,
    stockSymbol,
    quantity,
    price: originalPrice,
    stockType,
  } = req.body;
  const price = originalPrice / 100;

  let response;
  if (stockType == "yes") {
    response = buyYesOption(userId, stockSymbol, quantity, price, res);
  } else if (stockType == "no") {
    response = buyNoOption(userId, stockSymbol, quantity, price, res);
  }

  sendOrderBook();
  return response;
};
