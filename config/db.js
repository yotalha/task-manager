const { Pool } = require("pg");
require("dotenv").config();

const pool = new Pool({
  connectionString:
    process.env.DATABASE_URL ||
    "postgresql://username:password@localhost:5432/task_manager",
});

module.exports = {
  query: (text, params) => pool.query(text, params),
};
