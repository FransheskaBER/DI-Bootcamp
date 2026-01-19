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

// update a story
export async function updateStory(id: number, title: string, content: string): Promise<Story | null> {
    const result = await pool.query(
        'UPDATE stories SET title = $1, content = $2, updated_at = CURRENT_TIMESTAMP WHERE id = $3 RETURNING *',
        [title, content, id]
    );
    return result.rows[0] || null;
}

// delete a story
export async function deleteStory(id: number): Promise<boolean> {
    const result = await pool.query(
        'DELETE FROM stories WHERE id = $1 RETURNING *',
        [id]
    );
    return result.rowCount !== null && result.rowCount > 0;
}