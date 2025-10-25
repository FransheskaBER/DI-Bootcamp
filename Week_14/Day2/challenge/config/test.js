import db from "./db.js";

const test = async() => {
    const result = await db.raw("SELECT NOW()");
    console.log(result.rows[0])
};

test();

// OUTPUT: { now: 2025-10-22T14:05:14.823Z }