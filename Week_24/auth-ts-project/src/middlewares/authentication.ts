import type { Request, Response, NextFunction } from "express";
import jwt from 'jsonwebtoken';
import { type TokenPayload } from "../types.js";
import { verifyAccessToken } from "../helpers/auth.utils.js";

// extend the Request type to include the tokenpayload type
declare global {
    namespace Express {
        interface Request {
            user?: TokenPayload;
        }
    }
}

// middleware to verify access token
export function authenticateToken(req: Request, res: Response, next: NextFunction): void {
    // get token from the Authorization Header
    const authHeader = req.headers['authorization'];
    const token = authHeader?.split(' ')[1]; // get string after "Bearer"

    if (!token) {
        res.status(401).json({ message: 'Access token required' });
        return;
    }

    const payload = verifyAccessToken(token);
    if (!payload) {
        res.status(403).json({ message: 'Invalid or expired token' });
        return;
    }

    req.user = payload;
    next();
}
