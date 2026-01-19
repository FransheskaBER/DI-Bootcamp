import pool from '../db/index.js';
import { User } from '../../../types/index.js';

// create a new user
export async function createUser(username: string, email: string, passwordHash: string): Promise<User> {
    const result = await pool.query(
        'INSERT INTO users (username, email, password_hash) VALUES ($1, $2, $3) RETURNING *',
        [username, email, passwordHash]
    );
    return result.rows[0];
}

// find a user by email
export async function findUserByEmail(email: string): Promise<User | null> {
    const result = await pool.query(
        'SELECT * FROM users WHERE email = $1',
        [email]
    );
    return result.rows[0] || null;
}

// find a user by id
export async function findUserById(id: number): Promise<User | null> {
    const result = await pool.query(
        'SELECT id, username, email, avatar_url, created_at FROM users WHERE id = $1',
        [id]
    );
    return result.rows[0] || null;
}

// get all users
export async function getAllUsers(): Promise<User[]> {
    const result = await pool.query(
        'SELECT id, username, email, avatar_url, created_at FROM users'
    );
    return result.rows;
}
