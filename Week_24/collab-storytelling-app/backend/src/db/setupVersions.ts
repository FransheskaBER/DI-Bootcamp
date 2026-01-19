import pool from './index.js';

async function setupVersionsTable() {
    const client = await pool.connect();

    try {
        console.log('Creating versions table...');

        await client.query(`
            CREATE TABLE IF NOT EXISTS versions (
                id SERIAL PRIMARY KEY,
                story_id INT REFERENCES stories(id) ON DELETE CASCADE,
                title VARCHAR(255) NOT NULL,
                content TEXT NOT NULL,
                version_number INT NOT NULL,
                created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
            );
        `);

        console.log('Versions table created');

        // create index for faster queries
        await client.query(`
            CREATE INDEX IF NOT EXISTS idx_versions_story_id
            ON versions(story_id);
        `);
        console.log('Index created on story_id');
        console.log('Versions setup complete');
        
    } catch (error) {
        console.error('Error settings up versions:', error);
    } finally {
        client.release();
        await pool.end();
    }
}

setupVersionsTable();