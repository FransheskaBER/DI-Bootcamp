import { Request, Response } from "express";
import { createStory, getAllStories, getStoryById, getStoriesByAuthor, updateStory, deleteStory } from "../models/storyModel.js";
import { sanitizeString } from "../helpers/validation.js";

// get all stories
export async function getStories(req: Request, res: Response): Promise<void> {
    try {
        const stories = await getAllStories();
        res.json(stories);
    } catch (error) {
        console.error('Get stories error:', error);
        res.status(500).json({ message: 'Server error fetching stories' });
    }
}

// get a single story by ID
export async function getStory(req: Request, res: Response): Promise<void> {
    try {
        const id = req.params.id;
        if (typeof id !== 'string') {
            res.status(400).json({ message: 'Invalid story ID' });
            return;
        }
        const storyId = parseInt(id);
        const story = await getStoryById(storyId);
        if (!story) {
            res.status(404).json({ message: 'Story not found' });
            return;
        }
        res.json(story);
    } catch (error) {
        console.error('Get story by id error:', error);
        res.status(500).json({ message: 'Server error fetching story by id' });
    }
}

// get stories by current user
export async function getMyStories(req: Request, res: Response): Promise<void> {
    try {
        const userId = req.user?.userId;
        if (!userId) {
            res.status(401).json({ message: 'User not authenticated' });
            return;
        }
        const stories = await getStoriesByAuthor(userId);
        res.json(stories);
    } catch (error) {
        console.error('Get my stories error:', error);
        res.status(500).json({ message: 'Server error fetching your stories' });
    }
}

// create a new story
export async function createNewStory(req: Request, res: Response): Promise<void> {
    try {
        const { title, content } = req.body;
        const userId = req.user?.userId;

        if (!userId) {
            res.status(401).json({ message: 'User not authenticated' });
            return;
        }

        if (!title || !content) {
            res.status(400).json({ message: 'Title and content are required' });
            return;
        }
        const cleanTitle = sanitizeString(title);
        const cleanContent = sanitizeString(content);

        if (cleanTitle.length === 0 || cleanContent.length === 0) {
            res.status(400).json({ message: 'Title and content cannot be empty' });
            return;
        }

        const newStory = await createStory(cleanTitle, cleanContent, userId);
        res.status(201).json(newStory);

    } catch (error) {
        console.error('Create story error:', error);
        res.status(500).json({ message: 'Server error creating story' });
    }
}

// update a story
export async function updateExistingStory(req: Request, res: Response): Promise<void> {
    try {
        const id = req.params.id;
        if (typeof id !== "string") {
            res.status(400).json({ message: 'Invalid story ID' });
            return;
        }
        const storyId = parseInt(id);

        const { title, content } = req.body;
        if (!title || !content) {
            res.status(400).json({ message: 'Title and content are required' });
            return;
        }
        const cleanTitle = sanitizeString(title);
        const cleanContent = sanitizeString(content);
        if (cleanTitle.length === 0 || cleanContent.length === 0) {
            res.status(400).json({ message: 'Title and content cannot be empty' });
            return;
        }

        const updatedStory = await updateStory(storyId, cleanTitle, cleanContent);
        if (!updatedStory) {
            res.status(404).json({ message: 'Story not found' });
            return;
        }
        res.json(updatedStory);

    } catch (error) {
        console.error('Update story error:', error);
        res.status(500).json({ message: 'Server error updating a story' });
    }
}

// delete a story
export async function deleteExistingStory(req: Request, res:Response): Promise<void> {
    try {
        const id = req.params.id;
        if (typeof id !== "string") {
            res.status(400).json({ message: 'Invalid story ID' });
            return;
        }
        const storyId = parseInt(id);
        
        const deletedStory = await deleteStory(storyId);
        if (!deletedStory) {
            res.status(404).json({ message: 'Story not found' });
            return;
        }
        res.json({ message: 'Story deleted' });

    } catch (error) {
        console.error('Delete story error:', error);
        res.status(500).json({ message: 'Server error deleting a story' });
    }
}
