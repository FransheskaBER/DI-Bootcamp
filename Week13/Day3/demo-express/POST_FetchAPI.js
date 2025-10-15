// TO FIND AND RETURN STATIC FILES THAT ARE REQUESTED, USE:
// express.static()
// Example: app.use(express.static("directoryName"));

// code example in HTML: "public/index.html"
// <!DOCTYPE html>
// <html lang="en" dir="ltr">
//   <head>
//     <meta charset="utf-8">
//     <title>Form</title>
//   </head>
//   <body>
//     <form action="/search" method="POST">
//         <label>Name</label><input name="fullname">
//         <label>Address</label><input name="Address">
//     </form>
//     </body>
// </html>


// // code example in JS:
// import express from "express";
// import path from "path";
// import { fileURLToPath } from "url";
// const __filename = fileURLToPath(import.meta.url);
// const __dirname = path.dirname(__filename);

// const app = express();

// // middlewares: Because of these two middlewares, Express will automatically parse the form data from index.html and attaches it to req.body.
// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));

// // serve static files
// app.use(express.static(__dirname)); //__dirname points to the /demo-express folder where this file is. 

// app.get("/", (req, res) => {
//     // serve the index.html in the same folder
//     res.sendFile(path.join(__dirname, "index.html"));
// });

// app.post("/search", (req, res) => {
//     console.log(req.body); // This will make Express to print the parsed data (coming from the two middlewares above) submitted in the form index.html in the terminal. e.g., { fullname: 'fransheska', Address: 'echevarria' } 
//     res.send("welcome, " + req.body.fullname ); // Express sends this response back to your browser.
// })

// app.listen(8080, () => console.log("Example app listening on port 8080"));



// USE FETCH API
import express from "express";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename); // points to this folder

const app = express();

// middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// serve static files
app.use(express.static(__dirname));

// methods
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "index.html"));
})

app.route("/login")
    .get((req, res) => {
        console.log("Query", req.query); // { username: 'john' , password: '123' }
        
        const user = req.query.username;
        console.log("User", user); // john 

        const pass = req.query.password;
        console.log("Password", pass); // 123

        const data = {
            message: "welcome back",
            user
        }
        console.log("Get Data:", data); //  { message: "welcome back", user: "john" }
        res.send(data);
    })

    .post((req, res) => {
        console.log("req.body", req.body); // { username: "sara", password: "abc" }
        let user = req.body.username;
        let pass = req.body.password;

        console.log("User", user); // Sara
        console.log("Password", pass); // abc

        const data = {
            message: "welcome new user",
            user
        }

        console.log("Post Data", data);//  { message: "welcome new user", user: "Sara" }
        res.send(data)
    })

    app.listen(8080, () => console.log("Example app listening on port 8080"));
