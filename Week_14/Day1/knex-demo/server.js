// 🚀 server.js
// Purpose: Start a basic Express server connected to PostgreSQL via Knex.
//
// What it does:
// 1. Imports express and our db connection.
// 2. Creates a basic health route ("/").
// 3. Creates a "/users" GET route to fetch all users.
// 4. Creates a "/users" POST route to add a new user.
// 5. Starts the server on port 3000.

import express from "express";
import { db } from "./db.js";

const app = express();

app.use(express.json());

// get all users  - SELECT
app.get("/users", async (req, res) => {
    try {
        const users = await db("users").select("*");
        res.json(users);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// add a new user - INSERT one
app.post("/users", async (req, res) => {
    try {
        const { name, email } = req.body;
        if (!name || !email) return res.status(400).json({ error: "Name and email required" });

        const [newUser] = await db("users").insert({ name, email, created_at: new Date() }).returning("*");
        
        res.status(201).json(newUser);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// UPDATE statement
app.put("/update/:id", async (req, res) => {
  try {
    const id = Number(req.params.id);
    const { name, email } = req.body;
    if (!email) return res.status(400).json({ error: "Email required" });

    const query = db("users").where({ id });
    if (name) query.andWhere({ name });

    const [updatedUser] = await query.update({ email }).returning("*");
    if (!updatedUser) return res.status(404).json({ message: "User not found" });
    res.json(updatedUser);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});


// get a specific user - SELECT with a CONDITION
app.get("/getoneuser/:userName", async (req, res) => {
    try{
        const { userName } = req.params;
        const user1 = await db("users").select("*").where({ name: userName });
        res.json(user1);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// several conditions: AND
app.get("/and/:id/:name", async(req, res) => {
    try {
        const { id, name } = req.params;
        const user = await db("users").select("*").where({ id: id, name: name }); 
        res.json(user)
    } catch(err) {
        res.status(500).json({ error: err.message })
    }
})

// condition COMPARISON
app.get("/comparison/:minId", async(req, res) => {
    try {
        const { minId } = req.params;
        const users = await db("users").select("*").where("id", ">", minId);

        if (users.length === 0) return res.status(404).json({ message: "No users found with id greater than " + minId});
        res.json(users);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
})

// OR condition
app.get("/or", async(req, res) => {
    try {
        const users = await db("users").select("*").where("id", "6").orWhere("name", "Noah");
        res.json(users);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// Transactions = group several DB operations into one package: if one step failes, none of the changes are saved:
await db.transaction(async trx => {     // trx is just a variable for your transactions
    await trx("accounts").where({ id: 1 }).decrement("balance", 100);
    await trx("account").where({ id: 2 }).increment("balance", 100);
});


const PORT = 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
