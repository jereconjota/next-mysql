import axios from "axios";
import { useState } from "react";

export function ProductForm() {

    const [product, setProduct] = useState({
        name: "",
        price: 0,
        description: ""
    });

    const handleSubmit = async (e) => {
        e.preventDefault();
        const res = await axios.post("/api/products", product);
        console.log(res);
    }

    const handleChange = ({target: {name, value}}) => {
        setProduct({
            ...product,
            [name]: value
        });
        console.log(name, value);
    }


    return (
        <div className="w-full max-w-xs">
            <form onSubmit={handleSubmit} className="bg-white shadow-md rounded px-8 py-8 mb-4">
                <label htmlFor="name">Name: </label>
                <input type="text" name="name" onChange={handleChange} className="shadow border rounded py-2 px-3 text-gray-700"/>

                <label htmlFor="price">Price: </label>
                <input type="text" name="price" id="price" onChange={handleChange} className="shadow border rounded py-2 px-3 text-gray-700"/>

                <label htmlFor="description">Description: </label>
                <textarea name="description" rows="2" onChange={handleChange} className="shadow border rounded py-2 px-3 text-gray-700"></textarea>

                <button className="bg-purple-500 hover:bg-purple-700 py-2 px-4 rounded focus:outline-none focus:shadow-outline font-bold text-white">Save product</button>
            </form>
        </div>
    )
}
