import express from "express";
import routerTask from "./router/task.js";
import authMiddleware from "./middleware/auth.js";
import routerAuth from "./router/auth.js";
import routerUser from "./router/user.js";
import cors from "cors";

const app = express();

app.use(
  cors({
    origin: "*",
  })
);

app.use(express.json());

app.use(routerTask);
app.use(routerAuth);
app.use(routerUser);

app.listen(3000);
