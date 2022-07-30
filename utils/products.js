import { pool } from '../config/db';

export async function getLocalProducts() {
    try {
        const products = await pool.query('SELECT * FROM products');
        return products;
    } catch (error) {
        console.log(error);
        return error;
    }
}

export async function createLocalProduct( name, price, description ) {
    try {
        const result = await pool.query(`INSERT INTO products SET ?`, { name, price, description });
        return result;
    } catch (error) {
        console.log(error);
        return error;
    }
}

export async function getLocalProduct(id) {
    try {
        const result = await pool.query('SELECT * FROM products WHERE id = ?', [id]);
        return result;
    } catch (error) {
        console.log(error);
        return error;
    }
}


export async function updateLocalProduct( name, price, description, id ) {
    try {
        const result = await pool.query('UPDATE products SET name = ?, price = ?, description = ? WHERE id = ?', [name, price, description, id]);
        return result;
    } catch (error) {
        console.log(error);
        return error;
    }
}

export async function deleteLocalProduct(id) {
    try {
        const result = await pool.query('DELETE FROM products WHERE id = ?', [id]);
        return result;
    } catch (error) {
        console.log(error);
        return error;
    }
}