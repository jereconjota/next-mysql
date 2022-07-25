import { createPool } from "mysql2/promise";

const pool = createPool({
    host: "localhost",
    user: "root",
    password: "$secret$",
    database: "productsdb",
    port: 3306,
})

export { pool };