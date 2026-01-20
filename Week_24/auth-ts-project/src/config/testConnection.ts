import db from "../db/db.js";

async function testConnection() {
    try {
        console.log('Testing database connection....');

        const result = await db('authusers').select('*').limit(1);

        console.log('Database connection successfully');
        console.log('Table authusers is accessible');
        console.log('Current rows in table:', result.length);    
        
        await db.destroy();
        process.exit(0);
    } catch (error) {
        console.error('Database connection failed');
        console.error(error);
        process.exit(1);
    }
}

testConnection();