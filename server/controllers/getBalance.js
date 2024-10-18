import { INR_BALANCES } from "../data.js";
// all balances
export const getBalance = (req, res) => {
  res.status(200).json({
    msg: " All user balances are  ",
    data: INR_BALANCES,
  });
};

export const getUserBalance = (req, res) => {
  const { userId } = req.params;

  if (!INR_BALANCES[userId]) {
    return res.status(400).json({ msg: "No user found" });
  }

  res.status(200).json({
    msg: `user: ${userId}`,
    data: INR_BALANCES[userId],
  });
};

