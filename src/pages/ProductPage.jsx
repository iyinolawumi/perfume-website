import React from 'react';
import { useParams } from 'react-router-dom';

const ProductPage = () => {
    const { id } = useParams();

    // For demonstration, a static product is used.
    const product = {
        id: id,
        name: "Elegant Rose",
        description: "A luxurious blend of floral notes and a hint of musk.",
        price: "$50.00",
        image: "https://via.placeholder.com/600x400?text=Elegant+Rose"
    };

    return (
        <div className="p-6 bg-gray-100 min-h-screen">
            <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
                <img src={product.image} alt={product.name} className="w-full h-96 object-cover" />
                <div className="p-6">
                    <h1 className="text-3xl font-bold text-purple-600">{product.name}</h1>
                    <p className="mt-4 text-gray-700">{product.description}</p>
                    <p className="mt-4 text-xl font-semibold">{product.price}</p>
                    <button className="mt-6 bg-pink-500 hover:bg-pink-600 text-white px-4 py-2 rounded transition">
                        Add to Cart
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ProductPage;
