import { pool } from '../../../config/db';

export default function handler(req, res) {

    const METHOD = {
        GET: async () => {
            const [ products ] = await pool.query('SELECT * FROM products');
            console.log(products);
            res.status(200).json(products);
        },
        POST: async () => {
            console.log(req.body)
            const { name, price, description } = req.body;
            
            const [ result ] = await pool.query(`INSERT INTO products SET ?`, { name, price, description });
            
            console.log(result);

            res.status(200).json({ name, price, description, id: result.insertId });
        }, 

    }

    return METHOD[req.method]();
}