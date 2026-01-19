import { Request, Response, NextFunction } from 'express';
import { getStoryById } from '../models/storyModel.js';
import { isContributor } from '../models/contributorModel.js';

// Middleware to check if user is the author of a story
export async function authorizeAuthor(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
        const id = req.params.id;
        if (typeof id !== 'string') {
            res.status(400).json({ error: 'Invalid ID' });
            return;
        }
        const storyId = parseInt(id);
        const userId = req.user?.userId;

        if (!userId) {
            res.status(401).json({ message: 'User not authenticated' });
            return;
        }

        // get the story from the database
        const story = await getStoryById(storyId);

        if (!story) {
            res.status(404).json({ message: 'Story not found' });
            return;
        }

        // check if user is the author
        if (story.author_id !== userId) {
            res.status(403).json({ message: 'You are not authorize to perform this action' });
            return;
        }

        next(); // User is the author, continue..
    } catch (error) {
        res.status(500).json({ message: 'Server error during authorization' });   
    }
}

// Middleware to check if user is the author or contributor
export async function authorizeAuthorOrContributor(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
        const id = req.params.id;
        if (typeof id !== 'string') {
            res.status(400).json({ error: 'Invalid ID' });
            return;
        }
        const storyId = parseInt(id);
        const userId = req.user?.userId;

        if (!userId) {
            res.status(401).json({ message: 'User not authenticated' });
            return;
        }

        const story = await getStoryById(storyId);

        if (!story) {
            res.status(404).json({ message: 'Story not found' });
            return;
        }

        // check if user is the author
        const isAuthor = story.author_id === userId;

        // check is user is a contributor
        const isContrib = await isContributor(storyId, userId);

        if (!isAuthor && !isContrib) {
            res.status(403).json({ message: 'You are not authorize to edit this story' });
            return;
        }
        next(); // User is authorize, continue...
    } catch (error) {
        res.status(500).json({ message: 'Server error during authorization' });
    }
}