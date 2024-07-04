import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { PaystackButton } from 'react-paystack';
import { faCheckSquare } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useLocation, useNavigate } from 'react-router-dom';

const PaymentForm = () => {
  const publicKey = "pk_test_8fc2ff185ded73c4a8f893871932ab1ca048b755"; 
  const planCode = 'PLN_v1zuf2xlcmh7mme'; 
  const location = useLocation();
  const navigate = useNavigate();
  const { state } = location

  useEffect(() => {
    if (!state || !state.plan) {
      navigate('/');
    }
  }, [state, navigate]);

  if (!state || !state.plan) {
    return null; 
  }

  const { plan } = state;
  const amount = plan === 'Premium Plan' ? 1200 * 100 : plan === 'Standard Plan' ? 900 * 100 : 0;
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [discountCode, setDiscountCode] = useState('');

  const onSuccess = async (reference) => {
    console.log(reference);

    try {
      const { data: { data: customerData } } = await axios.post('http://localhost:3001/create-customer', {
        email,
      });

      console.log('Customer creation response:', customerData);

      const { data: { data: subscriptionData } } = await axios.post('http://localhost:3001/create-subscription', {
        customer_code: customerData.customer_code,
        plan_code: planCode,
      });

      console.log('Subscription creation response:', subscriptionData);
    } catch (error) {
      console.error('Subscription error:', error);
    }
  };

  const onClose = () => {
    console.log('Payment closed');
    // Handle payment closure here
  };

  const componentProps = {
    email,
    amount,
    metadata: {
      name,
      phone,
    },
    publicKey,
    text: "Pay now",
    onSuccess: (reference) => onSuccess(reference),
    onClose,
    currency: 'NGN', // Specify currency
    channels: ['card', 'bank'], 
    reference: (new Date()).getTime().toString(), // Unique reference for the transaction
    plan: planCode, // Pass the subscription plan code
  };

  const features = [
    "Free resources",
    "Personalised Tracker",
    "Customized Dashboard",
    "Access to A.I Telemedicine",
    "Access to Community",
    "Access to create Community"
  ];

  return (
    <section className="bg-tools-bg py-16">
      <div className='flex md:flex-start md:items-center'>
        <img src='./images/logo.png' alt='Logo' className='my-8 w-10 ml-20'/>
        <span className="ml-2 my-8 text-2xl font-normal">Trakmama</span>
      </div>
      <div className="container mx-auto flex flex-col md:flex-row gap-8">
        <div className="flex-1">
          <h2 className="text-3xl font-semibold mb-6 bg-white rounded-full py-8 text-center">Check Out</h2>
          <div className="flex items-center justify-center mb-6">
            <div className="hidden md:block md:w-1/2">
              <img src="./images/Wallet.png" alt="Premium Plan" className="mx-auto md:mr-8" />
            </div>
            <div className="hidden  md:flex flex-col bg-white px-4 py-8 rounded-[64px] items-center">
              <h3 className="text-xl font-semibold mb-4 text-center">{plan}</h3>
              <p className="text-lg font-bold mb-4 text-center">${amount / 100}</p>
              <button className="bg-deep-pink text-white px-6 py-2 rounded-md mb-4 block mx-auto">Get Started</button>
              <ul className="flex flex-col items-center">
                {features.map((feature, index) => (
                  <li key={index} className="mb-2 flex items-center">
                    <FontAwesomeIcon icon={faCheckSquare} className="text-deep-pink" />
                    <span className="ml-2">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <div className="bg-white shadow-lg rounded-[64px] p-8 flex-1">
          <h2 className="text-3xl font-semibold mt-8 mb-6 text-center">Payment Details</h2>
          <form>
          <div className="mb-4">
              <label className="block text-gray-700 mb-2" htmlFor="name">Name</label>
              <input
                className="w-full p-2 border border-gray-300 rounded"
                type="text"
                id="name"
                name="name"
                placeholder='Name'
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 mb-2" htmlFor="email">Email address</label>
              <input
                className="w-full p-2 border border-gray-300 rounded"
                type="email"
                id="email"
                name="email"
                placeholder='Email Address'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 mb-2" htmlFor="phone">Phone</label>
              <input
                className="w-full p-2 border border-gray-300 rounded"
                type="text"
                id="phone"
                name="phone"
                placeholder='Phone Number'
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 mb-2" htmlFor="discountCode">Discount Code</label>
              <input
                className="w-full p-2 border border-gray-300 rounded"
                type="text"
                id="discountCode"
                name="discountCode"
                placeholder='Discount Code'
                value={discountCode}
                onChange={(e) => setDiscountCode(e.target.value)}
              />
            </div>
          </form>
          <PaystackButton className="paystack-button bg-button-green-light text-white py-2 px-4 rounded w-full" {...componentProps} />
        </div>
      </div>
    </section>
  );
};

export default PaymentForm;