import { getLocalProducts, createLocalProduct  } from '../../../utils/products';

export default function handler(req, res) {

    const METHOD = {
        GET: async () => {
            try {
                const [products] = await getLocalProducts();
                console.log(products);
                res.status(200).json(products);
            } catch (error) {
                console.log(error);
                res.status(500).json(error);
            }
        },
        POST: async () => {
            try {
                console.log(req.body)
                const { name, price, description } = req.body;
                const [result] = await createLocalProduct( name, price, description );
                console.log(result);
                res.status(200).json({ name, price, description, id: result.insertId });
            } catch (error) {
                console.log(error);
                res.status(500).json(error);
            }
        },

    }

    return METHOD[req.method]();
}