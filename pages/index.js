import axios from 'axios'
import Link from 'next/link'
import { Layout } from '../components/Layout'


function index({ products }) {
    console.log(products)
    return (
        products.length === 0 ? (<Layout><h2>No products</h2></Layout>) : (
            <Layout>
                {products.map(product => (
                    <Link href={`/products/${product.id}`} key={product.id}>
                        <a>
                            <div key={product.id} className="border border-gray-200 shadow-md p-6">
                                <h3>{product.name}</h3>
                                <p>{product.description}</p>
                                <p>{product.price}</p>
                            </div>
                        </a>
                    </Link>
                ))}
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