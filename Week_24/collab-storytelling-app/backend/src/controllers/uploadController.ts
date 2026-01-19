import { Request, Response } from "express";
import cloudinary from "../config/cloudinary.js";
import pool from "../db/index.js";

// upload avatar
export async function uploadAvatar(req: Request, res: Response): Promise<void> {
    try {
        const userId = req.user?.userId;

        if (!userId) {
            res.status(401).json({ message: 'User not authenticated' });
            return;
        }

        // check if image file was uploaded
        if (!req.body.image) {
            res.status(400).json({ message: 'No image provided' });
            return;
        }

        // upload to clouudinary
        // req.body.image should be a base64 string from the frontend
        const result = await cloudinary.uploader.upload(req.body.image, {
            folder: 'storytelling-avatar',
            transformation: [
                { width: 200, height: 200, crop: 'fill', gravity: 'face' },
                { quality: 'auto' },
            ],
        });

        // update user's avatar_url in database
        await pool.query(
            'UPDATE users SET avatar_url = $1 WHERE id = $2',
            [result.secure_url, userId]

        );

        res.json({
            avatar_url: result.secure_url,
            message: 'Avatar uploaded successfully',
        });
    } catch (error) {
        console.error('Upload avatar error:', error);
        res.status(500).json({ message: 'Server error uploading avatar' });
    }
}