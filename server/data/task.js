import db from "../infra/database.js";

export async function getTasks() {
  return await db.any("SELECT * FROM task");
}

export async function createTask(title, content, userId) {
  return await db.none(
    "INSERT INTO task (title, content,user_id) VALUES ($1, $2, $3)",
    [title, content, userId]
  );
}
