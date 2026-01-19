import pool from './index.js';

async function addAvatarColumn() {
    const client = await pool.connect();

    try {
        console.log('Adding avatar_url column to users table...');

        await client.query(`
            ALTER TABLE users
            ADD COLUMN IF NOT EXISTS avatar_url TEXT;
        `);

        console.log('avatar_url column added');
        console.log('Migration complete!');
    } catch (error) {
        console.error('Error adding column:', error);
    } finally {
        client.release();
        await pool.end();
    }
}

addAvatarColumn();