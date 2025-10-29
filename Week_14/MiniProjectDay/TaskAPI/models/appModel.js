import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const filePath = path.join(__dirname, "../data/users.json");


export function getUsers(){
    return loadUsers();
}

export function getUserById(id){
    const users = loadUsers();
    return users.find(user => user.id === id) || null;
}

export function register(body){
    const users = loadUsers();
    const { username, email } = body;
    if (!isUnique(users, username, email)){
        throw new Error("Username already exists");
    }

    const newUser = { id: users.length + 1, ...body };
    users.push(newUser);
    saveUsers(users);
    return newUser
}

export function findUserByUsername(username){
    const users = loadUsers();
    return users.find(user => user.username === username);
}


export function updateUser(id, changes){
    const users = loadUsers();
    const index = users.findIndex(user => user.id === id);
    if (index === -1) return null;
    const user = users[index];

    const allowedKeys = ["first_name", "last_name", "email", "username"];
    const filteredChanges = {};
    for (const key of allowedKeys){
        if (changes[key] !== undefined){
            filteredChanges[key] = changes[key]
        }
    }
    const updatedUser = { ...user, ...filteredChanges};
    users[index] = updatedUser;
    saveUsers(users);
    return updatedUser;
}



// Helper functions:
// 1. read:
function loadUsers(){
    const users = fs.readFileSync(filePath, "utf-8");
    return JSON.parse(users);
}

// 2. write:
function saveUsers(newArr){
    fs.writeFileSync(filePath, JSON.stringify(newArr, null, 2), "utf8");
}

// is unique
export function isUnique(users, username, email){
    const unique = users.some(user => user.username === username || user.email === email);
    if (unique) return false;
    return true;
}