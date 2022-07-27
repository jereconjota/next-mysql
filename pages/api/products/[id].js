import { pool } from '../../../config/db';


export default async function handler(req, res) {
    // console.log(req.method);
    // res.status(200).json(`getting one product with id ${req.query.id}`);

    const METHOD = {
        GET: async () => {
            const { id } = req.query;
            const [result] = await pool.query('SELECT * FROM products WHERE id = ?', [id]);

            res.status(200).json(result[0]);
        },
        DELETE: async () => {
            const { id } = req.query;
            const [result] = await pool.query('DELETE FROM products WHERE id = ?', [id]);

            res.status(204).json();
        },
        PUT: async () => {
            const { id } = req.query;
            const { name, price, description } = req.body;
            const [result] = await pool.query('UPDATE products SET name = ?, price = ?, description = ? WHERE id = ?', [name, price, description, id]);

            res.status(204).json();
        }
    }

    return METHOD[req.method]();

}