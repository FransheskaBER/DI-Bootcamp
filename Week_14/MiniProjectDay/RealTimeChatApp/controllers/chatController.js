import { getAllUsers, getUserByEmail, insertNewUser } from "../models/chatModel.js";
import bcrypt from "bcrypt";

const hashRounds = 10;

export async function seeActiveUsernames(req, res, next){
    try{
        const users = await getAllUsers();
        const usernames = users.map(user => user.username);
        res.status(200).json(usernames); // returns an array of strings
    }catch(e){
        next(e);
    }
};

export async function userRegistration(req, res, next){
    try{
        const { username, email, password } = req.body;
        if (!username || !email || !password) return res.status(400).json({ error: "Missing fields" });

        const hashedPassword = await bcrypt.hash(password, hashRounds);
        const data = { username, email, password: hashedPassword };
        const [newUser] = await insertNewUser(data);
        return res.status(201).json(newUser); // returns an object
    }catch(e){
        next(e);
    }
};

export async function userLogin(req, res, next){
    try{
        const { email, password } = req.body;
        if (!email || !password) return res.status(400).json({ error: "MISSING FIELDS" });

        const user = await getUserByEmail(email); // returns an object
        if (!user) return res.status(404).json({ error: "USER NOT FOUND" });

        const correctPass = await bcrypt.compare(password, user.password);
        if (!correctPass) return res.status(400).json({ error: "Wrong password" });

        const { password: _, ...safeUser } = user;
        res.status(200).json(safeUser);
    }catch(e){
        next(e);
    }
};