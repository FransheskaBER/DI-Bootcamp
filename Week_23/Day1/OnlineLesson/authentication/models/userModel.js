import { db } from "../config/db.js";
import bcrypt from "bcrypt";

export const createUser = async (password, email) => {
    // hash the password - you can use bcrypt, argon2 or crypto
    const hashPassword = await bcrypt.hash(String(password), 12);
    
    const trx = await db.transaction();

    try {
        // insert to table in DB
        const [user] = await trx('users').insert(
            {
                email: email.toLowerCase(),
                password: hashPassword,
            },
            ['email', 'id'] // what i want to
        );

        await trx.commit();
        return user;

    } catch (error) {
        await trx.rollback();
        console.log(error);
        throw error;
    } finally {
        if (!trx.isCompleted()) {
            await trx.rollback();
        }
    }
};

export const getUserByEmail = async (email) => {
    try {
        const user = await db("users").select("id", "email", "password").where({ email: email.toLowerCase() }).first();
        return user; // the user here will be an object, because we're using first() - otherwise we will have an array
    } catch (error) {
        throw error;
    }
};

export const getUsers = async () => {
    try {
        const users = await db("users").select("id", "email");
        return users;
    } catch (error) {
        throw error;
    }
};