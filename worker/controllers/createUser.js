import { INR_BALANCES } from "../data.js";

export function creatUserWorker(userId) {
  if (INR_BALANCES[userId]) {
    return {
      msg: "User already exists",
      success: false,
    };
  }
  INR_BALANCES[userId] = { balance: 0, locked: 0 };
  const res = { msg: `User '${userId}'  created `, data: INR_BALANCES };
  return res;
}
