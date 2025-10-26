import db from "../config/db.js";

export function getAllUsers(){
    return db("chatusers").select("*");
    // returns an array of rows
}

export function insertNewUser(data){
    return db("chatusers").insert(data).returning(["id", "username"]);
    // returns an array of inserted rows
}

export function getUserByEmail(email){
    return db("chatusers").where({ email }).first();
    // returns a single object/row - NOT array because of first();
}