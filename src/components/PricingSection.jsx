import React from 'react';
import PricingCard from './PricingCard';
import cardImage from '../assets/card.png';
import shopImage from '../assets/shop.png';
import phoneImage from '../assets/phone.png';


const PricingSection = () => {
    const plans = [
        {
            plan: 'BASIC',
            features: ['Free resources personalized tracker', 'Customized Dashboard'],
            price: 'FREE',
            imageSrc: cardImage,
        },
        {
            plan: 'STANDARD',
            features: ['Access to AI Telemedicine', 'Access to Community', 'Personalized Tracker', 'Free resources'],
            price: '1',
            imageSrc: shopImage,
        },
        {
            plan: 'PREMIUM',
            features: ['Access to AI Telemedicine', 'Access to Community', 'Access to create community', 'Personalized tracker', 'Free resources'],
            price: '2',
            imageSrc: phoneImage,
        }
    ];

    return (
        <div className="flex flex-wrap justify-center">
            {plans.map((plan, index) => (
                <PricingCard 
                    key={index} 
                    plan={plan.plan}
                    features={plan.features} 
                    price={plan.price} 
                    imageSrc={plan.imageSrc}
                />
            ))}
        </div>
    );
};

export default PricingSection;
