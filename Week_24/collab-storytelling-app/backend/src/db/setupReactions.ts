import pool from './index.js';

async function setupReactionsTable() {
    const client = await pool.connect();

    try {
        console.log('🔄 Creating reactions table...');

        await client.query(`
            CREATE TABLE IF NOT EXISTS reactions (
                id SERIAL PRIMARY KEY,
                comment_id INT REFERENCES comments(id) ON DELETE CASCADE,
                user_id INT REFERENCES users(id) ON DELETE CASCADE,
                reaction_type VARCHAR(20) NOT NULL,
                created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
                UNIQUE(comment_id, user_id, reaction_type)
            );
        `);
        console.log('Reactions table created');

        console.log('Reactions setup complete!');
    } catch (error) {
        console.error('Error setting up reactions:', error);
    } finally {
        client.release();
        await pool.end();
    }
}

setupReactionsTable();