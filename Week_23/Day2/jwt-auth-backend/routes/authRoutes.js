import express from "express";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import pool from "../db.js";
import verifyToken from "../authMiddleware.js";


// create a route
const router = express.Router();

// protected route - only accessible if user is logged in
router.get('/profile', verifyToken, async (req, res) => {
    try {
        // req.user was set by out middleware "verifytoken" (the payload contains the user id)
        const userId = req.user.userId;

        // fetch user data from DB
        const result = await pool.query(
            'SELECT id, email, username, bio, created_at FROM authusers WHERE id = $1',
            [userId]
        );

        // if user not found (shoudnt happen but just in case)
        if (result.rows.length === 0) {
            res.status(404).json({ message: 'User not found' });
            return;
        }

        // send user profile data
        res.status(200).json({
            message: 'Profile retrieved succesfully.',
            user: result.rows[0]
        });

    } catch (error) {
        console.error('Profile fetch error: ', error);
        res.status(500).json({ message: 'Server error fetching profile' });
    }
});

// Authentication Routes
router.post('/register', async (req, res) => {
    try {
        // extract data from request body (what the frontend sends)
        const { email, username, password } = req.body;

        // validation
        if (!email || !username || !password) {
            res.status(400).json({ message: "All fields are required" });
            return;
        }

        // check if user already exist in database
        const existingUser = await pool.query(
            'SELECT * FROM authusers WHERE email = $1 OR username = $2',
            [email, username]
        );

        // is user exists, reject registration
        if (existingUser.rows.length > 0) {
            res.status(409).json({ message: "User already exists" });
            return;
        }

        // hash the password
        const hashedPassword = await bcrypt.hash(password, 12);

        // insert new user into our DB
        const newUser = await pool.query(
            'INSERT INTO authusers (email, username, password_hash) VALUES ($1, $2, $3) RETURNING id, email, username, created_at',
            [email, username, hashedPassword]
        );

        // generate the JWT toke (the "digital key card")
        const accesstoken = jwt.sign(
            { userId: newUser.rows[0].id }, // this is the payload - data store in the token - here just id for now
            process.env.JWT_SECRET, //the secret key to sign the token
            { expiresIn: '1h' }
        );

        const refreshtoken = jwt.sign(
            { userId: newUser.rows[0].id },
            process.env.JWT_REFRESH_SECRET, 
            { expiresIn: '7d' }
        );

        // send the token as HTTP-only cookie (secure and cant be access by JS)
        res.cookie('token', accesstoken, {
            httpOnly: true, //cant be accessed by JS and prevents XSS attacks
            secure: process.env.NODE_ENV === 'production', // only send token when in production
            sameSite: 'lax',
            maxAge: 3600000 // cookie expires in 1h
        });

        res.cookie('refreshToken', refreshtoken, {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production', 
            sameSite: 'lax',
            maxAge: 7 * 24 * 60 * 60 * 1000 // 7days
        });

        // send success response with user data
        res.status(201).json({
            message: 'User registered successfully',
            user: {
                id: newUser.rows[0].id,
                email: newUser.rows[0].email,
                username: newUser.rows[0].username,
            }
        });

    } catch (error) {
        console.error('Registration error: ', error);
        res.status(500).json({ message: 'Server error during registration' });
    }
});


router.post('/login', async (req, res) => {
    try {
        console.log('JWT_SECRET:', process.env.JWT_SECRET ? 'EXISTS' : 'MISSING');
        console.log('JWT_REFRESH_SECRET:', process.env.JWT_REFRESH_SECRET ? 'EXISTS' : 'MISSING');
        
        const { email, password } = req.body;

        if (!email || !password) {
            res.status(400).json({ message: 'Email or password required.' });
            return;
        }

        const existingUser = await pool.query(
            'SELECT * FROM authusers WHERE email = $1',
            [email]
        );

        if (existingUser.rows.length === 0) {
            res.status(401).json({ message: 'Invalid credentials.' });
            return;
        }

        const validPassword = await bcrypt.compare(password, existingUser.rows[0].password_hash);
        
        if (!validPassword) {
            res.status(400).json({ message: 'Invalid credentials.' });
            return;
        }

        const accesstoken = jwt.sign(
            { userId: existingUser.rows[0].id },
            process.env.JWT_SECRET,
            { expiresIn: '1h' },
        );

        const refreshtoken = jwt.sign(
            { userId: existingUser.rows[0].id },
            process.env.JWT_REFRESH_SECRET, 
            { expiresIn: '7d' }
        );

        res.cookie('token', accesstoken, {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
            sameSite: 'lax',
            maxAge: 3600000,
        });

        res.cookie('refreshToken', refreshtoken, {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production', 
            sameSite: 'lax',
            maxAge: 7 * 24 * 60 * 60 * 1000 // 7days
        });

        res.status(200).json({
            message: 'User logged in successfully.',
            userData: {
                id: existingUser.rows[0].id,
                email: existingUser.rows[0].email,
                username: existingUser.rows[0].username,
            }
        });

    } catch (error) {
        console.error('Login error: ', error);
        res.status(500).json({ message: 'Server error during login' });
    }
});

router.post('/logout', (req, res) => {
    res.clearCookie('token');
    res.clearCookie('refreshToken');
    res.status(200).json({ message: 'User logout successfully.' });
});

router.post('/refresh', (req, res) => {
    try {
        const refreshToken = req.cookies.refreshToken;

        if (!refreshToken) {
            res.status(401).json({ message: "No refresh token provided" });
            return;
        }

        const decoded = jwt.verify(refreshToken, process.env.JWT_REFRESH_SECRET);

        const newAccessToken = jwt.sign(
            { userId: decoded.userId },
            process.env.JWT_REFRESH_SECRET,
            { expiresIn: '1h' }
        );

        res.cookie('token', newAccessToken, {
            httpOnly: true,
            secure: process.env.NODE_ENV === "production",
            sameSite: 'lax',
            maxAge: 3600000 //1h
        });

        res.status(200).json({
            message: "Access token refreshed successfully"
        });

    } catch (error) {
        console.error('Token refresh error: ', error);
        res.status(401).json({ message: 'Invalid or expired refresh token' });
        return;
    }
});

export default router;