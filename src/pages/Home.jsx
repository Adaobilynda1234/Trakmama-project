import React from "react";
import Herocarousel from "../components/Herocarousel";
import Review from "../components/Review";
import Articles from "../components/articles";
import OurTools from "../components/ourtools";

const Home = () => {
  return (
    <div>
      <Herocarousel />
      <Articles />
      <OurTools />
      {/* <h1 className="text-center">this is home page</h1> */}
      <Review />
    </div>
  );
};

export default Home;
