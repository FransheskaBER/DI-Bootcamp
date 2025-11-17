import express from "express";
import cors from "cors";

const app = express();
const PORT = 5000;

app.use(express.json());
app.use(cors());

// APIs routes:
app.get("/api/users", (req, res) => {
    res.json([
        {id: 1, username: "somebody"},
        {id: 2, username: "somebody_else"},
    ]);
});

app.get("/api/customers", (req, res) => {
    res.json([
        {id:1, firstName:"John", lastName:"Doe"},
        {id:2, firstName:"Jane", lastName:"Doe"},
        {id:3, firstName:"Ziv", lastName:"Chen"},
        {id:4, firstName:"Isaac", lastName:"Groisman"},
        {id:5, firstName:"Avner", lastName:"Maman"},
        {id:6, firstName:"Megan", lastName:"Dreyfuss"}
    ])
})

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`)
});