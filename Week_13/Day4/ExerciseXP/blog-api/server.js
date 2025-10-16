import express from "express";
const app = express();

const posts = [
  { id: 1, title: "Learning JavaScript", content: "Today I started learning JS and built my first function!" },
  { id: 2, title: "Node.js Basics", content: "Explored how to create a server using Express." },
  { id: 3, title: "Frontend Fun", content: "Played around with HTML, CSS, and Flexbox layouts." },
  { id: 4, title: "Async Await", content: "Finally understood how promises and async functions work together." },
  { id: 5, title: "REST APIs", content: "Built a small CRUD API for managing products." },
  { id: 6, title: "MongoDB Intro", content: "Connected Node.js to MongoDB and inserted documents." },
  { id: 7, title: "React Components", content: "Learned to pass props and manage state in React." },
  { id: 8, title: "Version Control", content: "Practiced Git branching and pull requests." },
  { id: 9, title: "Debugging", content: "Used console.log and VS Code breakpoints effectively." },
  { id: 10, title: "Deployment", content: "Deployed my first app to Render and it worked!" }
];

// middleware
app.use(express.json());

app.get("/posts", (req, res) => {
    res.json(posts);
});

app.get("/posts/:postID", (req, res) => {
    const id = Number(req.params.postID);
    if (isNaN(id)) return res.status(400).send("Invalid ID");

    const post = posts.find(post => post.id === id);
    if (!post) return res.status(404).json({ error: "Post Not Found" });

    return res.json(post) 
});

app.post("/posts", (req, res) => {
    const { title, content } = req.body;
    if (!title || !content) return res.status(400).json({ error: "Title and content required" });

    const newPost = {
        id: posts.length + 1,
        title,
        content,
    };

    posts.push(newPost);
    res.status(201).json(newPost);
});

app.put("/posts/:postID", (req, res) => {
    const id = Number(req.params.postID);
    if (isNaN(id)) return res.status(400).send("Invalid ID");

    const index = posts.findIndex(post => post.id === id);
    if (index === -1) return res.status(404).send("Post Not Found")

    const { title, content } = req.body;
    if (!title || !content) return res.status(400).send("Title and Content Required");

    const updatedPost = {
        id: posts[index].id,
        title,
        content,
    };

    posts[index] = updatedPost;
    return res.status(200).json(updatedPost);
});

app.delete("/posts/:postID", (req, res) => {
    const id = Number(req.params.postID);
    if (isNaN(id)) return res.status(400).send("Invalid ID");

    const index = posts.findIndex(post => post.id === id);
    if (index === -1) return res.status(404).send("Post Not Found");

    const deletedPost = posts.splice(index, 1)[0];// get the first (and only) deleted item
    return res.status(200).json(deletedPost); 
});

app.listen(8585, () => console.log("listening on port 8585"));