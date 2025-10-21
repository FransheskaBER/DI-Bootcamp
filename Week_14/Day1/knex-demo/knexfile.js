// ⚙️ knexfile.js
// Purpose: Configuration file used by Knex CLI (command-line tool).
// It tells Knex how to connect to the database and where to store
// migration and seed files.
//
// - "import 'dotenv/config'" loads .env automatically.
// - "client: 'pg'" means we are using PostgreSQL.
// - "connection" uses the DATABASE_URL from .env.
// - "migrations" and "seeds" folders are for managing database structure and sample data.
//
// Knex uses this file when we run commands like:
//   npx knex migrate:make create_users_table
//   npx knex seed:run

import 'dotenv/config'; // This loads .env and makes process.env.DATABASE_URL available

// create a configuration object so knex CLI or your app can import it later:
export default {
  development: { // this is an environment, it can be production or testing also
    client: 'pg',// tells knex which database engine we are using (in this case we are using PostgreSQL)
    connection: process.env.DATABASE_URL,    // the actual connection string to my database (same as it says in .env file)
    // migrations and seeds are folders where knex will keep versioned files that create/modify tables (migrations) and insert sample data (seeds)
    migrations: { 
      tableName: 'knex_migrations',
      directory: './migrations'
    },
    seeds: {
      directory: './seeds'
    }
  }
};

