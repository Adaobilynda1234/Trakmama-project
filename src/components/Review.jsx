import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Meme1 from "../assets/Memoji.png";
import Meme2 from "../assets/Memoji (2).png";
import Meme3 from "../assets/Memoji (1).png";
import Reviewimg from "../assets/Vector (4).png";

const testimonials = [
  {
    name: "Oluwatobiloba James",
    text: "Amazing content, this website made my pregnancy journey easy.",
    avatar: Meme1, // Replace with actual image path or URL
  },
  {
    name: "Chidera Ebeh",
    text: "Being able to interact and share experiences with fellow mothers is the highlight of this website.",
    avatar: Meme2, // Replace with actual image path or URL
  },
  {
    name: "Joel Smith",
    text: "The blogs and articles for prepared me for the baby. ",
    avatar: Meme3, // Replace with actual image path or URL
  },
];

const SliderComponent = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    appendDots: (dots) => (
      <div>
        <ul className="m-0 p-0 flex justify-center">{dots}</ul>
      </div>
    ),
    customPaging: (i) => (
      <div className="w-2 h-2 bg-[#53BB6A] rounded-full"></div>
    ),
    nextArrow: <div className="slick-arrow slick-next text-green-500">→</div>,
    prevArrow: <div className="slick-arrow slick-prev text-green-500">←</div>,
  };

  return (
    <div className="max-w-4xl mx-auto py-8 px-4 ">
      <img src={Reviewimg} />
      <h2 className="text-center text-3xl font-semibold mb-12 ">
        What <span className="text-[#53BB6A]"> Our Users</span> Says
      </h2>
      <Slider {...settings}>
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className="p-8 text-center flex flex-col items-center border-2 border=gray rounded-lg"
          >
            <div className="flex items-center mb-4">
              <img
                src={testimonial.avatar}
                alt={testimonial.name}
                className="rounded-full h-16 w-16 object-cover mr-4"
              />
              <p className="text-lg font-semibold">{testimonial.name}</p>
            </div>
            <p className="text-xl w-1/2 text-left italic">
              <span className="text-green-500 text-xl">"</span>
              {testimonial.text}
              <span className="text-green-500 text-xl">"</span>
            </p>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default SliderComponent;
