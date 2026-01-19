import { Request, Response } from "express";
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { createUser, findUserByEmail, findUserById, getAllUsers } from "../models/userModel.js";
import { isValidEmail, isValidPassword, isValidUsername, sanitizeString } from "../helpers/validation.js";

const SALT_ROUNDS = 10;

// register a new user
export async function register(req: Request, res: Response): Promise<void> {
    try {
        const { username, email, password } = req.body;

        // validate input
        if (!username || !email || !password) {
            res.status(400).json({ message: 'All fields are required' });
            return;
        }

        // sanitize input
        const cleanUsername = sanitizeString(username);
        const cleanEmail = sanitizeString(email);

        // validate formats
        if (!isValidUsername(cleanUsername)) {
            res.status(400).json({ message: 'Username must be 3-50 characters, alphanumeric and underscores only' });
            return;
        }
        if (!isValidEmail(cleanEmail)) {
            res.status(400).json({ message: 'Invalid email format' });
            return;
        }
        if (!isValidPassword(password)) {
            res.status(400).json({ message: 'Password must be at least 6 characters' });
            return;
        }

        // check if user already exists
        const existingUser = await findUserByEmail(cleanEmail);
        if (existingUser) {
            res.status(400).json({ message: 'User with this email already exists' });
            return;
        }

        // hash password
        const passwordHash = await bcrypt.hash(password, SALT_ROUNDS);

        // create user
        const newUser = await createUser(cleanUsername, cleanEmail, passwordHash);

        // generate tokens
        const accessToken = jwt.sign(
            { userId: newUser.id },
            process.env.JWT_SECRET as string,
            { expiresIn: '15m' }
        );

        const refreshToken = jwt.sign(
            { userId: newUser.id },
            process.env.REFRESH_SECRET as string,
            { expiresIn: '7d' }
        );

        // set refresh token as HTTP-only cookie
        res.cookie('refreshToken', refreshToken, {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
            sameSite: 'strict',
            maxAge: 7 * 24 * 60 * 60 * 1000,
        });

        // return access token and user info without password
        res.status(201).json({
            accessToken,
            user: {
                id: newUser.id,
                username: newUser.username,
                email: newUser.email,
                avatar_url: newUser.avatar_url,
            },
        });

    } catch (error) {
        console.error('Registration error:', error);
        res.status(500).json({ message: 'Server error during registration' });
    }
}

// Login user
export async function login(req: Request, res: Response): Promise<void> {
    try {
        const { email, password } = req.body;

        if (!email || !password) {
            res.status(400).json({ message: 'Email and password are required' });
            return;
        }

        const cleanEmail = sanitizeString(email);
        
        // find user
        const user = await findUserByEmail(cleanEmail);
        if (!user) {
            res.status(401).json({ message: 'Invalid credentials' });
            return;
        }

        // verify password
        const isPasswordValid = await bcrypt.compare(password, user.password_hash!);
        if (!isPasswordValid) {
            res.status(401).json({ message: 'Invalid credentials' });
            return;
        }

        // generate token
        const accessToken = jwt.sign(
            { userId: user.id },
            process.env.JWT_SECRET as string,
            { expiresIn: '15m' }
        );

        const refreshToken = jwt.sign(
            { userId: user.id },
            process.env.REFRESH_SECRET as string,
            { expiresIn: '7d' }
        );

        // set refresh token as HTTP-only cookie
        res.cookie('refreshToken', refreshToken, {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
            sameSite: 'strict',
            maxAge: 7 * 24 * 60 * 60 * 1000,
        });

        res.json({
            accessToken,
            user: {
                id: user.id,
                username: user.username,
                email: user.email,
                avatar_url: user.avatar_url,
            },
        });

    } catch (error) {
        console.error('Login error:', error);
        res.status(500).json({ message: 'Server error during login' });
    }
}

// refresh access token
export async function refreshAccessToken(req: Request, res: Response): Promise<void> {
    const refreshToken = req.cookies.refreshToken;

    if (!refreshToken) {
        res.status(403).json({ message: 'Refresh token required' });
        return;
    }

    try {
        const decoded = jwt.verify(refreshToken, process.env.REFRESH_SECRET as string) as { userId: number};

        const newAccessToken = jwt.sign(
            { userId: decoded.userId },
            process.env.JWT_SECRET as string,
            { expiresIn: '15m' }
        );

        res.json({ accessToken: newAccessToken });

    } catch (error) {
        res.status(403).json({ message: 'Invalid or expired refresh token' });
    }
}

// get current user info
export async function getCurrentUser(req: Request, res: Response): Promise<void> {
    try {
        const userId = req.user?.userId;

        if (!userId) {
            res.status(401).json({ message: "User not authenticated" });
            return;
        }

        const user = await findUserById(userId);

        if (!user) {
            res.status(404).json({ message: 'User not found' });
            return;
        }

        // return user wihtout password
        res.json({
            id: user.id,
            username: user.username,
            email: user.email,
            avatar_url: user.avatar_url,
        });
    } catch (error) {
        console.error('Get current user error:', error);
        res.status(500).json({ message: 'Server error fetching user' });
    }
}

// Get all users (for contributor selection)
export async function getAllUsersController(req: Request, res: Response): Promise<void> {
  try {
    const users = await getAllUsers();
    
    // Return users without passwords
    const safeUsers = users.map(user => ({
      id: user.id,
      username: user.username,
      email: user.email,
      avatar_url: user.avatar_url,
    }));
    
    res.json(safeUsers);
  } catch (error) {
    console.error('Get all users error:', error);
    res.status(500).json({ message: 'Server error fetching users' });
  }
}