// sets up Express, defines the endpoints and connects them to the routes where defines the api method
import express from "express";
import bookRoutes from "./routes/bookRoutes.js";

const app = express();

app.use(express.json());

// Mount the routes:
app.use("/api/books", bookRoutes); // here is where you define the route hence "/api/routes"

app.listen(3000, () => console.log("Server running on port 3000"));

