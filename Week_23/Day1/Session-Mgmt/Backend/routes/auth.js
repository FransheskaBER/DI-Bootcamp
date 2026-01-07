import { Router } from "express";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import requireAuth from "../middleware/requireAuth.js";

const router = Router();

const users = [];

router.post("/register", async (req, res) => {
    const { email, password } = req.body;

    if (!email || !password) {
        return res.status(400).json({ message: "Email and password required "});
    }

    const exist = users.find(u => u.email === email);
    if (exist) {
        return res.status(409).json({ message: "Email already taken" });
    }

    const passwordHash = await bcrypt.hash(password, 12);

    const user = {
        id: Date.now(),
        email,
        password: passwordHash,
    };
    users.push(user);
    res.status(201).json({ message: "User registered" });
});

router.post("/login", async (req, res) => {
    const { email, password } = req.body;

    const user = users.find(u => u.email === email);
    if (!user) {
        return res.status(401).json({ message: "Invalid email or password" });
    }

    const ok = await bcrypt.compare(password, user.password);
    if (!ok) {
        return res.status(401).json({ message: "Invalid email or password" });
    }

    const token = jwt.sign(
        { userId : user.id },
        process.env.JWT_SECRET,
        { expiresIn: "15m" },
    );

    res.cookie("access_token", token, {
        httpOnly: true,
        sameSite: "lax",
        secure: process.env.NODE_ENV === "production",
    });

    res.json({ message: "Logged in" });
});


router.get("/me", requireAuth, (req, res) => {
    res.json({ userId: req.userId });
})

router.post("/logout", (req, res) => {
    res.clearCookie("access_token", {
        httpOnly: true,
        sameSite: "lax",
        secure: process.env.NODE_ENV === "production",
    });

    res.json({ message: "Logged out" });
});

export default router;