import express from "express";

const blogRoute = express.Router();

// Sample in-memory blog posts (acts like a mini database)
const blogPosts = [
  {
    id: 1,
    title: "Getting Started with Express",
    content: "Express makes building APIs fast and simple.",
    timestamp: new Date().toISOString() // creates an ISO date string
  },
  {
    id: 2,
    title: "Understanding Middleware",
    content: "Middleware functions can modify the request and response objects.",
    timestamp: new Date().toISOString()
  },
  {
    id: 3,
    title: "Routing in Express",
    content: "Routing helps you handle different HTTP requests.",
    timestamp: new Date().toISOString()
  },
  {
    id: 4,
    title: "Working with JSON Data",
    content: "Express can easily parse JSON using express.json().",
    timestamp: new Date().toISOString()
  },
  {
    id: 5,
    title: "Deploying Node Apps",
    content: "You can deploy Node apps on platforms like Render or Vercel.",
    timestamp: new Date().toISOString()
  }
];

// GET /posts: Retrieve a list of all blog posts.
blogRoute.get("/", (req, res) => {
    res.status(200).json(blogPosts);
});

// GET /posts/:id: Retrieve a specific blog post by ID.
blogRoute.get("/:postId", (req, res) => {
    const id = Number(req.params.postId);
    if (isNaN(id)) return res.status(400).json({ error: "Invalid Id" });
    const post = blogPosts.find(post => post.id === id);
    if (!post) return res.status(404).json({ error: "Post not found" });
    res.status(200).json(post);
});

// POST /posts: Create a new blog post.
blogRoute.post("/", (req, res) => {
    const { title, content } = req.body;
    if (!title || !content) res.status(400).json({ error: "Title and content required" });
    const newPost = {
        id: blogPosts.length + 1,
        title,
        content,
        timestamp: new Date().toISOString()
    };
    blogPosts.push(newPost);
    res.status(201).json(newPost);
});

// PUT /posts/:id: Update a blog post by ID.
blogRoute.put("/:postId", (req, res) => {
    const id = Number(req.params.postId);
    if (isNaN(id)) return res.status(400).json({ error: "Invalid Id" });
    const { title, content } = req.body;
    if (!title || !content) res.status(400).json({ error: "Title and content required" });
    const index = blogPosts.findIndex(post => post.id === id);
    if (index === -1) return res.status(404).json({ error: "Post not found" });
    const updatedPost = { id, title, content, timestamp: new Date().toISOString() };
    blogPosts[index] = updatedPost;
    res.status(200).json(updatedPost);
});

// DELETE /posts/:id: Delete a blog post by ID.
blogRoute.delete("/:postId", (req, res) => {
    const id = Number(req.params.postId);
    if (isNaN(id)) return res.status(400).json({ error: "Invalid Id" });
    const index = blogPosts.findIndex(post => post.id === id);
    if (index === -1) return res.status(404).json({ error: "Post not found" });
    const deletedPost = blogPosts.splice(index, 1)[0];
    res.status(200).json(deletedPost);
});

export default blogRoute;