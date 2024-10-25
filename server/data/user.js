import db from "../infra/database.js";

export async function createUser(email, password) {
  return await db.none("INSERT INTO users (email, password) VALUES ($1, $2)", [
    email,
    password,
  ]);
}

export async function getUserByEmail(email) {
  return await db.oneOrNone("SELECT * FROM users WHERE email = $1", [email]);
}
