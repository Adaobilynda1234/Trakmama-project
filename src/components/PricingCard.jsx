import React from 'react';
// import './styles/global.css'; // Import your global CSS file
import { Link } from 'react-router-dom';

const PricingCard = ({ plan, features, price, imageSrc }) => {
    return (
        <div className="border-2 border-pink-300 rounded-lg p-4 text-center shadow-md m-2 w-72 h-auto flex flex-col justify-between">
            <div className="flex justify-center items-center mb-4 example-text" style={{ minHeight: '150px' }}>
                <img src={imageSrc}
                 alt={`${plan} plan`}
                 className="w-32 h-32 object-cover mb-4" // Adjust width (w-32) and height (h-32) as needed
                 style={{ maxWidth: '100%', maxHeight: '100%' }} // Ensure image fits within container 
                 />
            </div>
            <hr className={`border-pink-300 ${plan === 'BASIC' ? 'mt-1 mb-3' : 'my-4'}`} style={{ width: '100%' }} /> {/* Set width to 75% and center it */}
            <h3 className="text-lg font-bold mb-2 example-text">{plan}</h3>
            <ul className="text-sm mb-4 example-text">
                {features.map((feature, index) => (
                    <li key={index}>{feature}</li>
                ))}
            </ul>
            <Link to="/signup">
                <button 
                    className="bg-pink-500 hover:bg-pink-400 text-white font-bold py-2 px-4 rounded example-text hover:shadow-lg hover:shadow-pink-300"
                    style={{
                        color: '#B252AA',
                        textShadow: '#F9D9F4',
                        borderColor: '#389346',
                        border: '2px solid #7EB97D',
                        backgroundColor: '#D8EAD8'
                    }}
                >
                    {price === 'FREE' ? price : `$ ${price}`}
                </button>
            </Link>
        </div>
    );
};

export default PricingCard;
