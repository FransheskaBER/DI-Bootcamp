import pool from '../db/index.js';
import { type Reaction } from '../../../types/index.js';

// add a reaction
export async function addReaction(commentId: number, userId: number, reactionType: string): Promise<Reaction> {
    const result = await pool.query(
        'INSERT INTO reactions (comment_id, user_id, reaction_type) VALUES ($1, $2, $3) RETURNING *',
        [commentId, userId, reactionType]
    );
    return result.rows[0];
}

// Remove a reaction
export async function removeReaction(commentId: number, userId: number, reactionType: string): Promise<boolean> {
  const result = await pool.query(
    'DELETE FROM reactions WHERE comment_id = $1 AND user_id = $2 AND reaction_type = $3 RETURNING *',
    [commentId, userId, reactionType]
  );
  return result.rowCount !== null && result.rowCount > 0;
}

// Get reactions for a comment with counts
export async function getReactionsForComment(commentId: number, userId?: number) {
  
    // Get all reactions for the comment
    const result = await pool.query(
        'SELECT reaction_type, COUNT(*) as count FROM reactions WHERE comment_id = $1 GROUP BY reaction_type',
        [commentId]
    );

    // build reactions object
    const reactions: { [key: string]: number } = {};
    result.rows.forEach((row) => { reactions[row.reaction_type] = parseInt(row.count) });

    // get user's reactions if userId provided
    let userReacted: string[] = [];
    if (userId) {
        const userResult = await pool.query(
            'SELECT reaction_type FROM reactions WHERE comment_id = $1 AND user_id = $2',
            [commentId, userId]
        );
        userReacted = userResult.rows.map((row) => row.reaction_type);
    }

    return { reactions, user_reacted: userReacted };
}

