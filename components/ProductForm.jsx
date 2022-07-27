import axios from "axios";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import toast from "react-hot-toast";

export function ProductForm() {

    const [product, setProduct] = useState({
        name: "",
        price: 0,
        description: ""
    });

    const router = useRouter();

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            if (router.query.id) {
                await axios.put(`/api/products/${router.query.id}`, product);
                toast.success("Task Updated", {
                    position: "bottom-center",
                });
            } else {
                const res = await axios.post("/api/products", product);
                toast.success("Task Saved", {
                    position: "bottom-center",
                });
            }
            router.push("/");
        } catch (error) {
            toast.error( error.message, { position: "bottom-center" } );
        }
    }

    const handleChange = ({ target: { name, value } }) => {
        setProduct({
            ...product,
            [name]: value
        });
        console.log(name, value);
    }

    useEffect(() => {
        const getProduct = async () => {
            const { data: product } = await axios.get(`/api/products/${router.query.id}`);
            setProduct(product);
        }
        if (router.query.id) {
            getProduct();
        }
    }
        , [router.query.id]);


    return (
        <div className="w-full max-w-xs">
            <form onSubmit={handleSubmit} className="bg-white shadow-md rounded px-8 py-8 mb-4">
                <label htmlFor="name"  className="block text-gray-700 text-sm font-bold my-2">Name: </label>
                <input type="text" name="name" onChange={handleChange} className="shadow border rounded py-2 px-3 text-gray-700
                focus:outline-none focus:shadow-outline w-full" value={product.name} />

                <label htmlFor="price"  className="block text-gray-700 text-sm font-bold my-2">Price: </label>
                <input type="text" name="price" id="price" onChange={handleChange} className="shadow border rounded py-2 px-3 text-gray-700 focus:outline-none focus:shadow-outline w-full" value={product.price} />

                <label htmlFor="description"  className="block text-gray-700 text-sm font-bold my-2">Description: </label>
                <textarea name="description" rows="2" onChange={handleChange} className="shadow border rounded py-2 px-3 text-gray-700 focus:outline-none focus:shadow-outline w-full" value={product.description}></textarea>

                <button className="bg-purple-500 hover:bg-purple-700 mt-4 py-2 px-4 rounded focus:outline-none focus:shadow-outline font-bold text-white">
                    {router.query.id ? "Update product" : "Create product"}
                </button>
            </form>
        </div>
    )
}
