import React from "react";
import homeImag from '../../assets/images/homebg.png';
import mv from '../../assets/images/mv.jpg';
import homeImage from '../../assets/images/cover.jpg';
import rabaS from '../../assets/images/rabaS.jpg';


const AboutUs = () => {
  return (
    <div className="bg-blue-900 text-white">
      {/* Hero Section */}
      <div
        className="relative bg-cover bg-center h-[400px] flex items-center justify-center"
        style={{ backgroundImage: `url(${homeImage})` }}>
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 text-gradient bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-indigo-600 to-purple-700">
            About Us
          </h1>
          <p className="text-lg md:text-xl mb-4">
            We are Raba Technologies, committed to innovating and solving real-world challenges.
          </p>
        </div>
      </div>

      {/* Content Section with side-by-side images */}
      <div className="max-w-6xl mx-auto py-12 px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="flex flex-col items-center">
            <img
              src={rabaS} // Replace with your image URL
              alt="Our Team"
              className="w-full rounded-lg shadow-xl"
            />
            <h3 className="mt-4 text-2xl font-semibold text-blue-400">Our Team</h3>
            <p className="mt-2 text-gray-200 text-center">
              Our dedicated team works tirelessly to provide cutting-edge solutions.
            </p>
          </div>

          <div className="flex flex-col items-center">
            <img
              src={mv} // Replace with your image URL
              alt="Our Mission"
              className="w-full rounded-lg shadow-xl"
            />
            <h3 className="mt-4 text-2xl font-semibold text-blue-400">Our Mission</h3>
            <p className="mt-2 text-gray-200 text-center">
              To deliver innovative software solutions that solve business problems and improve lives.
            </p>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
          <div className="flex flex-col items-center">
            <img
              src={mv} // Replace with your image URL
              alt="Our Vision"
              className="w-full rounded-lg shadow-xl"
            />
            <h3 className="mt-4 text-2xl font-semibold text-blue-400">Our Vision</h3>
            <p className="mt-2 text-gray-200 text-center">
              To become a leading global provider of tech-driven solutions and innovations.
            </p>
          </div>

          <div className="flex flex-col items-center">
            <img
              src="https://via.placeholder.com/600x400" // Replace with your image URL
              alt="Our Values"
              className="w-full rounded-lg shadow-xl"
            />
            <h3 className="mt-4 text-2xl font-semibold text-blue-400">Our Values</h3>
            <p className="mt-2 text-gray-200 text-center">
              We prioritize integrity, innovation, and collaboration in everything we do.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
