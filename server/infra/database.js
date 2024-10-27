import pgPromise from "pg-promise";

const pgp = pgPromise();

const host = process.env.DB_HOST || "localhost";
const port = process.env.DB_PORT || "5432";
const database = process.env.DB_DATABASE || "task_manager_db";
const user = process.env.DB_USER || "postgres";
const password = process.env.DB_PASSWORD || "root";

const db = pgp({
  host,
  port,
  database,
  user,
  password,
});

export default db;
