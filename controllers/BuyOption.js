import { buyNoOption, buyYesOption } from "../utils/sahayog.js";

export const BuyOption = (req, res) => {
  const {
    userId,
    stockSymbol,
    quantity,
    price: originalPrice,
    stockType,
  } = req.body;
  const price = originalPrice / 100;

  if (stockType == "yes") {
    return buyYesOption(userId, stockSymbol, quantity, price, res);
  } else if (stockType == "no") {
    return buyNoOption(userId, stockSymbol, quantity, price, res);
  }
};
