import { getUserById, getUsers, register, findUserByUsername, updateUser } from "../models/appModel.js";
import bcrypt from "bcrypt";

const hashRound = 10;

// GET /users
export function getAll(req, res, next){
    try {
        const users = getUsers();
        res.status(200).json(users);
    } catch(err){
        next(err);
    }
}

// GET /users/:id
export function getUser(req, res, next){
    try {
        const id = Number(req.params.id);
        if (isNaN(id)) return res.status(400).json({ error: "Invalid Id" });
        const user = getUserById(id);
        if (!user) res.status(404).json({ error: "User Not Found" });
        return res.status(200).json(user);
    } catch (err){
        next(err);
    }
}

// POST /register
export async function registration(req, res, next){
    try{
        const { first_name, last_name, email, username, password } = req.body;
        const hashedPassword = await bcrypt.hash(password, hashRound);
        const body = { first_name, last_name, email, username, password: hashedPassword };
        const newUser = register(body);
        return res.status(201).json({ message: "Hello, your account is now created.", user: newUser });
    } catch(err){
        if (err.message === "Username already exists"){
            return res.status(400).json({ error: err.message });
        }
        return next(err);
    }
}

// POST /login
export async function userlogin(req, res, next){
    try {
        const { username, password } = req.body;
        const user = findUserByUsername(username);
        if (!user) return res.status(404).json({ error: "Username not found "});
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) return res.status(401).json({ error: "Invalid password" });
        return res.status(200).json({ message: "You have successfully logged in", userId: user.id })
    } catch (err){
        next(err);
    }
}

// PUT /users/:id
export async function updateUserController(req, res, next){
    try {
        const id = Number(req.params.id);
        if (isNaN(id)) return res.status(400).json({ error: "Invalid Id" });

        const { first_name, last_name, email, username } = req.body;
        const changes = {};
        if (first_name !== undefined) changes.first_name = first_name;
        if (last_name !== undefined) changes.last_name = last_name;
        if (email !== undefined) changes.email = email;
        if (username !== undefined) changes.username = username;

        if (Object.keys(changes).length === 0){
            return res.status(400).json({ error: "No valid fields to update" });
        }

        const updatedUser = updateUser(id, changes);
        if (!updatedUser) {
            return res.status(404).json({ error: "User not found" });
        }
        const safeinfo = { FirstName: updatedUser.first_name, LastName: updatedUser.last_name, Email: updatedUser.email, Username: updatedUser.username }
        res.status(200).json(safeinfo);
    } catch (err) {
        next(err);
    }
}
