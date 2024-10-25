import express from "express";
import { getUserByEmail, createUser } from "../data/user.js";
import bcrypt from "bcrypt";

const router = express.Router();

router.post("/user", async function (req, res) {
  const { email, password } = req.body;
  const hashedPassword = await bcrypt.hash(password, 10);
  const user = await getUserByEmail(email);
  if (user) return res.status(401).send("E-mail já existe!");

  await createUser(email, hashedPassword);

  res.status(201).json({ message: "User registered successfully" });
});

export default router;
