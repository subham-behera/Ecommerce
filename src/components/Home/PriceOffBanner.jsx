import React from 'react';

function PriceOffBanner({ originalPrice, discountedPrice, message, imageUrl }) {
    return (
        <div className="relative bg-blue-600 text-white rounded-lg overflow-hidden shadow-lg">
            <img
                src={imageUrl}
                alt="Price Off"
                className="absolute inset-0 w-full h-full object-cover opacity-30"
            />
            <div className="relative p-8 text-center">
                <h2 className="text-3xl font-bold mb-4">{message}</h2>
                <div className="flex flex-col items-center mb-6">
                    <span className="text-lg font-medium line-through text-gray-300">₹{originalPrice}</span>
                    <span className="text-4xl font-extrabold text-yellow-300">₹{discountedPrice}</span>
                </div>
                <button className="bg-yellow-300 text-gray-800 px-6 py-3 rounded-lg font-semibold hover:bg-yellow-400 transition-colors duration-300">
                    Shop Now
                </button>
            </div>
        </div>
    );
}

export default PriceOffBanner;
