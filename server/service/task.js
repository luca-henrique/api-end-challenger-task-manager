import { createTask, getTasks, deleteTask, updateTask } from "../data/task.js";

export async function getTaskService(userId) {
  return await getTasks(userId);
}

export async function getTaskByIdService(id) {
  return {};
}

export async function createTaskService(data) {
  const { title, content, userId } = data;
  return await createTask(title, content, userId);
}

export async function deleteTaskService(id) {
  return await deleteTask(id);
}

export async function updateTaskService(id, title, content) {
  return await updateTask(id, title, content);
}
