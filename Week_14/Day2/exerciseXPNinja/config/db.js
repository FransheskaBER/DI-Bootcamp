import knex from "knex";

const db = knex({
    client: 'pg',
    connection: {
        host: 'localhost',
        port: 5432,
        user: 'admin',
        password: 'Queen2025',
        database: 'quiz_game'
    }
});

export default db;
