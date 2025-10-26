import knex from "knex";

const db = knex({
    client: "pg",
    connection: {
        host: "localhost",
        port: 5432,
        username: "admin",
        password: "Queen2025",
        database: "databaseXP"
    }
})

const test = async()=>{
    const result = await db.raw("SELECT NOW()");
    console.log(result.rows[0]);
}
test();

export default db;