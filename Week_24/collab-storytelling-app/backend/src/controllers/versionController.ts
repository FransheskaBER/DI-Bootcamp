import { Request, Response } from 'express';
import { getVersionsByStoryId, getVersionById, restoreVersion } from '../models/versionModel.js';
import { getStoryById } from '../models/storyModel.js';

// get version history for a story (author only)
export async function getVersionHistory(req: Request, res: Response): Promise<void> {
    try {
        const userId = req.user?.userId;
        if (!userId) {
            res.status(401).json({ message: 'User not authenticated' });
            return;
        }

        const storyId = parseInt(req.params.storyId as string);
        if (isNaN(storyId)) {
            res.status(400).json({ message: 'Invalid story ID' });
            return;
        }

        // check if story exists and user is the author
        const story = await getStoryById(storyId);
        if (!story) {
            res.status(404).json({ message: 'Story not found' });
            return;
        }

        if (story.author_id !== userId) {
            res.status(403).json({ message: 'Only the author can view version history' });
            return;
        }

        const versions = await getVersionsByStoryId(storyId);
        res.json(versions);

    } catch (error) {
        console.error('Get version history error:', error);
        res.status(500).json({ message: 'Server error fetching version history' });
    }
}

// get a specific version (author only)
export async function getVersion(req: Request, res: Response): Promise<void> {
    try {
        const userId = req.user?.userId;
        if (!userId) {
            res.status(401).json({ message: 'User not authenticated' });
            return;
        }

        const versionId = parseInt(req.params.versionId as string);
        if (isNaN(versionId)) {
            res.status(400).json({ message: 'Invalid version ID' });
            return;
        }

        const version = await getVersionById(versionId);
        if (!version) {
            res.status(404).json({ message: 'Version not found' });
            return;
        }

        // check if user is the author of the story
        const story = await getStoryById(version.story_id);
        if (!story || story.author_id !== userId) {
            res.status(403).json({ message: 'Only the author can view this version' });
            return;
        }

        res.json(version);

    } catch (error) {
        console.error('Get version error:', error);
        res.status(500).json({ message: 'Server error fetching version' });
    }
}

// restore a story to a previous version (author only)
export async function restoreVersionController(req: Request, res: Response): Promise<void> {
    try {
        const userId = req.user?.userId;
        if (!userId) {
            res.status(401).json({ message: 'User not authenticated' });
            return;
        }

        const storyId = parseInt(req.params.storyId as string);
        const versionId = parseInt(req.params.versionId as string);

        if (isNaN(storyId) || isNaN(versionId)) {
            res.status(400).json({ message: 'Invalid story ID or version ID' });
            return;
        }

        // check if story exists and user is the author
        const story = await getStoryById(storyId);
        if (!story) {
            res.status(404).json({ message: 'Story not found' });
            return;
        }

        if (story.author_id !== userId) {
            res.status(403).json({ message: 'Only the author can restore versions' });
            return;
        }

        const result = await restoreVersion(storyId, versionId);
        if (!result) {
            res.status(404).json({ message: 'Version not found' });
            return;
        }

        res.json({
            message: `Story restored to version ${result.version.version_number}`,
            story: result.story
        });

    } catch (error) {
        console.error('Restore version error:', error);
        res.status(500).json({ message: 'Server error restoring version' });
    }
}
