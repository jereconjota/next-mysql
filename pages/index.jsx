import axios from 'axios'
import { Layout } from '../components/Layout'
import { ProductCard } from '../components/ProductCard'

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

export const getServerSideProps = async (contex) => {
    const { data: products } = await axios.get('http://localhost:3000/api/products')

    return {
        props: {
            products,
        },
    }
}


export default index