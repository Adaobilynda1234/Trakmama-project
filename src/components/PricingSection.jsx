import React from 'react';
import PricingCard from './PricingCard';

const PricingSection = () => {
    const plans = [
        {
            plan: 'BASIC',
            features: ['Free resources personalized tracker', 'Customized Dashboard'],
            price: 'FREE'
        },
        {
            plan: 'STANDARD',
            features: ['Access to AI Telemedicine', 'Access to Community', 'Personalized Tracker', 'Free resources'],
            price: '900'
        },
        {
            plan: 'PREMIUM',
            features: ['Access to AI Telemedicine', 'Access to Community', 'Access to create community', 'Personalized tracker', 'Free resources'],
            price: '1200'
        }
    ];

    return (
        <div className="flex justify-center flex-wrap">
            {plans.map((plan, index) => (
                <PricingCard key={index} plan={plan.plan} features={plan.features} price={plan.price} />
            ))}
        </div>
    );
};

export default PricingSection;
