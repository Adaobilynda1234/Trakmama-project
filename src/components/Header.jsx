import React from 'react';
// import './styles/global.css'; // Import your global CSS file

const Header = () => {
    return (
        <div className="bg-green-900 text-white text-center p-6 md:p-12 mx-auto max-w-4xl mt-4 md:mt-8"
             style={{ backgroundColor: 'rgba(9, 69, 19, 0.8)', paddingBottom: '1.3rem' }} >
            <h1 className="text-2xl md:text-4xl mb-4">Empower Your Pregnancy Journey<pre/> With Our A.I Companion.</h1>
            <button className="bg-green-800 hover:bg-green-700 text-white font-bold py-2 px-4 md:py-4 md:px-8 rounded example-text"
                    style={{ backgroundColor: '#7EB97D', padding: '10px 20px', width:'200px' }}>
                Start Free Trial
            </button>
        </div>
    );
};

export default Header;
