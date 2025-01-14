import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Groupimage from "../assets/Group 79.png";
import Babyimage from "../assets/Baby birth-cuate 1.png";
import PregnancyImage from "../assets/Pregnancy stages-pana 1.png";
import { Link } from "react-router-dom";

const CarouselComponent = () => {
  const slides = [
    {
      id: 1,
      image: Babyimage,
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
      image: Groupimage,
      text: "Track Your Pregnancy And Your Baby's Development Week By Week",
      subtext:
        "Discover tons of carefully selected tools curated with your pregnancy in mind",
      month: "4 MONTH",
    },
  ];

  return (
    <div className="relative mt-5 bg-[#F9D9F4] min-h-[500px] sm:min-h-[600px] overflow-hidden">
      <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 mt-5 lg:px-8">
        <Carousel
          showThumbs={false}
          showStatus={false}
          infiniteLoop
          autoPlay
          interval={5000}
          stopOnHover
          swipeable
          emulateTouch
          preventMovementUntilSwipeScrollTolerance
          swipeScrollTolerance={50}
          className="custom-carousel"
        >
          {slides.map((slide) => (
            <div key={slide.id} className="relative py-8 sm:py-12 px-4 sm:px-6">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8">
                {/* Text Content */}
                <div className="flex-1 text-left">
                  <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4 text-gray-800 leading-tight">
                    {slide.text}
                  </h2>
                  <p className="text-sm sm:text-base text-gray-600 mb-6">
                    {slide.subtext}
                  </p>
                  <Link to="/about-us">
                    <button className="w-full sm:w-auto bg-[#7EB97D] text-white py-2 px-6 rounded-lg hover:bg-[#6ca86b] transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-[#7EB97D] focus:ring-opacity-50">
                      Learn More
                    </button>
                  </Link>
                </div>

                {/* Image Container */}
                <div className="flex-1 relative">
                  <div className="relative aspect-square md:aspect-auto">
                    <img
                      src={slide.image}
                      alt={`Slide ${slide.id}`}
                      className="w-full h-full object-contain"
                      loading="lazy"
                    />
                    <span className="absolute bottom-4 left-4 text-xl sm:text-2xl font-semibold text-[#7EB97D]">
                      {slide.month}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Carousel>
      </div>

      {/* Custom CSS to fix carousel issues */}
      <style jsx="true">{`
        .custom-carousel .carousel.carousel-slider {
          overflow: visible;
        }

        .custom-carousel .carousel .control-dots {
          bottom: -40px;
        }

        .custom-carousel .carousel .control-dots .dot {
          background: #7eb97d;
          box-shadow: none;
          width: 10px;
          height: 10px;
          margin: 0 6px;
        }

        .custom-carousel .carousel .control-arrow {
          background: rgba(0, 0, 0, 0.2);
          border-radius: 50%;
          width: 40px;
          height: 40px;
          margin: 0 20px;
          top: 50%;
          transform: translateY(-50%);
        }

        .custom-carousel .carousel .control-arrow:hover {
          background: rgba(0, 0, 0, 0.4);
        }

        @media (max-width: 768px) {
          .custom-carousel .carousel .control-arrow {
            width: 30px;
            height: 30px;
            margin: 0 10px;
          }

          .custom-carousel .carousel .control-dots .dot {
            width: 8px;
            height: 8px;
            margin: 0 4px;
          }
        }
      `}</style>
    </div>
  );
};

export default CarouselComponent;
