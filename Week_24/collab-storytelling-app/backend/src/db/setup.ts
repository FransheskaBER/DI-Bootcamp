import pkg from 'pg';
const { Pool } = pkg;
import dotenv from 'dotenv';

dotenv.config();


// create connection to your neon DB
const pool = new Pool({
    connectionString: process.env.DATABASE_URL,
    ssl: {
        rejectUnauthorized: false, // required for Neon
    },
});


async function setupDatabase() {
    const client = await pool.connect();

    try {
        console.log('Starting database setup...');

        // create Users table
        await client.query(`
            CREATE TABLE IF NOT EXISTS users (
                id SERIAL PRIMARY KEY,
                username VARCHAR(50) NOT NULL,
                email VARCHAR(100) NOT NULL,
                password_hash TEXT NOT NULL,
                created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
            );
        `);
        console.log('Users table created');


        // create Stories table
        await client.query(`
            CREATE TABLE IF NOT EXISTS stories (
            id SERIAL PRIMARY KEY,
            title VARCHAR(255) NOT NULL,
            content TEXT NOT NULL,
            author_id INT REFERENCES users(id) ON DELETE CASCADE,
            created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
            updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
            );
        `);
        console.log('Stories table created');


        // create Contributors table
        await client.query(`
            CREATE TABLE IF NOT EXISTS contributors (
            id SERIAL PRIMARY KEY,
            story_id INT REFERENCES stories(id) ON DELETE CASCADE,
            user_id INT REFERENCES users(id) ON DELETE CASCADE,
            created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
            UNIQUE(story_id, user_id)
            );    
        `);
        console.log('Contributors table created');

        console.log('Database setup complete!');

    } catch (error) {
        console.error('Error setting up database:', error);
    } finally {
        client.release();
        await pool.end();
    }
}

setupDatabase();