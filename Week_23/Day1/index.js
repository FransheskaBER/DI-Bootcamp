import express from "express";
import authRouter from "./routes/auth.js";
import cookieParser from "cookie-parser";
import "dotenv/config";

const app = express();

app.use(express.json()); // Middleware to parse JSON bodies
app.use(cookieParser()); // Middleware to parse cookies
app.use("/auth", authRouter); // Mount the auth router at /auth


app.get("/", (req, res) => res.send("OK"));


const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`);
}); 


