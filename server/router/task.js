import express from "express";

import authMiddleware from "../middleware/auth.js";
import {
  createTaskService,
  deleteTaskService,
  getTaskByIdService,
  getTaskService,
  updateTaskService,
} from "../service/task.js";

const router = express.Router();

router.get("/private", authMiddleware, (req, res) => {
  res.status(200).json({ message: "Protected route accessed" });
});

router.get("/task", authMiddleware, async function (req, res) {
  const { userId } = req;
  console.log(userId);
  const data = await getTaskService(userId);
  res.status(200).json({ data });
});

router.get("/task/:id", async function (req, res) {
  const { id } = req.params;
  const tasks = await getTaskByIdService(id);
  res.status(200).json({ data: tasks });
});

router.post("/task", async function (req, res) {
  const task = req.body;
  const tasks = await createTaskService(task);
  res.status(200).json({ data: tasks });
});

router.put("/task/:id", async function (req, res) {
  const { title, content } = req.body;
  const { id } = req.params;
  const tasks = await updateTaskService(id, title, content);
  res.status(200).json({ data: tasks });
});

router.delete("/task/:id", async function (req, res) {
  const { id } = req.params;
  await deleteTaskService(id);
  res.status(200).json({ message: "Foi de arrasta" });
});

export default router;
