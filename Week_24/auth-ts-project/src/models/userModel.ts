import db from "../db/db.js";
import type { User } from "../types.js";


export async function findUserByEmail(email: string): Promise<User | null> {
    return await db('authusers').where({ email }).first() || null;
}

export async function findUserByUsername(username: string): Promise<User | null> {
    return await db('authusers').where({ username }).first() || null;
}

export async function findUserById(id: string): Promise<User | null> {
    return await db('authusers').where({ id }).first() || null;
}

// create a new user
export async function createNewUser(email: string, username: string, password_hash: string, bio?: string): Promise<User> {
    const [newUser] = await db('authusers').insert({ email, username, password_hash, bio }).returning('*');
    return newUser
}