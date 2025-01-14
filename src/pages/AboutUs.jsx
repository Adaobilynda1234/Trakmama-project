import React from "react";
import Whatwevalue from "../components/Whatwevalue";
import Disclaimer from "../components/Disclaimer";
import MissionOfficial from "../components/MissionOfficial";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const AboutUs = () => {
  return (
    <div>
      <Navbar />
      <br />
      <MissionOfficial />
      <Whatwevalue />
      <br />
      <Disclaimer />
      <Footer />
    </div>
  );
};
export default AboutUs;
