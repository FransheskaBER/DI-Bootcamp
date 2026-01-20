import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { type TokenPayload } from '../types.js';

const SALT_ROUNDS = 10;

export async function hashPassword(password: string): Promise<string> {
    return await bcrypt.hash(password, SALT_ROUNDS);
}

export async function comparePassword(password: string, hashedPassword: string): Promise<boolean> {
    return await bcrypt.compare(password, hashedPassword)
}

export function generateToken(payload: TokenPayload): string {
    const secret = process.env.JWT_SECRET as string;
    if (!secret) throw new Error('JWT_SECRET key is not defined in .env file');
    return jwt.sign(payload, secret, { expiresIn: '15m' });
}

export function generateRefreshToken(payload: TokenPayload): string {
    const secret = process.env.REFRESH_SECRET as string;
    if (!secret) throw new Error('JWT_SECRET key is not defined in .env file');
    return jwt.sign(payload, secret, { expiresIn: '7d' });
}

export function verifyAccessToken(token: string): TokenPayload | null {
    const secret = process.env.JWT_SECRET as string;
    if (!secret) throw new Error('JWT_SECRET key is not defined in .env file');
    try {
        return jwt.verify(token, secret) as TokenPayload;
    } catch (error) {
        return null;
    }
}

export function verifyRefreshToken(token: string): TokenPayload | null {
    const secret = process.env.REFRESH_SECRET as string;
    if (!secret) throw new Error('REFRESH_SECRET key is not defined in .env file');
    try {
        return jwt.verify(token, secret) as TokenPayload;
    } catch (error) {
        return null;
    }
}

export function sanitizeString(input: string): string {
    return input.trim();
}

export function isValidPassword(password: string): boolean {
    return password.length >= 6;
}

export function isValidEmail(email: string): boolean {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email); 
}

export function isValidUsername(username: string): boolean {
    const usernameRegex = /^[a-zA-Z0-9_]{3,50}$/;
    return usernameRegex.test(username);
}