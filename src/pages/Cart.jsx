import React from 'react';

const Cart = () => {
    return (
        <div className="p-6 bg-gray-100 min-h-screen">
            <h1 className="text-3xl font-bold mb-6 text-center">Your Cart</h1>
            <div className="max-w-2xl mx-auto bg-white p-6 rounded-lg shadow-md">
                {/* Example Cart Item */}
                <div className="flex justify-between items-center border-b py-4">
                    <div>
                        <h2 className="font-bold">Elegant Rose</h2>
                        <p className="text-gray-600">Quantity: 1</p>
                    </div>
                    <p className="font-semibold">$50.00</p>
                </div>
                <div className="flex justify-between items-center mt-6">
                    <p className="text-xl font-bold">Total</p>
                    <p className="text-xl font-bold">$50.00</p>
                </div>
                <button className="w-full mt-6 bg-purple-500 hover:bg-purple-600 text-white py-2 rounded transition">
                    Checkout
                </button>
            </div>
        </div>
    );
};

export default Cart;
