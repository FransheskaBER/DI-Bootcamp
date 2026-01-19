import { Request, Response } from 'express';
import { addReaction, removeReaction } from '../models/reactionModel.js';

// Toggle a reaction (add if not exists, remove if exists)
export async function toggleReaction(req: Request, res: Response): Promise<void> {
  try {
    const { comment_id, reaction_type } = req.body;
    const userId = req.user?.userId;

    if (!userId) {
      res.status(401).json({ message: 'User not authenticated' });
      return;
    }

    if (!comment_id || !reaction_type) {
      res.status(400).json({ message: 'Comment ID and reaction type are required' });
      return;
    }

    // Validate reaction type
    const validReactions = ['like', 'heart', 'laugh', 'wow'];
    if (!validReactions.includes(reaction_type)) {
      res.status(400).json({ message: 'Invalid reaction type' });
      return;
    }

    // Try to remove first (if exists)
    const removed = await removeReaction(comment_id, userId, reaction_type);

    if (removed) {
      // Reaction was removed
      res.json({ action: 'removed', reaction_type });
    } else {
      // Reaction doesn't exist, add it
      const newReaction = await addReaction(comment_id, userId, reaction_type);
      res.status(201).json({ action: 'added', reaction: newReaction });
    }
  } catch (error: any) {
    // Handle duplicate reaction (shouldn't happen with toggle logic, but just in case)
    if (error.code === '23505') {
      res.status(400).json({ message: 'Reaction already exists' });
      return;
    }
    console.error('Toggle reaction error:', error);
    res.status(500).json({ message: 'Server error toggling reaction' });
  }
}