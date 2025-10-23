import db from "./db.js";


const test = async () => {
  const result = await db.raw("SELECT NOW()");
  console.log(result.rows[0]);
};

test();

// Process:

// 1. When you run db.raw("SELECT NOW()"), Knex sends this SQL command directly to PostgreSQL: SELECT NOW();

// 2. Knex then wraps that into a JavaScript object like:
// {
//   rows: [
//     { now: '2025-10-22T14:05:14.823Z' }
//   ]
// }

// 3. That’s why we log:
// result.rows[0]

// OUTPUT: { now: 2025-10-22T14:05:14.823Z }