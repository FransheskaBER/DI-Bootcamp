import db from "../config/db.js";

// create a new to-do
export function createOne(body){
    return db('tasks').insert(body).returning('*');
}

// get all to-dos
export function findAll() {
  return db('tasks').select("*");
}

// get one to-do
export function findOne(id){
    return db('tasks').where({ id }).first();
}

// update one to-do
export function updateOne(id, body){
    return db('tasks').where({ id }).update(body).returning('*');
}

// delete one to-do
export function deleteOne(id){
    return db('tasks').where({ id }).del().returning('*');
}
