import { Request, Response } from "express";
import { addContributor, getContributorsByStory, removeContributor, removeContributorByIds } from "../models/contributorModel.js";
import { getStoryById } from "../models/storyModel.js";
import { findUserById } from "../models/userModel.js";

// add a contributor to a story
export async function addStoryContributor(req: Request, res: Response): Promise<void> {
    try {
        const { story_id, user_id } = req.body;
        const currentUserId = req.user?.userId;

        if (!currentUserId) {
            res.status(401).json({ message: 'User not authenticated' });
            return;
        }

        if (!story_id || !user_id) {
            res.status(400).json({ message: 'Story ID and user ID are required' });
            return;
        }

        // check if story exists
        const story = await getStoryById(story_id);
        if (!story) {
            res.status(404).json({ message: 'Story not found' });
            return;
        } 

        // only the author can add contributors
        if (story.author_id !== currentUserId) {
            res.status(403).json({ message: 'Only the author can add contributors' });
            return;
        }

        // check if user exists
        const user = await findUserById(user_id);
        if (!user) {
            res.status(404).json({ message: 'User not found' });
            return;
        }

        const contributor = await addContributor(story_id, user_id);
        res.status(201).json(contributor);

    } catch (error: any) {
        console.error('Add a contributor error:', error);

        // handle duplicate contributor
        if (error.code === '23505') {
            res.status(400).json({ message: 'User is already a contributor' });
            return;
        }

        res.status(500).json({ message: 'Server error adding contributor' });
    }
}

// get all contributor for a story
export async function getStoryContributors(req: Request, res: Response): Promise<void> {
    try {
        const id = req.params.story_id;
        if (typeof id !== 'string') {
            res.status(400).json({ message: 'Invalid story ID' });
            return;
        }

        const storyId = parseInt(id);
        const contributors = await getContributorsByStory(storyId)
        res.json(contributors);
        
    } catch (error) {
        console.error('Get contributors error:', error);
        res.status(500).json({ message: 'Server error getting contributors' });
    }
}

// remove a contributor from a story
export async function removeStoryContributor(req: Request, res: Response): Promise<void> {
    try {
        const id = req.params.id;
        const currentUserId = req.user?.userId;

        if (!currentUserId) {
            res.status(401).json({ message: 'User not authenticated' });
            return;
        }

        if (typeof id !== 'string') {
            res.status(400).json({ message: 'Invalid contributor ID' });
            return;
        }

        const contributorId = parseInt(id);
        const deletedContributor = await removeContributor(contributorId);

        if (!deletedContributor) {
            res.status(404).json({ message: 'Contributor not found' });
            return;
        }

        res.json({ message: 'Contributor removed' });

    } catch (error) {
        console.error('Remove contributor error:', error);
        res.status(500).json({ message: 'Server error removing contributors' });   
    }
}

