import { createClient } from "redis";
import { v4 } from "uuid";
export const createUser = async (req, res) => {
  const id = v4();
  const { userId } = req.params;
  const client = createClient();
  await client.connect();
  await client.LPUSH(
    "req",
    JSON.stringify({ id, userId, reqType: "createUser" })
  );
  // const ress = creatUserWorker(userId);

  res.status(200).json({ msg: "Create user added in queue" });
};
