import { Router } from 'express';
import { body, validationResult } from 'express-validator';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { requireAuth } from '../middleware/requireAuth.js';


const router = Router();

router.get("/ping", (req, res) => res.json({ ok: true, from: "auth router" }));


const users = []; // In-memory user store for now

// Validation rules
const passwordRules = body('password')
    .notEmpty()
    .withMessage("Password is required")
    .isLength({ min: 10 })
    .withMessage("Password must be at least 10 characters long")
    .matches(/[a-z]/)
    .withMessage("Password must contain a lowercase letter")
    .matches(/[A-Z]/)
    .withMessage("Password must contain an uppercase letter")
    .matches(/[0-9]/)
    .withMessage("Password must contain a number")
    .matches(/[^A-Za-z0-9]/)
    .withMessage("Password must contain a special character")
    .not()
    .matches(/\s/)
    .withMessage("Password must not contain spaces");

const registerValidation = [
    body('email')
        .trim()
        .notEmpty()
        .withMessage("Email is required")
        .isEmail()
        .withMessage("Invalid email format")
        .normalizeEmail(),
    passwordRules,
];

const loginValidation = [
    body('email').trim().notEmpty().withMessage("Email is required").isEmail().withMessage("Invalid email format").normalizeEmail(),
    body('password').notEmpty().withMessage("Password is required"),
];

// Helpers
function sendValidationErrors(req, res) {
    const errors = validationResult(req);
    if (errors.isEmpty()) return false;

    res.status(400).json({
        message: "Validation failed",
        errors: errors.array().map((err) => ({ field: err.path, message: err.msg })),
    });
    return true;
}

function setAccessTokenCookie(res, token) {
    const isProduction = process.env.NODE_ENV === 'production'; // This is for secure cookie in production, meaning it will only be sent over HTTPS

    res.cookie("access_token", token, {
        httpOnly: true,
        secure: isProduction, // it will be true on HTTPS in production, false on localhost for development
        sameSite: 'lax',
        maxAge: 15 * 60 * 1000, // 15 minutes
    });
}


// ROUTES
router.post("/register", registerValidation, async (req, res) => {
    if (sendValidationErrors(req, res)) return;

    const { email, password } = req.body;

    // check if email already exists
    const existingEmail = users.find((user) => user.email === email);
    if (existingEmail) {
        return res.status(409).json({ message: "email already in use" });
    }

    const passwordHash = await bcrypt.hash(password, 12);

    const user = {
        id: Date.now(),
        email, 
        passwordHash,
    };

    users.push(user);

    return res.status(201).json({
        message: "Registration input is valid",
        user: { id: user.id, email: user.email },
    });
});


router.post("/login", loginValidation, async (req, res) => {
    if (sendValidationErrors(req, res)) return;

    const { email, password } = req.body;
    
    const user = users.find((u) => u.email === email);

    if (!user) {
        return res.status(401).json({ message: "invalid email or password" });
    }

    const ok = await bcrypt.compare(password, user.passwordHash);
    if (!ok) {
        return res.status(401).json({ message: "invalid email or password" });
    }

    const token = jwt.sign(
        { userId: user.id },     // payload (your data)
        process.env.JWT_SECRET, // secret (signing key)
        { expiresIn: "15m" },   // options (behaviour)
    );

    setAccessTokenCookie(res, token);

    return res.status(200).json({ message: "Logged in" });
});

router.post("/logout", (req, res) => {
    res.clearCookie("access_token", {
        httpOnly: true,
        sameSite: "lax",
        secure: process.env.NODE_ENV === "production",
    });

    return res.status(200).json({ message: "Logged out" });
});

router.get("/me", requireAuth, (req, res) => {
    res.json({ userId: req.userId });
});



export default router;