import knex from "knex";
import config from "../config/knexfile.js";

// create and export database connection using the config created in knexfile.ts
const db = knex(config);

export default db;