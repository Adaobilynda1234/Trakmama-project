import React from "react";

const WhatWeValue = () => {
  const values = [
    {
      title: "Empathy",
      description:
        "We are committed to providing compassionate and supportive resources.",
    },
    {
      title: "Community",
      description:
        "We foster a great sense of community connecting expectant mother with the like minds.",
    },
    {
      title: "Innovation",
      description:
        "We leverage A.I to deliver advanced and personalized insights.",
    },
    {
      title: "Trust",
      description:
        "We prioritize user privacy and data security ensuring users information are protected.",
    },
    {
      title: "Inclusivity",
      description:
        "We offer resources and support catering to diverse needs of expectant mothers.",
    },
  ];

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-3xl md:text-4xl text-center font-serif mb-12">
        What We Value
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center">
        {values.map((value, index) => (
          <div
            key={index}
            className="border-2 border-[#d4e7d3] rounded-lg p-6 md:p-8 
                       w-full max-w-sm h-full
                       flex flex-col items-center
                       transition-transform hover:scale-105
                       hover:shadow-lg"
          >
            <h3 className="text-lg md:text-xl font-medium text-black font-sans mb-4">
              {value.title}
            </h3>
            <p className="text-gray-600 text-sm md:text-base font-sans">
              {value.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WhatWeValue;
