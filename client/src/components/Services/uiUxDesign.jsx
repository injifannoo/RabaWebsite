import React from 'react';
import Navbar from '../Navbar'; // Adjust the path if necessary
import { FaCheckCircle } from 'react-icons/fa'; // Importing icon library

const UIUXDesign = () => {
  // List item function with hover effect
  const listItem = (text) => (
    <div className="flex items-center mb-4 hover:shadow-md p-2 rounded transition">
      <FaCheckCircle className="text-blue-500 mr-2" />
      <span>{text}</span>
    </div>
  );

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
        
        {/* Focus Section */}
        <div className="bg-slate-100 text-gray-600 mb-12 ml-10">
          <h2 className="text-2xl text-center font-semibold text-gray-800 mb-4">Focus</h2>
          <p className="text-gray-600">
            Designing digital experiences that are not only visually captivating but also user-friendly, ensuring a smooth and enjoyable journey for your users.
          </p>
        </div>

        {/* Services Section */}
        <h2 className="text-2xl text-center font-semibold text-gray-800 mb-10 mt-4">Services We Offer</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 ml-10 gap-8">
          {/* User Interface (UI) Design */}
          <section className="bg-slate-100 mb-12 p-4 rounded shadow-md">
            <div className="text-gray-600 mb-4">
              <h3 className="text-xl font-medium text-gray-800 mb-4">User Interface (UI) Design</h3>
              <p className="text-gray-600 mb-2">
                Creating aesthetically pleasing and functional layouts, buttons, and navigation elements to enhance visual appeal and usability.
              </p>
              {listItem("Custom UI Elements")}
              {listItem("Responsive Layouts")}
              {listItem("Interactive Components")}
            </div>
          </section>

          {/* User Experience (UX) Design */}
          <section className="bg-slate-100 mb-12 p-4 rounded shadow-md">
            <div className="text-gray-600 mb-4">
              <h3 className="text-xl font-medium text-gray-800 mb-4">User Experience (UX) Design</h3>
              <p className="text-gray-600 mb-2">
                Analyzing user behavior, understanding their needs, and designing intuitive flows and interactions that provide a seamless experience.
              </p>
              {listItem("User Research")}
              {listItem("User Personas")}
              {listItem("Journey Mapping")}
            </div>
          </section>

          {/* Prototyping and Wireframing */}
          <section className="bg-slate-100 mb-12 p-4 rounded shadow-md">
            <div className="text-gray-600 mb-4">
              <h3 className="text-xl font-medium text-gray-800 mb-4">Prototyping and Wireframing</h3>
              <p className="text-gray-600 mb-2">
                Building interactive prototypes and wireframes to visualize the structure and functionality before development.
              </p>
              {listItem("Interactive Prototypes")}
              {listItem("Wireframe Design")}
              {listItem("Usability Testing")}
            </div>
          </section>

          {/* Usability Testing */}
          <section className="bg-slate-100 mb-12 p-4 rounded shadow-md">
            <div className="text-gray-600 mb-4">
              <h3 className="text-xl font-medium text-gray-800 mb-4">Usability Testing</h3>
              <p className="text-gray-600 mb-2">
                Continuously testing designs to ensure they meet user needs and provide an intuitive, frustration-free experience.
              </p>
              {listItem("User Feedback")}
              {listItem("A/B Testing")}
              {listItem("Task Completion Analysis")}
            </div>
          </section>
        </div>

        {/* Call to Action */}
        <section className="text-center mt-10">
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
