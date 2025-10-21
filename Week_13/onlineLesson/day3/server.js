import express from "express";

const app = express();
app.use(express.json());

const users = [
  {
    id: 1,
    name: "Leanne Graham",
    username: "Bret",
    email: "Sincere@april.biz",
  },
  {
    id: 2,
    name: "Ervin Howell",
    username: "Antonette",
    email: "Shanna@melissa.tv",
  },
  {
    id: 3,
    name: "Clementine Bauch",
    username: "Samantha",
    email: "Nathan@yesenia.net",
  },
];

app.get('/users', (req, res) => {
    //  res.send(users)
    res.json(users)
});

app.get('/users/:id', (req, res) => {
    const id  = Number(req.params.id);
    if (isNaN(id)) {
        res.status(400).json({ error: 'Invalid ID' });
        return;
    }
    const user = users.find(user => user.id === id);
    if (!user){
        res.status(404).json({ error: "User Not Found"});
        return;
    }
    return res.json(user);
})

// from a query like /search?name=le
app.get("/search", (req, res) => {
    const { name } = req.query;
    const filteredUsers = users.filter(user => user.name.toLowerCase().includes(name.toLowerCase()));
    res.json(filteredUsers);
});


// POST (we can use <form> or fetch() from the client to post but here we use postman from the server)
app.post("/users", (req, res) => {
    // console.log(req.body);
    const { name, username, email } = req.body;
    const newUser = {
        id: users.length + 1,
        name, 
        username, 
        email
    }
    users.push(newUser);
    res.json(users);
});

// PUT (update a user - we need id, name, username, email):
app.put("/users/:id", (req, res) => {
    const { id } = req.params;
    const { name, username, email } = req.body;
    const index = users.findIndex(user => user.id === id);
    users[index] = { id, name, username, email };
    res.json(users); 
});


// DELETE (you need the user's id)
app.delete("/users/:id", (req, res) => {
    const { id } = req.params;
    const index = users.findIndex(user => user.id === id);
    const deletedUser = users.splice(index, 1)[0];
    res.json(users); 
});



const PORT = 2000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));