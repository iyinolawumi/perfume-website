import React from 'react';
import ProductCard from '../components/ProductCard';

// Sample data. In a real project, this might come from an API.
const products = [
    {
        id: 1,
        name: 'Elegant Rose',
        price: '$50.00',
        image: 'https://via.placeholder.com/300x200?text=Elegant+Rose'
    },
    {
        id: 2,
        name: '(Club de nuit) Mystic Oud',
        price: '$80.00',
        image: 'https://via.placeholder.com/300x200?text=Mystic+Oud'
    },
    {
        id: 3,
        name: 'Fresh Citrus',
        price: '$45.00',
        image: 'https://via.placeholder.com/300x200?text=Fresh+Citrus'
    },
    {
        id: 4,
        name: 'Summer Breeze',
        price: '$60.00',
        image: 'https://via.placeholder.com/300x200?text=Summer+Breeze'
    }
];

const Home = () => {
    return (
        <div className="p-6 bg-gray-100 min-h-screen">
            <h1 className="text-3xl font-bold text-center mb-8">Featured Perfumes</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {products.map(product => (
                    <ProductCard
                        key={product.id}
                        id={product.id}
                        name={product.name}
                        price={product.price}
                        image={product.image}
                    />
                ))}
            </div>
        </div>
    );
};

export default Home;
