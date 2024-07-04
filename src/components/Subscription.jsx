import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckSquare } from '@fortawesome/free-solid-svg-icons';

const SubSection = () => {
  const navigate = useNavigate();

  const handleGetStarted = (plan) => {
    navigate('/checkout', { state: { plan } });
  };

  return (
    <section className="bg-[#EDF8EC] mx-8 py-16">
      <div className="container mx-auto text-center">
        <button className="bg-deep-pink text-white px-8 py-2 rounded-sm mb-6">Get Access</button>
        <h2 className="text-3xl font-semibold mb-4">Choose The Perfect Plan For Your Pregnancy Journey</h2>
        <p className="mb-12 text-[#131E12]">
          Experience all the benefits from our features starting at just ₦900 naira. From your three months trial plan, upgrade to the plan that suits your needs and make your pregnancy journey seamless.
        </p>

        <div className="flex flex-col md:flex-row justify-center gap-8">
          <div className="bg-white shadow-lg rounded-[64px] p-6 flex-1 max-w-sm mx-auto">
            <h3 className="text-xl font-semibold my-4 ">Free Plan</h3>
            <p className="text-lg font-bold mb-4">$ 0</p>
            <button className="bg-deep-pink text-white px-6 py-2 rounded-sm mb-8" onClick={() => handleGetStarted('Free Plan')}>Get Started</button>
            <ul className="flex flex-col items-center">
              <li className="mb-4 flex text-center items-center">
              <FontAwesomeIcon icon={faCheckSquare} className="text-deep-pink" />
                <span className="ml-2">Free resources</span>
              </li>
              <li className="mb-4 flex items-center">
              <FontAwesomeIcon icon={faCheckSquare} className="text-deep-pink" />
                <span className="ml-2">Personalised Tracker</span>
              </li>
              <li className="mb-4 flex items-center">
              <FontAwesomeIcon icon={faCheckSquare} className="text-deep-pink" />
                <span className="ml-2">Customized Dashboard</span>
              </li>
            </ul>
          </div>

          <div className="bg-white shadow-lg rounded-[64px] p-6 flex-1 max-w-sm mx-auto">
            <h3 className="text-xl font-semibold my-4">Premium Plan</h3>
            <p className="text-lg font-bold mb-4">$ 1200</p>
            <button className="bg-deep-pink text-white px-6 py-2 rounded-sm mb-8" onClick={() => handleGetStarted('Premium Plan')}>Get Started</button>
            <ul className="flex flex-col items-center">
              <li className="mb-4 flex items-center">
              <FontAwesomeIcon icon={faCheckSquare} className="text-deep-pink" />
                <span className="ml-2">Free resources</span>
              </li>
              <li className="mb-4 flex items-center">
              <FontAwesomeIcon icon={faCheckSquare} className="text-deep-pink" />
                <span className="ml-2">Personalised Tracker</span>
              </li>
              <li className="mb-4 flex items-center">
              <FontAwesomeIcon icon={faCheckSquare} className="text-deep-pink" />
                <span className="ml-2">Customized Dashboard</span>
              </li>
              <li className="mb-4 flex items-center">
              <FontAwesomeIcon icon={faCheckSquare} className="text-deep-pink" />
                <span className="ml-2">Access to A.I Telemedicine</span>
              </li>
              <li className="mb-4 flex items-center">
              <FontAwesomeIcon icon={faCheckSquare} className="text-deep-pink" />
                <span className="ml-2">Access to Community</span>
              </li>
              <li className="mb-4 flex items-center">
              <FontAwesomeIcon icon={faCheckSquare} className="text-deep-pink" />
                <span className="ml-2">Access to create Community</span>
              </li>
            </ul>
          </div>

          <div className="bg-white shadow-lg rounded-[64px] p-6 flex-1 max-w-sm mx-auto">
            <h3 className="text-xl font-semibold my-4">Standard Plan</h3>
            <p className="text-lg font-bold mb-4">$ 900</p>
            <button className="bg-deep-pink text-white px-6 py-2 rounded-sm mb-8" onClick={() => handleGetStarted('Standard Plan')}>Get Started</button>
            <ul className="flex flex-col items-center">
              <li className="mb-4 flex items-center">
              <FontAwesomeIcon icon={faCheckSquare} className="text-deep-pink" />
                <span className="ml-2">Free resources</span>
              </li>
              <li className="mb-4 flex items-center">
              <FontAwesomeIcon icon={faCheckSquare} className="text-deep-pink" />
                <span className="ml-2">Personalised Tracker</span>
              </li>
              <li className="mb-4 flex items-center">
              <FontAwesomeIcon icon={faCheckSquare} className="text-deep-pink" />
                <span className="ml-2">Customized Dashboard</span>
              </li>
              <li className="mb-4 flex items-center">
              <FontAwesomeIcon icon={faCheckSquare} className="text-deep-pink" />
                <span className="ml-2">Access to A.I Telemedicine</span>
              </li>
              <li className="mb-4 flex items-center">
              <FontAwesomeIcon icon={faCheckSquare} className="text-deep-pink" />
                <span className="ml-2">Access to Community</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SubSection;
