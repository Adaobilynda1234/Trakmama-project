// PricingCards.jsx
import React from 'react';

const PricingCard = ({ plan, features, price }) => {
    return (
        <div className="border-2 border-pink-300 rounded-lg p-4 text-center shadow-md m-2">
            <h3 className="text-lg font-bold mb-2">{plan}</h3>
            <ul className="text-sm mb-4">
                {features.map((feature, index) => (
                    <li key={index}>{feature}</li>
                ))}
            </ul>
            <button className="bg-pink-500 hover:bg-pink-400 text-white font-bold py-2 px-4 rounded">
                {price === 'FREE' ? price : `₦ ${price}`}
            </button>
        </div>
    );
};

export default PricingCard;
