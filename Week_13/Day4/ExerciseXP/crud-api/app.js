import express from "express";
import { fetchPost } from "./data/dataService.js"

const app = express();

app.listen(5000, () => console.log("Server running on port 5000"));

app.get("/fetchPosts", async (req, res) => {
    try{
        const data = await fetchPost();
        res.status(200).json(data);
        console.log("Data successfully retrieved and sent as a response");
    } catch(error){
        console.log("Error fetching data:", error.message);
        res.status(500).send("Failed to retrieve data");
    }
});
