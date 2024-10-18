import { createClient } from "redis";
import { creatUserWorker } from "./controllers/createUser.js";
async function main() {
  const client = createClient();
  await client.connect();
  while (1) {
    const response = await client.BRPOP("req", 0);
    console.log(response.element.reqType);
    const data = JSON.parse(response.element);
    switch (data.reqType) {
      case "createUser":
        const ans = creatUserWorker(data.userId);
        console.log("processeed users submission", ans);
        break;
      default:
        console.log("Route not found");
    }
  }
}

main();
