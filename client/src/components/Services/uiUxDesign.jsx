import React from 'react';
import Navbar from '../Navbar'; // Adjust the path if necessary

const UIUXDesign = () => {
  return (
    <>
      <Navbar />
      <div className="px-4 py-8 max-w-7xl mx-auto">
        {/* Header Section */}
        <header className="text-center mb-12 mt-20">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">UI/UX Design</h1>
          <p className="text-lg text-gray-600">
            At Raba Technologies, we specialize in creating intuitive and visually appealing user interfaces (UI) and seamless user experiences (UX) that drive engagement and satisfaction.
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 ml-10">
         
        <section className="bg-slate-100 mb-12">
        <div className="text-gray-600 mb-4 ml-4">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Involves</h2>

          <div className="mb-6">
            <h3 className="text-xl font-medium text-gray-800">User Interface (UI) Design</h3>
            <p className="text-gray-600">
              Creating aesthetically pleasing and functional layouts, buttons, and navigation elements to enhance visual appeal and usability.
            </p>
          </div>

          <div className="mb-6">
            <h3 className="text-xl font-medium text-gray-800">User Experience (UX) Design</h3>
            <p className="text-gray-600">
              Analyzing user behavior, understanding their needs, and designing intuitive flows and interactions that provide a seamless experience.
            </p>
          </div>

          <div className="mb-6">
            <h3 className="text-xl font-medium text-gray-800">Prototyping and Wireframing</h3>
            <p className="text-gray-600">
              Building interactive prototypes and wireframes to visualize the structure and functionality before development.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-medium text-gray-800">Usability Testing</h3>
            <p className="text-gray-600">
              Continuously testing designs to ensure they meet user needs and provide an intuitive, frustration-free experience.
            </p>
          </div>
          </div>
        </section>
        <section className=" mb-12">
            <div className=" mb-4 ml-4">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Focus</h2>
          <p className="text-gray-600">
            Designing digital experiences that are not only visually captivating but also user-friendly, ensuring a smooth and enjoyable journey for your users.
          </p>
          </div>
        </section>
        </div>

        <section className="text-center">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Get Started Today</h2>
          <p className="text-lg text-gray-600 mb-4">
            Let us create user-centric designs that turn your vision into an engaging, seamless digital experience.
          </p>
          <a
            href="/contact"
            className="px-6 py-3 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
          >
            Contact Us
          </a>
        </section>
      </div>
    </>
  );
};

export default UIUXDesign;
