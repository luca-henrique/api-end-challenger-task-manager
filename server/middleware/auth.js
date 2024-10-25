import jwt from "jsonwebtoken";

export const PRIVATE_KEY = "1010FFF";

export default function verifyToken(req, res, next) {
  const token = req.header("Authorization");
  if (!token) return res.status(401).json({ error: "Access denied" });
  try {
    const decoded = jwt.verify(token, PRIVATE_KEY);
    const user = JSON.parse(decoded.user);
    req.userId = user.id;
    next();
  } catch (error) {
    res.status(401).json({ error: "Invalid token" });
  }
}
