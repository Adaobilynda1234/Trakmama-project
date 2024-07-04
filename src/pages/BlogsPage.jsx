import React from "react";
import BlogNav from "../components/BlogNav";
import Navbar from "../components/Navbar";
import BlogHero from "../components/BlogHero";
import BlogSamples from "../components/BlogSamples";
import AboutTrakmama from "../components/AboutTrakmama";
import Footer from "../components/Footer";

export const Blogs = () => {
  return (
    <div>
      <h1 className="text-center">
        <Navbar />
        <BlogNav />
        <BlogHero />
        <BlogSamples />
        <AboutTrakmama />
        <Footer />
      </h1>
    </div>
  );
};
