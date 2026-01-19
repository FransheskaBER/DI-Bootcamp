import pool from '../db/index.js';
import { type Version } from '../../../types/index.js';

// get all versions for a story (ordered by most recent first)
export async function getVersionsByStoryId(storyId: number): Promise<Version[]> {
    const result = await pool.query(
        'SELECT * FROM versions WHERE story_id = $1 ORDER BY version_number DESC',
        [storyId]
    );
    return result.rows;
}

// get a specific version
export async function getVersionById(versionId: number): Promise<Version | null> {
    const result = await pool.query(
        'SELECT * FROM versions WHERE id = $1',
        [versionId]
    );
    return result.rows[0] || null;
}

// restore a story to a previous version (saves current state as new version first)
export async function restoreVersion(storyId: number, versionId: number): Promise<{ story: any; version: Version } | null> {
    const client = await pool.connect();

    try {
        await client.query('BEGIN');

        // get the version to restore
        const versionResult = await client.query(
            'SELECT * FROM versions WHERE id = $1 AND story_id = $2',
            [versionId, storyId]
        );

        if (versionResult.rows.length === 0) {
            await client.query('ROLLBACK');
            return null;
        }

        const versionToRestore = versionResult.rows[0];

        // get current story state
        const currentStory = await client.query(
            'SELECT * FROM stories WHERE id = $1',
            [storyId]
        );

        if (currentStory.rows.length === 0) {
            await client.query('ROLLBACK');
            return null;
        }

        const story = currentStory.rows[0];

        // get the latest version number
        const maxVersionResult = await client.query(
            'SELECT COALESCE(MAX(version_number), 0) as max_version FROM versions WHERE story_id = $1',
            [storyId]
        );
        const nextVersion = maxVersionResult.rows[0].max_version + 1;

        // save current state as a new version before restoring
        await client.query(
            'INSERT INTO versions (story_id, title, content, version_number) VALUES ($1, $2, $3, $4)',
            [storyId, story.title, story.content, nextVersion]
        );

        // restore the story to the selected version
        const updatedStory = await client.query(
            'UPDATE stories SET title = $1, content = $2, updated_at = CURRENT_TIMESTAMP WHERE id = $3 RETURNING *',
            [versionToRestore.title, versionToRestore.content, storyId]
        );

        await client.query('COMMIT');

        return {
            story: updatedStory.rows[0],
            version: versionToRestore
        };

    } catch (error) {
        await client.query('ROLLBACK');
        throw error;
    } finally {
        client.release();
    }
}
