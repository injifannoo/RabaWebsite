import React, { useState } from "react";

const TestimonialCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: "John Doe",
      image: "https://via.placeholder.com/150", // Replace with the actual image link
      text: "I have Love the services Raba Provides. It is great and I thoroughly enjoyed it",
    },
    {
      id: 2,
      name: "Jane Smith",
      image: "https://via.placeholder.com/150",
      text: "The services were exceptional. I would definitely recommend them!",
    },
    {
      id: 3,
      name: "Alex Johnson",
      image: "https://via.placeholder.com/150",
      text: "Amazing experience with their services. Highly satisfied!   Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, molestiae!   Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, molestiae!",
    },
  ];


  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className=" bg-white w-full flex flex-col items-center rounded-lg py-4">
      <div className="flex flex-col justify-center items-center my-10">
        <h2 className="text-center text-3xl font-bold text-black mb-12">Testimonies</h2>
        <div className="line"></div>
      </div>

      <div className="flex items-center justify-center space-x-4  max-w-[1200px] md:gap-14 m-auto px-3 my-10">
        <button
          onClick={handlePrev}
          className="text-black hover:text-gray-800 font-extrabold text-3xl"
        >
          ❮
        </button>
        <div className="flex flex-row items-center ">
          <img
            src={testimonials[currentIndex].image}
            alt={testimonials[currentIndex].name}
            className=" rounded-full mx-5"
          />
          <p className="text-center text-gray-700 mx-4 flex flex-wrap text-xl font-sans">
            {testimonials[currentIndex].text}
          </p>
        </div>
        <button
          onClick={handleNext}
          className="text-black font-extrabold text-3xl hover:text-gray-800"
        >
          ❯
        </button>
      </div>
      <div className="flex mt-4 space-x-2">
        {testimonials.map((_, index) => (
          <span
            key={index}
            className={`h-2 w-2 rounded-full ${currentIndex === index ? "bg-gray-800" : "bg-gray-300"
              }`}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default TestimonialCarousel;