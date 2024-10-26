import { Prisma } from "@prisma/client";
import { ORDERBOOK, STOCK_BALANCES } from "../data.js";
import { prisma } from "../prisma/prisma.js";

export const createStockSymbolWorker = async (stockSymbol) => {
  console.log(stockSymbol);
  // const existingSymbol = await prisma.market.findUnique({
  //   where: { symbol: stockSymbol },
  // });
  // if (existingSymbol) {
  //   return {
  //     success: false,
  //     message: `Market Symbol ${stockSymbol} already exists`,
  //   };
  // }
  // const newSymbol = await prisma.market.create({
  //   data: {
  //     symbol: stockSymbol,
  //     endTime,
  //     description,
  //     source,
  //   },
  // });

  Object.keys(STOCK_BALANCES).forEach((userId) => {
    STOCK_BALANCES[userId][stockSymbol] = {
      yes: {
        quantity: 0,
        locked: 0,
      },
      no: {
        quantity: 0,
        locked: 0,
      },
    };
  });

  ORDERBOOK[stockSymbol] = { yes: {}, no: {} };

  return {
    message: `Symbol ${stockSymbol} created successfully.`,
    data: ORDERBOOK,
  };
};
