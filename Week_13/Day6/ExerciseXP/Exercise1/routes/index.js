import express from "express";

const router = express.Router();

export default router;

router.get("/", (req, res) => {
    res.send("Home Page");
});

router.get("/about", (req, res) => {
    res.send("About Us Page")
});

router.post("/", (req, res) => {
    const { name } = req.body;
    res.send(`Hello ${name}`);
});

