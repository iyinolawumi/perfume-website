import React from 'react';
import { Link } from 'react-router-dom';

const ProductCard = ({ id, name, price, image }) => {
    return (
        <div className="bg-white rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition duration-300">
            <img src={image} alt={name} className="w-full h-48 object-cover" />
            <div className="p-4">
                <h2 className="text-lg font-bold">{name}</h2>
                <p className="text-gray-600 mt-1">{price}</p>
                <Link
                    to={`/product/${id}`}
                    className="mt-2 inline-block bg-purple-500 text-white px-3 py-1 rounded hover:bg-purple-600 transition"
                >
                    View Details
                </Link>
            </div>
        </div>
    );
};

export default ProductCard;
