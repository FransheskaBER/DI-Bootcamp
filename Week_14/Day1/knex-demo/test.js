// 🧪 test.js
// Purpose: A small test script to verify that our database connection works.
//
// What it does:
// 1. Imports the shared db connection from db.js.
// 2. Fetches all rows from the "users" table using Knex.
// 3. Displays them in a console table.
// 4. Closes the database connection (db.destroy()) so Node exits cleanly.
//
// We can later modify this file to insert, update, or delete users.

import { db } from './db.js';

async function getAllUsers(){
    try{
        const users = await db("users").select("*");
        console.log(users);
    } catch(err){
        console.log('Database error:', err.message);
    } finally {
        await db.destroy(); // closes the connection pool
    }
}

// getAllUsers();

async function insertNewUsers(){
    try{
        const newUser = {
            name: "Fransheska",
            email: "fransheska@example.com",
            created_at: new Date()
        };

        const result = await db("users").insert(newUser).returning("*"); // the returning ("*") tells PostgreSQL to give us back the full inserted row.
        console.log(result);
    } catch (err){
        console.log("Database error:", err.message);
    } finally {
        await db.destroy();
    }
}

insertNewUsers();