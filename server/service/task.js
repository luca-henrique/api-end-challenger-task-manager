import { createTask, getTasks } from "../data/task.js";

export async function getTaskService() {
  return await getTasks();
}

export async function getTaskByIdService(id) {
  return {};
}

export async function createTaskService(data) {
  console.log(data);
  const { title, content, userId } = data;
  return await createTask(title, content, userId);
}

export async function deleteTaskService(id) {}

export async function updateTaskService(id) {
  return {};
}
