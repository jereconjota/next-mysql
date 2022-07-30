import { pool } from '../../../config/db';
import { getLocalProduct, updateLocalProduct, deleteLocalProduct } from '../../../utils/products';

export default async function handler(req, res) {
    // console.log(req.method);
    // res.status(200).json(`getting one product with id ${req.query.id}`);

    const METHOD = {
        GET: async () => {
            try {
                const { id } = req.query;
                const [result] = await getLocalProduct( id );
                console.log(result);
                res.status(200).json(result[0]);
            } catch (error) {
                console.log(error);
                res.status(500).json(error);
            }
        },
        DELETE: async () => {
            try {
                const { id } = req.query;
                const [result] = await deleteLocalProduct( id );
                res.status(204).json();
            } catch (error) {
                console.log(error);
                res.status(500).json(error);
            }
        },
        PUT: async () => {
            try {
                const { id } = req.query;
                const { name, price, description } = req.body;
                const [result] = await updateLocalProduct(name, price, description, id);
                res.status(204).json();
            } catch (error) {
                console.log(error);
                res.status(500).json(error);
            }
        }
    }

    return METHOD[req.method]();

}