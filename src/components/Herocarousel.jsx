import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Groupimage from "../assets/Group 79.png";
import PregnancyImage from "../assets/Pregnancy stages-pana 1.png";

const CarouselComponent = () => {
  const slides = [
    {
      id: 1,
      image: Groupimage,
      text: "Track Your Pregnancy And Your Baby's Development Week By Week",
      subtext:
        "Discover tons of carefully selected tools curated with your pregnancy in mind",
      month: "4 MONTH",
    },
    {
      id: 2,
      image: PregnancyImage,
      text: "Track Your Pregnancy And Your Baby's Development Week By Week",
      subtext:
        "Discover tons of carefully selected tools curated with your pregnancy in mind",
      month: "4 MONTH",
    },
    {
      id: 3,
      image: PregnancyImage,
      text: "Track Your Pregnancy And Your Baby's Development Week By Week",
      subtext:
        "Discover tons of carefully selected tools curated with your pregnancy in mind",
      month: "4 MONTH",
    },
  ];

  return (
    <div className="bg-[#F9D9F4]">
      <div className="w-full max-w-3xl bg-[#F9D9F4] mx-auto ">
        {/* flex container */}
        <Carousel showThumbs={false} showStatus={false} infiniteLoop autoPlay>
          {slides.map((slide) => (
            <div
              key={slide.id}
              className=" p-8 rounded-lg  md:flex justify-between md:align-center text-left"
            >
              <div className="md:w-1/2 w-full">
                <h2 className="text-2xl font-bold mb-2 ">{slide.text}</h2>
                <p className="mb-8 mt-4 ">{slide.subtext}</p>

                <button className="bg-[#7EB97D] flex justify-center mt-4 md:mt-8 mb-8 md:mb-2 text-white py-2 px-4 ml-8 rounded">
                  Learn More
                </button>
              </div>
              {/* second flex */}
              <div className="md:w-1/2 w-full">
                <img src={slide.image} alt="Baby" className="h-auto w-auto" />
                <span className="ml-4 text-2xl text-[#F9D9F4]">
                  {slide.month}
                </span>
              </div>
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default CarouselComponent;
