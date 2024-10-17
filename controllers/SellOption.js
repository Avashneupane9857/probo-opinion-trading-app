export const sellOption = (req, res) => {
  const {
    userId,
    stockSymbol,
    quantity,
    price: originalPrice,
    stockType,
  } = req.body;
  const price = originalPrice / 100;

  if (stockType == "yes") {
    return sellYesOption(userId, stockSymbol, quantity, price, res);
  } else if (stockType == "no") {
    return sellNoOption(userId, stockSymbol, quantity, price, res);
  }
};
