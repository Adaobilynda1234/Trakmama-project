import React from "react";
import aboutImage from "../assets/about-us.png";
import missionImage from "../assets/mission-pic.png";

const Mission = () => {
  return (
    <div className="font-['EB_Garamond'] min-h-screen flex items-center justify-center">
      <main className="container mx-auto px-4 py-8 flex flex-col justify-center">
        {/* About Us Section */}
        <section className="flex flex-col md:flex-row items-center justify-center gap-8 mb-10">
          <img
            src={aboutImage}
            alt="About Us"
            className="w-full md:w-1/2 rounded-lg object-cover"
          />
          <div className="w-full md:w-1/2 flex flex-col justify-center items-center">
            <h2 className="text-3xl font-bold mb-6">About Us</h2>
            <p className="text-lg leading-relaxed tracking-wide space-x-2 max-w-xl">
              We use AI technology to provide virtual healthcare services to
              pregnant woman aiming to overcome barriers and increase access to
              quality prenatal care, particularly in rural and underserved
              areas, leading to improved health outcomes, patient experience,
              and more efficient healthcare delivery.
            </p>
          </div>
        </section>

        {/* Our Mission Section */}
        <section className="flex flex-col md:flex-row items-center justify-center gap-8">
          <div className="w-full md:w-1/2 flex flex-col justify-center items-center order-2 md:order-1">
            <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
            <p className="text-lg leading-relaxed tracking-wide space-x-2 max-w-xl">
              To enhance maternal outcomes by providing tools and resources to
              help expectant and new moms maintain optimal health and identify
              potential risk early.
            </p>
          </div>
          <img
            src={missionImage}
            alt="Our Mission"
            className="w-full md:w-1/2 rounded-lg object-cover order-1 md:order-2"
          />
        </section>
      </main>
    </div>
  );
};

export default Mission;
