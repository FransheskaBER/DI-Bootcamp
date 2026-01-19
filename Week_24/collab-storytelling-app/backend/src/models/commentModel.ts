import pool from '../db/index.js';
import { type Comment } from '../../../types/index.js';

// create a new comment
export async function createComment(storyId: number, userId: number, commentText: string): Promise<Comment> {
    const result = await pool.query(
        'INSERT INTO comments (story_id, user_id, comment_text) VALUES ($1, $2, $3) RETURNING *',
        [storyId, userId, commentText]
    );
    return result.rows[0];
}

// get all comments for a story
export async function getCommentsByStory(storyId: number): Promise<Comment[]> {
    const result = await pool.query(
        'SELECT * FROM comments WHERE story_id = $1 ORDER BY created_at ASC',
        [storyId]
    );
    return result.rows;
}

// get single comments by ID
export async function getCommentById(id: number): Promise<Comment | null> {
    const result = await pool.query(
        'SELECT * FROM comments WHERE id = $1',
        [id]
    );
    return result.rows[0] || null;
}

// update a comment
export async function updateComment(id: number, commentText: string): Promise<Comment | null> {
    const result = await pool.query(
        'UPDATE comments SET comment_text = $1, updated_at = CURRENT_TIMESTAMP WHERE id = $2 RETURNING *',
        [commentText, id]
    );
    return result.rows[0] || null;
}

// delete a comment
export async function deleteComment(id: number): Promise<boolean> {
    const result = await pool.query(
        'DELETE FROM comments WHERE id = $1 RETURNING *', 
        [id]
    );
    return result.rowCount !== null && result.rowCount > 0;
}