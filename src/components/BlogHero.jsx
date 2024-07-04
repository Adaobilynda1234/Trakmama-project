import React from "react";
import blogimg from "../assets/blogassets/bloghero.png";
import blogarrow from "../assets/blogassets/blogarrow.png";

function BlogHero() {
  return (
    <div className="flex bg-[#F9D9F4] items-center justify-between px-5 h-5/6">
      <div>
        <h1 className="text-5xl text-[#7EB97D] font-bold font-mono -mr-60">
          Always Hungry For Knowledge?
        </h1>
        <p className="mt-40 text-3xl font-bold text-[#7EB97D] font-mono -mr-48">
          Explore our blog posts
          <img src={blogarrow} alt="" className="inline ml-3" />
        </p>
      </div>
      <img src={blogimg} alt="Blog Image" className="w-3/4 " />
    </div>
  );
}

export default BlogHero;
