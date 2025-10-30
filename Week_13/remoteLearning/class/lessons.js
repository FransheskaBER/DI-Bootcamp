// using the body-parse package:
// -------------- MIDDLEWARES -------------------
import express from "express";
import bodyParser from "body-parser";
import morgan from "morgan";

const app = express();
app.use(bodyParser.json()); // here you are using the bodyParser as a middleware - it parses JSON, url encoded

app.use(morgan("dev")); // log (records) all your requests so you can see later from theterminal the compete requests you recevie, its status, etc.
// so for example if you have this api request:
app.get("/", (req, res) => {
    res.status(200).send("Hello");
});
// if you do in your terminal "/" you will get: GET / 200 5.123 ms -6


// -------------- MONGO DATABASE -------------------
// using MongoDB, you need to import it first. Mongo creates a DB in files and manages it for you. It's good for apps that are growing or changing.
// import { mongoClient } from "mongodb";
// then you create a key so node will communicate with your mongoDB:
const client = new MongoClient("mongodb://localhost:27017");  // this prepares the connection
await client.connect(); // opens the connection
// once you are inside you pick the data you want to access for example, we want to access "shop" database:
const db = client.db("shop"); // if it doesnt exist, mongo will create a new one
// then you want to access a collection inside database shop:
const users = db.collection("users");
// you can insert new data if you want, with:
await users.insertOne({ name: "fransheska", age: 25 });
// to find a specific user:
const foundUser = await users.findOne({ name: "Alice" });
console.log(foundUser);

