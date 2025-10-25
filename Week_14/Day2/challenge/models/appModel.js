// get the Knex connection to query DB
import db from "../config/db.js";

// ---------------- CORE "READ" FUNCTIONS ---------------- 
export async function getAllUsers(){ 
    return await db('users').select('*')
    // SELECT * FROM users 
}

export async function getUserById(id){ 
    return await db('users').where({ id }).first();
    // SELECT * FROM users WHERE id = ? LIMIT 1
}

export async function userExistsByEmail(email){
    const row = await db('users').where({ email }).first('id');
    // SELECT id FROM users WHERE email = ? LIMIT 1
    return Boolean(row); // true if found, else false 
}

export async function getUserByUsername(username){
    return await db('users').whereRaw('LOWER(username) = LOWER(?)', [username]).first(); // returns full row or undefined
}

export async function getAuthByUserId(id){
    return await db('passwords').where({ id }).first();
    // SELECT * FROM passwords WHERE id = ? LIMIT 1
    // returns { id, password }
}

// ---------------- CORE "WRITE" FUNCTIONS ---------------- 
export async function createUser(data, { trx } = {}){
    const query = trx ? trx : db; // use trx if provided
    const [{ id }] = await query('users').insert(data).returning(['id']); 
    // INSERT INTO users (...) and Postgres returned inserted rows
    return id;
    // return new user id
}

export async function createHash(userId, hashedPassword, { trx } = {}){
    const query = trx ? trx : db;
    const createdArray =  await query('passwords').insert({ id: userId, password: hashedPassword }).returning(['id']);
    return createdArray.length > 0;
    // return true if inserted
};

export async function updateUserById(id, changes, { trx } = {}){
    const query = trx ? trx : db;
    const updatedArray = await query('users').where({ id }).update(changes).returning('*');
    // INSERT users UPDATE ... WHERE id = ?
    return updatedArray.length > 0 ? updatedArray[0] : null;
    // returns updated row or null
};

export async function updateHashByUserId(id, newHashedPassword, { trx } = {}){
    const query = trx ? trx : db;
    const updatedRowCount = await query('passwords').where({ id }).update({ password: newHashedPassword }); // returns number of rows updated
    return updatedRowCount > 0;
    // returns true if one row is returned
};