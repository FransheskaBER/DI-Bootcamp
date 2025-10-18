import express from "express";

const app = express();
app.use(express.json());

app.post("/shots", (req, res) => {
  res.status(200).json({ status: "Success", message: "Shot Saved Successfully" });
});

export default app; // <-- important for supertest
// (If you also start the server, do that in a separate file like server.js)
