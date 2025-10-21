// 🧠 db.js
// Purpose: Creates and exports a single "db" object that represents
// the database connection, using Knex.
//
// Why this file exists:
// - So the rest of the app can simply import { db } and start querying
//   without reconfiguring Knex every time.
// - Keeps all database setup in one place.
//
// The pool (min/max) defines how many connections Knex can keep open.

import knex from "knex";
import 'dotenv/config'; // loads .env so process.env.DATABASE_URL is available

export const db = knex({
    client: 'pg',
    connection: process.env.DATABASE_URL,
    pool: { min: 0, max: 5 }, // “Keep at least 0 connections open, but never more than 5 at the same time.”
});

// pool = a small group of reusable DB connections.
// min: 0, max: 5 = how many connections Knex can keep open.
// It makes your app faster and safer under load.