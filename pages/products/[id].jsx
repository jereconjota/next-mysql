import { Layout } from "../../components/Layout";
import React from 'react'
import axios from "axios";
import { useRouter } from "next/router";


function Product({ product }) {

    const router = useRouter();

    const handleDelete = async (id) => {

        const res = await axios.delete(`/api/products/${id}`);
        console.log(res);
        router.push("/");
    }

    return (
        <Layout>
            <div className="">
                <div className="">
                    <h1 className="text-2xl font-bold">{product.name}</h1>
                    <p className="text-gray-700">{product.description}</p>
                </div>
                <div className="">
                    <p className="text-gray-700">Price: {product.price}</p>
                    <p className="text-gray-700">Created: {product.createdAt}</p>
                </div>
                <div className="gap-2">
                    <button className="bg-red-500 hover:bg-red-700 px-3 py-2 text-white max-w-xs rounded" onClick={() => handleDelete(product.id)}>Delete</button>
                    <button className="bg-gray-500 hover:bg-gray-700 px-5 py-2 text-white ml-2 max-w-xs rounded" onClick={() => router.push(`/products/edit/${product.id}`) }>Edit</button>
                </div>
            </div>
        </Layout>
    )
}

export const getServerSideProps = async (contex) => {
    const { data: product } = await axios.get('http://localhost:3000/api/products/' + contex.query.id);
    return {
        props: {
            product,
        },
    }
}

export default Product