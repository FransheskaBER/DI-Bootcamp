import pool from './index.js';

async function setupCommentsTable() {
    const client = await pool.connect();

    try {
        console.log('Creating comments table...');

        await client.query(`
            CREATE TABLE IF NOT EXISTS comments (
                id SERIAL PRIMARY KEY,
                story_id INT REFERENCES stories(id) ON DELETE CASCADE,
                user_id INT REFERENCES users(id) ON DELETE CASCADE,
                comment_text TEXT NOT NULL,
                created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
                updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
            );
        `);
        console.log('Comments table created!');
        console.log('Comments setup completed');
    } catch (error) {
        console.error('Error setting up comments:', error);
    } finally {
        client.release();
        await pool.end();
    }
}

setupCommentsTable();
