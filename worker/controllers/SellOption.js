import { sellNoOption, sellYesOption } from "../utils/sahayog.js";

export const SellOptionWorker = (
  userId,
  stockSymbol,
  quantity,
  price,
  stockType
) => {
  if (stockType == "yes") {
    return sellYesOption(userId, stockSymbol, quantity, price, res);
  } else if (stockType == "no") {
    return sellNoOption(userId, stockSymbol, quantity, price, res);
  }
};
