import { pool } from '../../config/db';

export default function handleProductMethod(method, id) {
    let response = {};

    const METHOD = {
        GET: async () => {
            const [result] = await pool.query('SELECT * FROM products WHERE id = ?', [id]);
            // res.status(200).json(result[0]);
            return response = {
                status: 200,
                data: result[0]
            };
        },
        DELETE: async () => {
            const [result] = await pool.query('DELETE FROM products WHERE id = ?', [id]);
            // res.status(204).json();
            return response = {
                status: 204,
            }
        },
    }

    return METHOD[method]();
}