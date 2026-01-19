import pool from '../db/index.js';
import { Story } from '../../../types/index.js';

// create a new story
export async function createStory(title: string, content: string, authorId: number): Promise<Story> {
    const result = await pool.query(
        'INSERT INTO stories (title, content, author_id) VALUES ($1, $2, $3) RETURNING *',
        [title, content, authorId]
    );
    return result.rows[0];
}

// get all stories
export async function getAllStories(): Promise<Story[]> {
    const result = await pool.query(
        'SELECT * FROM stories ORDER BY created_at DESC'
    );
    return result.rows;
}

// get a single story by ID
export async function getStoryById(id: number): Promise<Story | null> {
    const result = await pool.query(
        'SELECT * FROM stories WHERE id = $1',
        [id]
    );
    return result.rows[0] || null;
}

// get all stories by a specific author
export async function getStoriesByAuthor(authorId: number): Promise<Story[]> {
    const result = await pool.query(
        'SELECT * FROM stories WHERE author_id = $1 ORDER BY created_at DESC',
        [authorId]
    );
    return result.rows;
}

// update a story (auto-save previous versions)
export async function updateStory(id: number, title: string, content: string): Promise<Story | null> {
    const client = await pool.connect();

    try {
        await client.query('BEGIN');

        // get the current story before updating
        const currentStory = await client.query(
            'SELECT * FROM stories WHERE id = $1',
            [id]
        );

        if (currentStory.rows.length === 0) {
            await client.query('ROLLBACK');
            return null;
        }

        const story = currentStory.rows[0];

        // get the latest version number for this story
        const versionResult = await client.query(
            'SELECT COALESCE(MAX(version_number), 0) as max_version FROM versions WHERE story_id = $1',
            [id]
        );
        const nextVersion = versionResult.rows[0].max_version + 1;

        await client.query(
            'INSERT INTO versions (story_id, title, content, version_number) VALUES ($1, $2, $3, $4)',
            [id, story.title, story.content, nextVersion]
        );

        // update the story
        const result = await client.query(
            'UPDATE stories SET title = $1, content = $2, updated_at = CURRENT_TIMESTAMP WHERE id = $3 RETURNING *',
            [title, content, id]
        );

        await client.query('COMMIT');
        
        return result.rows[0];
    } catch (error) {
        await client.query('ROLLBACK');
        throw error;
    } finally {
        client.release();
    }
}

// delete a story
export async function deleteStory(id: number): Promise<boolean> {
    const result = await pool.query(
        'DELETE FROM stories WHERE id = $1 RETURNING *',
        [id]
    );
    return result.rowCount !== null && result.rowCount > 0;
}