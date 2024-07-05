import React from "react";
import expect from "../assets/blogassets/expect.png";
import fashion from "../assets/blogassets/fashion.png";
import twinsigns from "../assets/blogassets/twinsigns.png";
import readbutton from "../assets/blogassets/readbutton.png";
import dad from "../assets/blogassets/dad.png";
import youtube from "../assets/blogassets/youtube.png";
import community from "../assets/blogassets/community.png";
import nutrition from "../assets/blogassets/nutrition.png";
import bookheart from "../assets/blogassets/bookheart.png";

function BlogSamples() {
  return (
    <div>
      <div className="grid bg-[#F6FFF5] w-3/4 mt-5 mx-auto grid-cols-2 grid-rows-2 gap-x-10 gap-y-5 p-5 rounded-lg">
        <div className="row-span-2 relative h-full bg-white p-2 rounded-lg">
          <img
            src={expect}
            alt=""
            className="
          h-full object-cover rounded-lg"
          />
          <button className="absolute right-5 top-5">
            <img src={readbutton} alt="" />
          </button>
          <div className="absolute bottom-3 left-5 w-4/5 text-left">
            <p className="text-white font-lg font-mono">Pregnancy</p>
            <h2 className="capitalize font-serif text-3xl text-white">
              What to expect when you're expecting
            </h2>
          </div>
        </div>
        <div className="relative h-1/2">
          <img src={fashion} alt="" />
          <button className="absolute right-12 top-3">
            <img src={readbutton} alt="" />
          </button>
          <div className="absolute bottom-1 left-2 w-4/5 text-left">
            <p className="text-white font-lg font-mono">Fashion</p>
            <h2 className="capitalize font-serif text-3xl text-white">
              Maternity Dos and Donts
            </h2>
          </div>
        </div>
        <div className="relative h-fit">
          <img src={twinsigns} alt="" />
          <button className="absolute right-12 top-3">
            <img src={readbutton} alt="" />
          </button>
          <div className="absolute bottom-1 left-2 w-4/5 text-left">
            <p className="text-white font-lg font-mono">
              Development and Milestones
            </p>
            <h2 className="capitalize font-serif text-3xl text-white">
              Signs you are having twins
            </h2>
          </div>
        </div>
      </div>
      <div className="bg-[#B252AA] w-4/5 mx-auto p-5 rounded-lg my-10">
        <p className="text-3xl text-center text-white ">
          Click Here To Download Our Pregnancy Pamphlets and Brochures
        </p>
        <button className="m-2 bg-transparent border w-32 border-white px-7 py-2 font-mono text-white rounded-lg">
          Download
        </button>
      </div>

      <div className="relative w-4/5 mx-auto my-20 h-full">
        <img src={dad} alt="" className="" />
        <div className="absolute bottom-7 left-3 w-4/5 text-left">
          <p className="text-white font-lg font-mono">Video</p>
          <h2 className="capitalize font-serif text-3xl w-2/3 text-white">
            'I am pregnant!' Find out how this dad reacted
          </h2>
        </div>
        <button>
          <img
            src={youtube}
            alt=""
            className="absolute top-1/2 left-1/2 mb-20"
          />
        </button>
      </div>

      <div className="grid bg-[#F6FFF5] w-3/4 mt-5 mx-auto grid-cols-2 grid-rows-2 gap-x-10 gap-y-5 p-5 rounded-lg">
        <div className="row-span-2 relative h-full bg-white p-3">
          <img
            src={community}
            alt=""
            className="
          h-full object-cover rounded-lg"
          />
          <button className="absolute right-5 top-5">
            <img src={readbutton} alt="" />
          </button>
          <div className="absolute bottom-5 left-5 w-4/5 text-left">
            <p className="text-white font-lg font-mono">Community</p>
            <h2 className="capitalize font-serif text-3xl text-white">
              How to create your own community on Trakmama
            </h2>
          </div>
        </div>
        <div className="relative h-fit">
          <img src={nutrition} alt="" />
          <button className="absolute right-12 top-3">
            <img src={readbutton} alt="" />
          </button>
          <div className="absolute bottom-1 left-2 w-4/5 text-left">
            <p className="text-white font-lg font-mono">Nutrition</p>
            <h2 className="capitalize font-serif text-3xl text-white">
              Nutrition Dos and Donts duing pregnancy
            </h2>
          </div>
        </div>
        <div className="relative h-fit">
          <img src={twinsigns} alt="" />
          <button className="absolute right-12 top-3">
            <img src={readbutton} alt="" />
          </button>
          <div className="absolute bottom-1 left-2 w-4/5 text-left">
            <p className="text-white font-lg font-mono">
              Development and Milestones
            </p>
            <h2 className="capitalize font-serif text-3xl text-white">
              Signs you are having twins
            </h2>
          </div>
        </div>
      </div>

      <button className="bg-[#B252AA] py-1 px-3 rounded-lg my-5 -mr-64 text-white">
        <img src={bookheart} alt="" className="inline mr-2" />
        Read more
      </button>
    </div>
  );
}

export default BlogSamples;
