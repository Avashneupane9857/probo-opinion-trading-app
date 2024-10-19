import { createClient } from "redis";
const client = createClient();
client.connect();
const subscribeClient = createClient();
subscribeClient.connect();

export async function listener(symbol, res) {
  try {
    await subscribeClient.subscribe(symbol, (message) => {
      console.log(`Received message: ${message}`);
      res.send(message);
    });
    console.log(`Subscribed to channel: ${symbol}`);
  } catch (error) {
    console.error("Error in listener:", error);
    res.status(500).send("Error during subscription");
  }
}
