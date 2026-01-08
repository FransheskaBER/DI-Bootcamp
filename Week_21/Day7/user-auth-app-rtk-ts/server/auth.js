import { Router } from "express";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { pool } from "./db.js";

const router = Router();

const COOKIE_NAME = "token";

function mustHaveEnv(name) {
    if (!process.env[name]) throw new Error(`${name} is missing in .env`);
}

mustHaveEnv("JWT_SECRET");

function signToken(payload) {
    return jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: "7d" });
}

function setAuthCookie(res, token) {
    res.cookie(COOKIE_NAME, token, {
        httpOnly: true,
        sameSite: "lax",
        secure: false,
        maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days
    });
}

function clearAuthCookie(res) {
    res.clearCookie(COOKIE_NAME, { httpOnly: true, sameSite: "lax", secure: false });
}

function pickSafeUser(row) {
    return {
        id: row.id,
        email: row.email,
        username: row.username,
        bio: row.bio,
        created_at: row.created_at,
        updated_at: row.updated_at,
    };
}

// middleware: require auth
function requireAuth(req, res, next) {
    const token = req.cookies?.[COOKIE_NAME];
    if (!token) return res.status(401).json({ error: "Not authenticated" });

    try {
        const payload = jwt.verify(token, process.env.JWT_SECRET);
        req.user = payload;
        next();
    } catch {
        return res.status(401).json({ error: "Invalid or expired token" })
    }
}

// Routes
router.post("/register", async (req, res) => {
    const { email, username, password } = req.body ?? {};

    if (!email || !username || !password) {
        res.status(400).json({ error: "email, username, password are required" });
        return;
    }

    const passwordHash = await bcrypt.hash(String(password), 10);

    try {
        const result = await pool.query(
            `
            INSERT INTO authusers (email, username, password_hash)
            VALUES ($1, $2, $3)
            RETURNING id, email, username, bio, created_at, updated_at
            `,
            [String(email).toLowerCase().trim(), String(username).toLowerCase().trim(), passwordHash]
        );

        const user = result.rows[0];
        const token = signToken({ sub: user.id });
        setAuthCookie(res, token);

        return res.status(201).json({ user: pickSafeUser(user) });
    } catch (err) {
        if (err && typeof err === "object" && "code" in err && err.code === "23505") {
            return res.status(409).json({ error: "Email or username already exists" });
        }
        console.error(err);
        return res.status(500).json({ error: "Server error" })
    }
});


// login
router.post("/login", async (req, res) => {
    const { email, password } = req.body ?? {};

    if (!email || !password) {
        return res.status(400).json({ error: "email and password are required" });
    }

    const result = await pool.query(
        `SELECT * FROM authusers WHERE email = $1`,
        [String(email).toLowerCase().trim()]
    );

    const user = result.rows[0];
    if (!user) return res.status(401).json({ error: "Invalid credentials" });

    const ok = await bcrypt.compare(String(password), user.password_hash);
    if (!ok) return res.status(401).json({ error: "Invalid credentials" });

    const token = signToken({ sub: user.id });
    setAuthCookie(res, token);

    return res.json({ user: pickSafeUser(user) });
});

// Me (who am I?)
router.get("/me", requireAuth, async (req, res) => {
    const userId = req.user.sub;

    const result = await pool.query(
        `SELECT id, email, username, bio, created_at, updated_at FROM authusers WHERE id = $1`,
        [userId]
    );

    const user = result.rows[0];
    if (!user) return res.status(401).json({ error: "Not authenticated" });

    return res.json({ user: pickSafeUser(user) })
});

// logout
router.post("/logout", (req, res) => {
    clearAuthCookie(res);
    res.json({ ok: true });
});

// update profile
router.patch("/profile", requireAuth, async (req, res) => {
    const userId = req.user.sub;
    const { username, bio } = req.body ?? {};

    const usernameVal = typeof username === "string" ? username.trim() : null;
    const bioVal = typeof bio === "string" ? bio.trim() : null;

    const result = await pool.query(
        `
        UPDATE authusers
        SET
            username = COALESCE($1, username),
            bio = COALESCE($2, bio),
            updated_at = now()
        WHERE id = $3
        RETURNING id, email, username, bio, created_at, updated_at
        `,
        [usernameVal, bioVal, userId]
    );

    const user = result.rows[0];
    if (!user) return res.status(404).json({ error: "User not found" });

    return res.json({ user: pickSafeUser(user) });
});


export default router;
