import React from "react";

const Disclaimer = () => {
  return (
    <div className="w-full min-h-[200px] flex items-center justify-center">
      <div className="container mx-auto px-4 py-8 max-w-3xl">
        <h3 className="text-xl md:text-2xl font-medium text-black font-sans text-center mb-4">
          Disclaimer
        </h3>

        <p className="text-base md:text-lg text-gray-600 font-sans text-center leading-relaxed">
          The AI-generated advice and suggestions are intended to complement,
          not replace, the relationship between a patient and their healthcare
          provider. Always consult with a qualified healthcare professional
          regarding any medical concerns. For more information, see our{" "}
          <a
            href="/"
            className="text-black underline hover:text-gray-700 transition-colors"
          >
            Terms of Use
          </a>
          .
        </p>
      </div>
    </div>
  );
};

export default Disclaimer;
