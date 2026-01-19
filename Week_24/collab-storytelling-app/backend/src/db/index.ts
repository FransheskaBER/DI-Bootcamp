// create database connection module
import pkg from 'pg';
const { Pool } = pkg;
import dotenv from 'dotenv';

dotenv.config();

const pool = new Pool({
    connectionString: process.env.DATABASE_URL,
    ssl: {
        rejectUnauthorized: false, // required for Neon
    },
});

pool.on('connect', () => {
    console.log('Connected to PostgreSQL database');
});

pool.on('error', (error) => {
    console.log('Unexpected database error:', error);
});

export default pool;