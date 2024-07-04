import React from "react";
import { Link } from "react-router-dom";

const WhyChooseUs = () => {
  return (
    <section className="py-16 mx-16 my-8 lg:mx-16 bg-white text-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:flex lg:justify-center">
          <div className="lg:flex-shrink-0">
            <img
              className="mx-auto lg:mt-0 lg:mx-0 w-72 h-76"
              src="./images/pregnantwoman.png"
              alt="Pregnant Woman with Calendar"
            />
          </div>
          <div className="mt-8 lg:mt-0 lg:ml-8 lg:w-1/2">
            <h2 className="text-2xl font-medium">Why Choose Us</h2>
            <p className="mt-4 text-xl text-black lg:text-justify font-light">
              Ensuring a confident and positive pregnancy experience, we are
              dedicated to providing expert-backed resources, support, and
              inspiration to guide you through your journey with services like:
            </p>
            <div className="flex flex-col items-center lg:flex-row lg:items-start mt-8 space-y-8 lg:space-y-0 lg:space-x-8">
              <ul className="space-y-4 lg:text-left text-sm font-light text-black list-disc list-inside lg:list-outside lg:pl-8">
                <li>24 hours Online Consultation with experts</li>
                <li>AI Telemedicine tailored to answer all questions</li>
                <li>
                  Our Community features give room to connect and network with
                  other expectant mothers.
                </li>
              </ul>
              <div className="lg:flex-shrink-0 hidden lg:block">
                <img
                  className="mx-auto lg:mx-0 w-32 h-32 lg:mt-4"
                  src="./images/goodnews.png"
                  alt="Mother with Baby"
                />
              </div>
            </div>
            <div className="mt-8">
              <Link to="/login">
                <button className="bg-[#7EB97D] text-button-pink font-light text-sm py-2 px-4 rounded-[5px] hover:bg-opacity-80">
                  See Features
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
