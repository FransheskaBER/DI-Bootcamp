import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import "dotenv/config";
import userRoute from "./routes/userRoute.js";


const app = express();

app.use(
    cors({
        origin: "http://localhost:5174",
        credentials: true,
    })
);
app.use(cookieParser());
app.use(express.json());

app.use('/api/user', userRoute);


const PORT = process.env.PORT || 5001;
app.listen(PORT, () => {
    console.log(`Server run on ${PORT}`);
});