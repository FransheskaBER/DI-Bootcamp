import { Request, Response } from "express";
import { createComment, getCommentsByStory, getCommentById, updateComment, deleteComment } from "../models/commentModel.js";
import { getStoryById } from "../models/storyModel.js";
import { sanitizeString } from "../helpers/validation.js";
import { getReactionsForComment } from "../models/reactionModel.js";

// create a new comment
export async function addComment(req: Request, res: Response): Promise<void> {
    try {
        const { story_id, comment_text } = req.body;
        const userId = req.user?.userId;

        if (!userId) {
            res.status(401).json({ message: 'User not authenticated' });
            return;
        }
        if (!story_id || !comment_text) {
            res.status(400).json({ message: 'Story ID and comment text are required' });
            return;
        }

        const cleanCommentText = sanitizeString(comment_text);
        if (cleanCommentText.length === 0) {
            res.status(400).json({ message: 'Comment text cannot be empty' });
            return;
        }

        // check if story exist
        const story = await getStoryById(story_id);
        if (!story) {
            res.status(404).json({ message: 'Story not found' });
            return;
        }

        const newComment = await createComment(story_id, userId, cleanCommentText);
        res.status(201).json(newComment);

    } catch (error) {
        console.error('Add comment error:', error);
        res.status(500).json({ message: 'Server error adding comment' });
    }
}

// get all comments for a story
export async function getStoryComments(req: Request, res: Response): Promise<void> {
    try {
        const id = req.params.story_id;
        const userId = req.user?.userId;

        if (typeof id !== 'string') {
            res.status(400).json({ message: 'Invalid story ID' });
            return;
        } 

        const storyId = parseInt(id);
        const comments = await getCommentsByStory(storyId);

        // add reaction data to each comment
        const commentsWithReactions = await Promise.all(
            comments.map(async (comment) => {
                const reactionData = await getReactionsForComment(comment.id, userId);
                return { ...comment, reactions: reactionData.reactions, user_reacted: reactionData.user_reacted };
            })
        );
        res.json(commentsWithReactions);
    } catch (error) {
        console.error('Get comments error:', error);
        res.status(500).json({ message: 'Server error fetching comments' });
    }
}

// update a comment (only comment author can update)
export async function updateCommentController(req: Request, res: Response): Promise<void> {
    try {
        const id = req.params.id;
        const userId = req.user?.userId;
        const { comment_text } = req.body;

        if (!userId) {
            res.status(401).json({ message: 'User not authenticated' });
            return;
        }
        if (typeof id !== 'string') {
            res.status(400).json({ message: 'Invalid comment ID' });
            return;
        }
        if (!comment_text) {
            res.status(400).json({ message: 'Comment text is required' });
            return;
        }
        const cleanCommentText = sanitizeString(comment_text);
        if (cleanCommentText.length === 0) {
            res.status(400).json({ message: 'Comment text cannot be empty' });
            return;
        }
        const commentId = parseInt(id);
        const comment = await getCommentById(commentId);
        if (!comment) {
            res.status(404).json({ message: 'Comment not found' });
            return;
        }
        // only comment author can update
        if (comment.user_id !== userId) {
            res.status(403).json({ message: 'You can only edit your own comments' });
            return;
        }
        
        const updatedCommentText = await updateComment(commentId, cleanCommentText);
        res.json(updatedCommentText);

    } catch (error) {
        console.error('Update comment error:', error);
        res.status(500).json({ message: 'Server error updating comment' });
    }
}

// delete a comment (comment author or story author can delete)
export async function deleteCommentController(req: Request, res: Response): Promise<void> {
    try {
        const id = req.params.id;
        const userId = req.user?.userId;

        if (!userId) {
            res.status(401).json({ message: 'User not authenticated' });
            return;
        }
        if (typeof id !== 'string') {
            res.status(400).json({ message: 'Invalid comment ID' });
            return;
        }
        
        const commentId = parseInt(id);
        const comment = await getCommentById(commentId);
        if (!comment) {
            res.status(404).json({ message: 'Comment not found' });
            return;
        }
        // get the stor to check if user is story author
        const story = await getStoryById(comment.story_id);

        // allow delete if user is comment author OR story author
        const isCommentAuthor = comment.user_id === userId;
        const isStoryAuthor = story?.author_id === userId;
        if (!isCommentAuthor && !isStoryAuthor) {
            res.status(403).json({ message: 'You can only delete your own comments or comments on your own stories' });
            return;
        }
        await deleteComment(commentId);
        res.json({ message: 'Comment deleted successfully' });
    } catch (error) {
        console.error('Delete comment error:', error);
        res.status(500).json({ message: 'Server error deleting comment' });
    }
}