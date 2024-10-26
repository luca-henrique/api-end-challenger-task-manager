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

router.get("/task", authMiddleware, async function (req, res) {
  const { userId } = req;
  const data = await getTaskService(userId);
  res.status(200).json({ data });
});

router.get("/task/:id", authMiddleware, async function (req, res) {
  const { id } = req.params;
  const tasks = await getTaskByIdService(id);
  res.status(200).json({ data: tasks });
});

router.post("/task", authMiddleware, async function (req, res) {
  const { userId } = req;
  const task = req.body;
  const custom = { ...task, userId };
  const tasks = await createTaskService(task);
  res.status(200).json({ data: tasks });
});

router.put("/task/:id", authMiddleware, async function (req, res) {
  const { title, content } = req.body;
  const { id } = req.params;
  const tasks = await updateTaskService(id, title, content);
  res.status(200).json({ data: tasks });
});

router.delete("/task/:id", authMiddleware, async function (req, res) {
  const { id } = req.params;
  await deleteTaskService(id);
  res.status(200).json({ message: "Foi de arrasta" });
});

export default router;
