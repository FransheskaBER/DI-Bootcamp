const http = require("http");

const server = http.createServer((req, res) => {
    res.end("Welcome to my new server on port 13000!");
});

server.listen(13000, () => {
    console.log("Server running on http://localhost:13000");
});

