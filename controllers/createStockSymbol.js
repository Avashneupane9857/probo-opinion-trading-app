import { ORDERBOOK, STOCK_BALANCES } from "../data.js";

export const createStockSymbol = (req, res) => {
  const { stocksymbol } = req.params;
  if (STOCK_BALANCES[stocksymbol]) {
    return res.status(401).json({
      msg: `Stock symbol ${stocksymbol} already exists`,
      success: false,
    });
  }
  const defaultSchema = {
    yes: { quantity: 0, locked: 0 },
    no: { quantity: 0, locked: 0 },
  };
  Object.keys(STOCK_BALANCES).forEach((userId) => {
    STOCK_BALANCES[userId][stocksymbol] = { defaultSchema };
  });

  ORDERBOOK[stocksymbol] = { yes: {}, no: {} };

  //   STOCK_BALANCES[stocksymbol] = { yes: { quantity: 0, locked: 0 } };
  res.status(200).json({
    msg: `Stock symbol '${stocksymbol}' created `,
    data: STOCK_BALANCES,
    success: true,
  });
};
