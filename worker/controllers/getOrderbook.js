import { ORDERBOOK } from "../data.js";
import { sendOrderBook } from "../utils/sahayog.js";

export const getOrderbookWorker = () => {
  sendOrderBook();

  return {
    msg: "Order book is ",
    data: ORDERBOOK,
  };
};

// when naya stock symbol create huncha teti bela tyo order book mah add huncha ki nai ?? navaye tah aali lyang hunch tah ani if huncha vaney tyo
// with 0 sabai kura huncha hola only stock ko name huncha ani tesko empty yes and no haina rah
