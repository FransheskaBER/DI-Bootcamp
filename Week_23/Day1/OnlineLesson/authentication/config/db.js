// database connection
import knex from "knex";
import "dotenv/config";

export const db = knex({
    client: 'pg',
    connection: {
        connectionString: process.env.DATABASE_URL,
        ssl: { rejectUnauthorized: false },
    },
    pool: { min: 0, max: 5 },
    acquireConnectionTimeout: 10000,
});