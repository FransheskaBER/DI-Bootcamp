import type { Request, Response } from 'express';
import type { RegisterRequest, LoginRequest, AuthResponse, TokenPayload } from '../types.js';
import { findUserByEmail, findUserByUsername, createNewUser } from '../models/userModel.js';
import { getUserWithoutPassword } from '../helpers/db.helpers.js';
import { isValidEmail, isValidPassword, isValidUsername, sanitizeString, generateToken, generateRefreshToken, hashPassword, comparePassword, verifyRefreshToken } from '../helpers/auth.utils.js';

export async function register(req: Request, res: Response): Promise<void> {
    try {
        const { username, email, password }: RegisterRequest = req.body;
        if (!username || !email || !password) {
            res.status(400).json({ message: 'All fields are required' });
            return;
        }

        const cleanEmail = sanitizeString(email);
        const cleanUsername = sanitizeString(username);
        const cleanPassword = sanitizeString(password);
        if (!isValidEmail(cleanEmail)) {
            res.status(400).json({ message: 'Invalid email format' });
            return;
        }
        if (!isValidUsername(cleanUsername)) {
            res.status(400).json({ message: 'Username must be 3-50 characters, alphanumeric and underscores only' });
            return;
        }
        if (!isValidPassword(cleanPassword)) {
            res.status(400).json({ message: 'Password must be at least 6 characters' });
            return;
        }

        const existingEmail = await findUserByEmail(cleanEmail);
        if (existingEmail) {
            res.status(409).json({ message: 'User with this email already exists' });
            return;
        }
        const existingUsername = await findUserByUsername(username);
        if (existingUsername) {
            res.status(409).json({ message: 'This username is already taken. Choose another one.' });
            return;
        }

        const password_hash = await hashPassword(cleanPassword);
        const newUser = await createNewUser(cleanEmail, cleanUsername, password_hash);
        const accessToken = generateToken({ userId: newUser.id });
        const refreshToken = generateRefreshToken({ userId: newUser.id });
        const response: AuthResponse = { 
            token: accessToken,
            user: getUserWithoutPassword(newUser)
        };
        
        // set refresh token in http-only cookie
        res.cookie('refreshToken', refreshToken, {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
            sameSite: 'strict',
            maxAge: 7 * 24 * 60 * 60 * 1000,
        });

        res.status(201).json(response);

    } catch (error) {
        console.error('Registration error:', error);
        res.status(500).json({ message: 'Server error during registration' });
    }
}

export async function login(req: Request, res: Response): Promise<void> {
    try {
        const { email, password }: LoginRequest = req.body;
        if (!email || !password) {
            res.status(400).json({ message: 'All fields are required' });
            return;
        }

        const cleanEmail = sanitizeString(email);
        const cleanPassword = sanitizeString(password);
        if (!isValidEmail(cleanEmail)) {
            res.status(400).json({ message: 'Invalid email format' });
            return;
        }
        if (!isValidPassword(cleanPassword)) {
            res.status(400).json({ message: 'Password must be at least 6 characters' });
            return;
        }

        const user = await findUserByEmail(cleanEmail);
        if (!user) {
            res.status(400).json({ message: 'Invalid credentials' });
            return;
        }

        const verifyPassword = await comparePassword(cleanPassword, user.password_hash);
        if (!verifyPassword) {
            res.status(400).json({ message: 'Invalid credentials' });
            return;
        }

        const accessToken = generateToken({ userId: user.id });
        const refreshToken = generateRefreshToken({ userId: user.id });
        
        const response: AuthResponse = { 
            token: accessToken,
            user: getUserWithoutPassword(user)
        };
        
        // set refresh token in http-only cookie
        res.cookie('refreshToken', refreshToken, {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
            sameSite: 'strict',
            maxAge: 7 * 24 * 60 * 60 * 1000,
        });

        res.status(201).json(response);
        
    } catch (error) {
        console.error('Login error:', error);
        res.status(500).json({ message: 'Server error during login' });
    }
}

export async function logout(req: Request, res: Response): Promise<void> {
    res.clearCookie('refreshToken', {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        sameSite: 'strict'
    });
    res.json({ message: 'Logged out successfully' });
}

export async function refreshAccessToken(req: Request, res: Response): Promise<void> {
    const refreshToken = req.cookies.refreshToken;
    if (!refreshToken) {
        res.status(400).json({ message: 'Refresh token required' });
        return;
    }
    
    const decoded = verifyRefreshToken(refreshToken); 
    if (!decoded) {
        res.status(403).json({ message: 'Invalid or expired refresh token' });
        return;
    }
    const newAccessToken = generateToken({ userId: decoded.userId })
    res.json({ accessToken: newAccessToken });
}
