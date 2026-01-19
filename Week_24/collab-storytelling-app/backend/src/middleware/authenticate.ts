import { Request, Response, NextFunction } from "express";
import jwt from 'jsonwebtoken';

// extend Express Request type to include user info
declare global {
    namespace Express {
        interface Request {
            user?: {
                userId: number;
            };
        }
    }
}

// middleware to verify JWT access token
export function authenticateToken(req: Request, res: Response, next: NextFunction): void {
    // get token from Authorization header (Bearer <token>)
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1]; // get part after "Bearer"

    if (!token) {
        res.status(401).json({ message: 'Access token required' });
        return;
    }

    // verify the token
    jwt.verify(token, process.env.JWT_SECRET as string, (err, decoded) => {
        if (err) {
            res.status(403).json({ message: 'Invalid or expired token' });
            return;
        }

        // attach user info to request object
        req.user = decoded as { userId: number };
        next(); // continue to the next middleware or route handler
    });
}