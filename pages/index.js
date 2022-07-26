import axios from 'axios'
import { Layout } from '../components/Layout'

function index({ products }) {
    console.log(products)
    return (
        <Layout>
            {products.map(product => (
                <div key={product.id}>
                    <h3>{product.name}</h3>
                    <p>{product.description}</p>
                    <p>{product.price}</p>
                </div>
            ))}
        </Layout>
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