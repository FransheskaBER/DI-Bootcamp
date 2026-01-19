import pool from './index.js';

async function addCommentsEnabledColumn() {
    const client = await pool.connect();

    try {
        console.log('Adding comments_enabled column to stories table...');
        await client.query(`
            ALTER TABLE stories
            ADD COLUMN IF NOT EXISTS comments_enabled BOOLEAN DEFAULT true;
        `);
        console.log('Comments_enabled column added');
        console.log('Migration complete!');
    } catch (error) {
        console.error('Error adding column:', error);
    } finally {
        client.release();
        await pool.end();
    }
}

addCommentsEnabledColumn();