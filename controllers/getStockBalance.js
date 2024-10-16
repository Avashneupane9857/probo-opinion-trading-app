import { STOCK_BALANCES } from "../data.js";

export const getStockBalance = (req, res) => {
  res.status(200).json({
    msg: "Stock balances are ",
    data: STOCK_BALANCES,
  });
};
export const getUserStockBalance = (req, res) => {
  const { userId } = req.params;
  if (!STOCK_BALANCES[userId]) {
    return res.json({
      msg: "User not found in Stock balance",
    });
  }
  console.log(STOCK_BALANCES[userId]);
  res.status(200).json({
    msg: `${userId} stock balance is ${STOCK_BALANCES[userId]} `,
  });
};


//get stock symbol garda tah aaila kei pani aairako chaina 