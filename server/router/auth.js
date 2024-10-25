import express from "express";
import jsonwebtoken from "jsonwebtoken";
import bcrypt from "bcrypt";

import { PRIVATE_KEY } from "../middleware/auth.js";

import { getUserByEmailService } from "../service/user.js";

const router = express.Router();

router.post("/sign-in", async function (req, response) {
  try {
    const { email, password } = req.body;

    const user = await getUserByEmailService(email);

    if (!user) return response.status(401).send("Usuario n existe!");

    const passwordMatch = await bcrypt.compare(password, user.password);

    if (!passwordMatch) {
      return response.status(401).json({ error: "Authentication failed" });
    }

    const token = jsonwebtoken.sign(
      { user: JSON.stringify(user) },
      PRIVATE_KEY,
      { expiresIn: "60m" }
    );

    return response.status(200).json({ data: { user, token } });
  } catch (error) {
    return res.send(error);
  }
});

export default router;
