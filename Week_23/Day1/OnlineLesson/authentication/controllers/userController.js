import { createUser, getUserByEmail, getUsers } from "../models/userModel.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import "dotenv/config";

export const registerUser = async (req, res) => {
    const { email, password } = req.body;

    try {
        const user = await createUser(password, email);
        res.status(201).json({ message: "user created", user });
    } catch (error) {
        console.log(error);
        if (error.code === '23505') {
            res.status(404).json({ message: "User email already exists" });
            return;
        }
        res.status(500).json({ message: "internal server error" });
    } 
}


export const loginUser = async (req, res) => {
    const { email, password } = req.body;

    try {
        const user = await getUserByEmail(email);
        if (!user) {
            res.status(404).json({ message: "user not found" });
            return;
        }

        const matchedPassword = await bcrypt.compare(String(password), user.password);
        if (!matchedPassword) {
            res.status(404).json({ message: "wrong password" });
        }
        
        // then we create our token if all the above pass
        const secretCode = process.env.ACCESS_TOKEN_SECRET;

        // generate token
        const accessToken = jwt.sign(
            { userId: user.id, email: user.email },
            secretCode,
            { expiresIn: "60s" },
        );

        // set token on httpOnly cookie
        res.cookie("cookieName", accessToken, {
            maxAge: 60 * 1000, // same as expiresIn
            httpOnly: true,
        });

        // response to user with the token
        res.status(200).json({
            message: "login successfully",
            user: { userId: user.id, email: user.email, active: "true" },
            token: accessToken, // this is optional because the token is in the cookkie, but if you wang to have it in the header as well
        });

    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "internal server error" });
    }
}

export const getAllUsers = async (req, res) => {
    try {
        const users = await getUsers();
        res.json(users);
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "internal server error" });
    }
}

export const logOutUser = async (req, res) => {
    res.clearCookie("cookieName", {
        httpOnly: true,
        sameSite: "lax",
        secure: process.env.NODE_ENV === "production",
    });
    // if you put the token in the database, set null in DB
    res.sendStatus(200);
};

export const verifyAuth = async (req, res) => {
    const { userId, email } = req.user; // this is the info we get in the decoded in verifyToken
    const secretCd = process.env.ACCESS_TOKEN_SECRET;

    // now we create a new token to extend the 60 secs
    const newToken = jwt.sign({ userId, email }, secretCd, { expiresIn: "60s" });
    res.cookie("cookieName", newToken, {
        maxAge: 60 * 1000,
        httpOnly: true,
    });

    res.status(200).json({
        message: "new token",
        user: { userId, email },
        token: newToken,
    });
}