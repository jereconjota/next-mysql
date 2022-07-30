import { Layout } from "../../components/Layout";
import React from 'react'
import axios from "axios";
import { useRouter } from "next/router";
import toast from "react-hot-toast";
// import { getLocalProduct } from '../../utils/products';
import { supabase } from '../../utils/supabaseClient';


function Product({ product }) {

    const router = useRouter();

    const handleDelete = async (id) => {
        try {
            // const res = await axios.delete(`/api/products/${id}`);
            
            const { data, error } = await supabase
                .from('products')
                .delete()
                .match({ id: id })

            router.push("/");
        } catch (error) {
            toast.error(error.message, { position: "bottom-center" });
        }
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
                    <p className="text-gray-700">Created: {product.created_at}</p>
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
    // const { data: product } = await axios.get('http://localhost:3000/api/products/' + contex.query.id);
    // const [product] = await getLocalProduct(contex.query.id);
    // return {
    //     props: {
    //         product: JSON.parse(JSON.stringify(product[0]))
    //     },
    // }


    const product = await getProduct(contex.query.id);
    return {
        props: {
            product: product
        },
    }

}

async function getProduct(id) {
    try {
        let { data, error, status } = await supabase
            .from('products')
            .select('*')
            .eq('id', id)
            .single()

        if (error && status !== 406) {
            throw error
        }

        if (data) {
            return data;
        }
    } catch (error) {
        console.log(error.message)
    } 
}

export default Product