import db from "../infra/database.js";

export async function getTasks(userId) {
  return await db.any("SELECT * FROM task WHERE user_id = $1", [userId]);
}

export async function createTask(title, content, userId) {
  return await db.one(
    "INSERT INTO task (title, content,user_id) VALUES ($1, $2, $3) RETURNING *",
    [title, content, userId]
  );
}

export async function deleteTask(id) {
  return await db.result("DELETE FROM task WHERE id = $1", [id]);
}

export async function updateTask(id, title, content) {
  return await db.none(
    "UPDATE task SET title = $1, content = $2 WHERE id = $3",
    [title, content, id]
  );
}
