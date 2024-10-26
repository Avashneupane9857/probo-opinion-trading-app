import { createClient } from "redis";
const client = createClient();
client.connect();
const subscribeClient = createClient({
  host: process.env.REDIS_HOST || "my-redis",
  port: process.env.REDIS_PORT || 6379,
});
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
