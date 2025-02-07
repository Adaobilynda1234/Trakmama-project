import React from "react";
import Community from "../components/Community";
import Herocarousel from "../components/Herocarousel";
import Article from "../components/articles";
import Ourtools from "../components/ourtools";
import Review from "../components/Review";
import Header from "../components/Header";
import PricingSection from "../components/PricingSection";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import AboutTrakmama from "../components/AboutTrakmama";
import WhyChooseUs from "../components/whychooseus";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Herocarousel />
      <WhyChooseUs />
      <Article />
      <Ourtools />
      <h1 className="text-center">this is home page</h1>
      <Review />
      <Header />
      <div>
        <br />
        <br />
        <h5
          style={{
            margin: "0 auto",
            textAlign: "center",
            fontWeight: "bold",
            fontSize: "23px",
          }}
          className="example-text"
        >
          Pricing/Payment Plan
        </h5>
        <br />
      </div>
      <PricingSection />
      <Community />
      <AboutTrakmama />
      <Footer />
    </div>
  );
};

export default Home;
