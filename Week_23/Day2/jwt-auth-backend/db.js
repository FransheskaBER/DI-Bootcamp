import pg from "pg";
import "dotenv/config"

const { Pool } = pg;

// create connection pool that manages mutlitple database connections efficiently
const pool = new Pool({
    connectionString: process.env.DATA_BASE_URL,
    ssl: {
        rejectUnauthorized: false //required for neon
    }
});

// test the connection
pool.connect((error, client, release) => {
    if (error) {
        console.log("Error connecting to database:", error.stack);
    } else {
        console.log("Connected to Neon PostgreSQL database");
        release(); //release the client back to the pool
    }
});

export default pool;