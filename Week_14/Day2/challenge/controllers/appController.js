import db from "../config/db.js"
import {
    getAllUsers,
    getUserById,
    userExistsByEmail,
    getUserByUsername,
    getAuthByUserId,
    createUser,
    createHash,
    updateUserById,
    updateHashByUserId,
} from "../models/appModel.js";

import bcrypt from "bcrypt";

const hashRounds = 10;

export async function getUsers(req, res, next){
    try {
        const users = await getAllUsers();
        res.status(200).json(users);
    } catch(err){
        next(err);
    }
}

export async function getUser(req, res, next){
    try {
        const id = req.params.id;
        const user = await getUserById(id);
        res.status(200).json(user);
    } catch(err){
        next(err);
    }
} 
// REGISTRATION
export async function userRegistration(req, res, next){
    try{
        const { first_name, last_name, email, username, password } = req.body;

        if (!first_name || !last_name || !email || !username || !password) return res.status(400).json({ error: "All fields are required" });

        // check duplicates:
        if (await userExistsByEmail(email)) return res.status(400).json({ error: "Email is already registered. Log in instead or use another email" });
        const existingUser = await getUserByUsername(username);
        if (existingUser) return res.status(400).json({ error: "Username is already taken" });

        // transaction function:
        await db.transaction(async (trx) => {
            const hashedPassword = await bcrypt.hash(password, hashRounds);

            // insert user row
            const userId = await createUser({ first_name, last_name, username, email }, { trx });

            // insert password
            await createHash(userId, hashedPassword, { trx });

            res.status(201).json({ message: "User registered successfully", userId });
        });
    } catch(err) {
        next(err);
    }
}

// LOGIN
export async function userLogin(req, res, next){
    try{
        const { username, password } = req.body;

        if(!username || !password) return res.status(400).json({ error: "username and password required" });

        // get the user row by username
        const userRow = await getUserByUsername(username);
        if (!userRow) return res.status(400).json({ error: "User Not Found" });

        // get hash by id
        const authRow = await getAuthByUserId(userRow.id);
        if (!authRow) return res.status(400).json({ error: "Missing credentials for this user" });

        // compare:
        const ok = await bcrypt.compare(password, authRow.password);
        if (!ok) return res.status(400).json({ error: "Wrong credentials" });
        
        // success
        return res.status(200).json({ 
            message: "You have successfully logged in",
            id: userRow.id,
            username: userRow.username
    });
    } catch(err){
        next(err);
    }
}

// UPDATE INFO
export async function updateDetails(req, res, next){
    try {
        const id = Number(req.params.id);
        if (Number.isNaN(id)) return res.status(400).json({ error: "Invalid id" });

        const { first_name, last_name, username, email } = req.body;
        
        // buid changes object only with provided keys
        const changes = {};

        if (first_name) changes.first_name = first_name;
        if (last_name) changes.last_name = last_name;
        if (username) changes.username = username;
        if (email) changes.email = email;

        if (Object.keys(changes).length === 0) return res.status(400).json({ error: "No fields to update" });

        await db.transaction(async(trx) => {

            // check duplicates:
            const current = await getUserById(id);
            if (!current) req.status(404).json({ error: "user not found" });

            if (email) {
                const emailTaken = await userExistsByEmail(email);
                if (emailTaken && current.email !== email) return res.status(400).json({ error: "Email is already registered" });
            }

            if (username) {
                const other = await getUserByUsername(username);
                if (other && other.id !== id) return res.status(400).json({ error: "Username is already taken" });
            }

            // update user
            const updated = await updateUserById(id, changes, { trx });
            return res.status(200).json(updated);
        });
    } catch (err) {
        next(err);
    }
}

// UPDATE PASSWORD
export async function updatePassword(req, res, next){
    try {
        const id = Number(req.params.id);
        if (Number.isNaN(id)) return res.status(400).json({ json: "Invalid id" });

        const { oldPassword, newPassword } = req.body;
        if (!oldPassword || !newPassword) req.status(400).json({ error: "Both passwords required" });
        
        await db.transaction(async(trx) => {
            const authRow = await getAuthByUserId(id);
            if (!authRow) return res.status(404).json({ error: "User credentials not found" });

            const ok = await bcrypt.compare(oldPassword, authRow.password);
            if (!ok) return res.status(400).json({ error: "current password is incorrect" });

            const newHashedPassword = await bcrypt.hash(newPassword, hashRounds);
            const updated = await updateHashByUserId(id, newHashedPassword, { trx });
            if (!updated) return res.status(500).json({ error: "Couldnt update your password" });

            return res.status(200).json({ message: "Password updated successfully" });
        });
    } catch (err) {
        next(err);
    }
}