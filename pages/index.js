import axios from 'axios'
import { ProductForm } from '../components/ProductForm'

function index({ products }) {
    console.log(products)
    return (
        <div>
            <ProductForm />

            {products.map(product => (
                <div key={product.id}>
                    <h3>{product.name}</h3>
                    <p>{product.description}</p>
                    <p>{product.price}</p>
                </div>
            ))}
        </div>
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