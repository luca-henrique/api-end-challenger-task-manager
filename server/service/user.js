import { getUserByEmail } from "../data/user.js";

export async function getUserByEmailService(email) {
  return await getUserByEmail(email);
}
