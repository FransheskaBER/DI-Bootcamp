import pool from '../db/index.js';
import { Contributor } from '../../../types/index.js';

// add a contributor to a story
export async function addContributor(storyId: number, userId: number): Promise<Contributor> {
    const result = await pool.query(
        'INSERT INTO contributors (story_id, user_id) VALUES ($1, $2) RETURNING *',
        [storyId, userId]
    );
    return result.rows[0];
}

// get all contributors for a story
export async function getContributorsByStory(storyId: number): Promise<Contributor[]> {
    const result = await pool.query(
        'SELECT * FROM contributors WHERE story_id = $1',
        [storyId]
    );
    return result.rows;
}

// check if a user is a contributor for a story
export async function isContributor(storyId: number, userId: number): Promise<boolean> {
    const result = await pool.query(
        'SELECT * FROM contributors WHERE story_id = $1 AND user_id = $2',
        [storyId, userId]
    );
    return result.rows.length > 0;
}

// remove a contributor from a story
export async function removeContributor(id: number): Promise<boolean> {
    const result = await pool.query(
        'DELETE FROM contributors WHERE id = $1 RETURNING *',
        [id]
    );
    return result.rowCount !== null && result.rowCount > 0;
}

// remove a contributor by story_id and user_id
export async function removeContributorByIds(storyId: number, userId: number): Promise<boolean> {
    const result = await pool.query(
        'DELETE FROM contributors WHERE story_id = $1 AND user_id = $2 RETURNING *',
        [storyId, userId]
    );
    return result.rowCount !== null && result.rowCount > 0;
}