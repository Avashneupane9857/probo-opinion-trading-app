import { INR_BALANCES } from "../data.js";
import { prisma } from "../prisma/prisma.js";
// import { prisma } from "../prisma/prisma.js";

export async function creatUserWorker(userId) {
  if (INR_BALANCES[userId]) {
    return {
      msg: "User already exists",
      success: false,
    };
  }
  // const existingUser = await prisma.user.findUnique({
  //   where: { username: userId },
  // });
  // if (existingUser) {
  //   return {
  //     success: false,
  //     msg: "Username already taken",
  //   };
  // }

  // const newUser = await prisma.user.create({ data: { username: userId } });
  // console.log(newUser);
  INR_BALANCES[userId] = { balance: 0, locked: 0 };
  return {
    success: true,
    msg: `User  created successfully`,
    data: {
      user: userId,
      balances: INR_BALANCES[userId],
    },
  };
}
