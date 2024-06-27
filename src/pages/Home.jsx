import React from "react";
import Herocarousel from "../components/Herocarousel";
import Article from "../components/articles";
import Ourtools from "../components/ourtools";
import Review from "../components/Review";

const Home = () => {
  return (
    <div>
      <Herocarousel />
      <Article />
      <Ourtools />
      {/* <h1 className="text-center">this is home page</h1> */}
      <Review />
    </div>
  );
};

export default Home;
