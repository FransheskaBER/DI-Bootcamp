import knex from "knex"; 
// import the knex library

const db = knex({
    client: 'pg', // tell knex we're using PostgreSQL
    connection: {
        host: 'localhost', // server where the DB lives (local)
        port: 5432, // PostgreSQL’s default port
        user: 'admin', // your DB username
        password: 'Queen2025', // your DB password
        database: 'databaseXP' // the specific database you’re using
    }
});
// creates a Knex connection configured for PostgreSQL

export default db; 
// make it available to other files by importing `db`

