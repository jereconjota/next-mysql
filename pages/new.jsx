import { Layout } from '../components/Layout'
import { ProductForm } from '../components/ProductForm'

const NewPage = () => {
    return (
        <Layout>
            <div className="grid place-items-center h5">
                <ProductForm />
            </div>
        </Layout>
    )
}

export default NewPage