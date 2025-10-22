import express from "express";
import knex from 'knex';

const app = express();
app.use(express.json());

// database connection:
const db = knex({
    client: 'pg',
    connection: {
        host: 'localhost',
        port: 5432,
        user: 'admin',
        password: 'Queen2025',
        database: 'blogdb',
    },
});

// Implement the following routes using Express:
// GET /posts: Return a list of all blog posts.
app.get('/posts', async (req, res) => {
    try {
        const posts = await db("posts").select('*');
        res.status(200).json(posts);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// GET /posts/:id: Return a specific blog post based on its id.
app.get('/posts/:id', async (req, res) => {
    try {
        const id = Number(req.params.id);
        if (isNaN(id)) return res.status(400).json({ error: "INVALID ID" });

        const post = await db('posts').where('id', id).first(); // use first() to give you the actual row object
        if (!post) return res.status(404).json({ error: "POST NOT FOUND" });

        return res.status(200).json(post);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// POST /posts: Create a new blog post.
app.post('/posts', async (req, res) => {
    try {
        const { title, content } = req.body;
        if (typeof title !== "string" || typeof content !== "string" || !title || !content) return res.status(400).json({ error: "TITLE AND CONTENT REQUIRED" });

        const [newPost] = await db('posts').insert({ title: title.trim(), content: content.trim(), created_at: new Date(), updated_at: new Date() }).returning('*');
        return res.status(201).json(newPost);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// PUT /posts/:id: Update an existing blog post.
app.put('/posts/:id', async(req, res) => {
    try {
        const id = Number(req.params.id);
        if (isNaN(id)) return res.status(400).json({ error: "INVALID ID" });

        const { title, content } = req.body;
        if (typeof title !== "string" || typeof content !== "string" || !title || !content) return res.status(400).json({ error: "TITLE AND CONTENT REQUIRED" });

        const [updatedPost] = await db('posts').where({ id }).update({ title: title.trim(), content: content.trim(), updated_at: new Date() }).returning('*');
        if (!updatedPost) return res.status(404).json({ error: "POST NOT FOUND" });

        res.status(200).json(updatedPost);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// DELETE /posts/:id: Delete a blog post.
app.delete('/posts/:id', async(req, res) => {
    try {
        const id = Number(req.params.id);
        if (isNaN(id)) return res.status(400).json({ error: "INVALID ID" });

        const deletedRows = await db('posts').where({ id }).del().returning('*'); // returning > returns an array
        if (deletedRows.length === 0) return res.status(404).json({ error: "POST NOT FOUND" });
        
        const deletedPost = deletedRows[0];
        res.status(200).json(deletedPost);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});





// // DB ping route (to check that the database is successfully connected)
// app.get('/db-ping', async (req, res) => {
//   try {
//     const { rows } = await db.raw('SELECT 1 + 1 AS result');
//     res.json({ ok: true, result: rows[0].result });
//   } catch (err) {
//     res.status(500).json({ ok: false, error: err.message });
//   }
// });

const PORT = 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));