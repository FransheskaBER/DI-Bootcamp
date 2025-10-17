// // ------------bcrypt package------------
// const password = "secret12345";
// // hash before saving password: 
// const saltRounds = 10; 
// // "salt" is an extra ingredient you added to the password before hashing it
// // Salt = the extra random ingredient. // SaltRounds = how many times you stir the pot.
// const hashedPassword = await bcrypt.hash(password, saltRounds);
// console.log(hashedPassword);
// // Later when user log in compares it:
// const isMatch = await bcrypt.compare("secret12345", hashedPassword);
// console.log(isMatch);

// // ------------jsonwebtoken package------------
// // create and verify secure tokens (small strings that prove "who the user is" after they login)
// // a long string with 3 parts separate by DOTS
// // it is used mostly for AUTHENTICATION (log in, stay logged in)
// const user = { id: 1, email: "example@example.com" };
// // sing() = create a new token:
// const token = jwt.sign(user, "mysecretkey", { expiresIn: "1h" });
// // the token is "mysecretkey" which is store in the .env
// // the expiresIn = how long the token is valid for
// console.log(token);
// // Now verify the token when user makes a request:
// try {
//     const decoded = jwt.verify(token, "mysecretkey");
//     console.log(decoded) // prints prints { id: 1, email: "...", iat: ..., exp: ... }
// } catch(err){
//     console.log("Invalid or expired token")
// }
import express from "express";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config(); // loads values from the file .env 

const app = express();
app.use(express.json());

const users = []; // temporary DATABASE
const port = process.env.PORT || 5000;
const secretKey = process.env.JWT_SECRET;

app.post("/api/register", async (req, res) => {
    try {
        let { email, password } = req.body;
        if (typeof email !== "string" || typeof password !== "string") {
            return res.status(400).send("Email and Password Required")
        }

        email = email.trim().toLowerCase();
        
        const existingUser = users.find(user => user.email === email)
        if (existingUser) return res.status(409).send("That email already exist")

        const passwordHash = await bcrypt.hash(password, 10); 

        // save user in memory
        const user = { 
            id: Date.now(),
            email,
            passwordHash,
        };

        // Now add newly created user to the temporary DB (array "users"): 
        users.push(user);

        // create token with jwt
        const token = jwt.sign( { id: user.id, email: user.email }, secretKey, { expiresIn: "1h" });

        // response:
        return res.status(201).json({ token, user: { id: user.id, email: user.email } });

    } catch(err) {
        console.log(err);
        return res.status(500).json({ error: "Somehting went wrong" });
    }
});

app.post("/api/login", async (req, res) => {
    try {
        let { email, password } = req.body;
        email = email.trim().toLowerCase();

        if (!email || !password) return res.status(400).send("Email and password required to login");

        // check if the user exists:
        const user = users.find(user => user.email === email);
        if (!user) return res.status(404).send("User Not Found");
        
        // compare the password with the stored hashed password
        const isMatch = await bcrypt.compare(password, user.passwordHash);
        if (!isMatch) return res.status(401).send("Wrong password");

        // if it's a match, then create a new token:
        const token = jwt.sign({ id: user.id, email: user.email }, secretKey, { expiresIn: "1h" });

        // send a response with the token and user info:
        return res.status(200).json({ token, user: { id: user.id, email: user.email } });

    } catch(err) {
        console.log(err);
        return res.status(500).json({ error: "Something went wrong" });
    }
});

// create a custom middleware function to verify your identiy first before letting user access protected routes like /api/profile
// Express gives you the mechanism to create a functon with req, res, next
function verifyToken(req, res, next){
    try {
        const header = req.headers.authorization;
        console.log("Authorization header:", req.headers.authorization);
        if (!header) return res.status(401).send("Missing authorizartion header");

        const [scheme, token] = header.split(" ");
        if (scheme !== "Bearer" || !token) return res.status(401).send("Invalid authorization format");

        // verify the token:
        const decoded = jwt.verify(token, secretKey); // jwt.verify() returns the decoded payload(data) you originally signed with jwt.sign (so it will return id, email, creation date and expiration date).
        req.user = decoded;
        next();
    } catch(err) {
        return res.status(401).send("Invald or expired token");
    }
};

app.get("/api/profile", verifyToken, (req, res) => {
    const { id } = req.user; // get only the id from the decoded payload (data)

    const user = users.find(user => user.id === id);
    if (!user) return res.status(404).send("User Not Found");

    // return info but never passwordHash:
    return res.status(200).json({ id: user.id, email: user.email });
});

app.listen(port, () => console.log(`Server running on port ${port}`));

// app.get("/api/users", verifyToken, (req, res) => {
//     // return only public info and not passwords:
//     const publicInfo = users.map(user => ({
//         id: user.id,
//         email: user.email,
//     }));

//     res.status(200).json(publicInfo);
// });


