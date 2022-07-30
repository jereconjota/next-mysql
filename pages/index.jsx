import axios from 'axios';
import { Layout } from '../components/Layout';
import { ProductCard } from '../components/ProductCard';
import { supabase } from '../utils/supabaseClient';
// import { getLocalProducts } from '../utils/products';



function index({ products }) {
    return (
        products.length === 0 ? (<Layout><h2 className='text-center text-2xl font-bold'>No products</h2></Layout>) : (
            <Layout>
                <div className='grid gap-4 grid-cols-1 md:grid-cols-3'>
                    {products.map((product) => (
                        <ProductCard key={product.id} product={product} />
                    ))}
                </div>
            </Layout>
        )
    )
}


async function getProducts() {
    try {
        let { data, error, status } = await supabase
            .from('products')
            .select('*')

        if (error && status !== 406) {
            throw error
        }

        if (data) {
            console.log(data)
            return data;
        }
    } catch (error) {
        console.log(error.message)
    } 
}

export const getServerSideProps = async (contex) => {

    //trayendo datos de supabase
    const products = await getProducts();
    return {
        props: {
            products
        },
    }
    
    
    //trayendo datos de una bd local:
    // const { data: products } = await axios.get('http://localhost:3000/api/products') 
    //no debe hacerse el llamado a la api asi 👆, podemos llamar directamente a la funcion que busca a la bd 👇
    // const [products] = await getLocalProducts();
    // return {
    //     props: {
    //         // products: JSON.parse(JSON.stringify(products))
    //         products
    //     },
    // }

}


export default index