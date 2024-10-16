import { INR_BALANCES } from "../data.js";

export const createUser = (req, res) => {
  const { userId } = req.params;
  if (INR_BALANCES[userId]) {
    return res.json({
      msg: "User already exists",
      success: false,
    });
  }
  INR_BALANCES[userId] = { balance: 0, locked: 0 };
  res.status(200).json({
    msg: `User '${userId}'  created `,
    data: INR_BALANCES,
  });
};
