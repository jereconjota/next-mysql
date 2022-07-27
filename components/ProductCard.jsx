import Link from 'next/link'

export function ProductCard ({ product }) {
    return (
        <Link href={`/products/${product.id}`} key={product.id}>
            <a>
                <div key={product.id} className="border border-gray-200 shadow-md p-6">
                    <h3>{product.name}</h3>
                    <p>{product.description}</p>
                    <p>{product.price}</p>
                </div>
            </a>
        </Link>
    )
}
