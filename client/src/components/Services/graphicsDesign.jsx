import React from 'react';
import Navbar from '../Navbar'; // Adjust the path if necessary
import { FaCheckCircle } from 'react-icons/fa'; // Importing an icon library

const GraphicDesign = () => {
  // const listItem = (text) => (
  //   <div className="flex items-start mb-2">
  //     <FaCheckCircle className="text-blue-500 mt-1 mr-2" />
  //     <span>{text}</span>
  //   </div>
  // );
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
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Graphic Design</h1>
          <p className="text-lg text-gray-600">
            At Raba Technologies, we bring your vision to life through stunning visuals that capture your brand’s essence and connect with your audience.
          </p>
        </header>
        <div className="bg-slate-100 text-gray-600 mb-12 ml-10">
          <h2 className="text-2xl text-center font-semibold text-gray-800 mb-4">Focus</h2>
          <p className="text-gray-600">
            Creating visually striking and impactful designs that communicate your message effectively and leave a lasting impression.
          </p>
        </div>
        <h2 className="text-2xl text-center font-semibold text-gray-800 mb-10 mt-4">Involves</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 ml-10">
          {/* Services Section */}
          <section className="bg-slate-100 mb-12">
            <div className="text-gray-600 mb-4 ml-4">

              {/* Brand Identity */}
              <div className="mb-6">
                <h3 className="text-xl font-medium text-gray-800">Brand Identity</h3>
                <p className="text-gray-600 mb-2">
                  Define your unique visual style with custom branding solutions.
                </p>
                {listItem("Logo Design")}
                {listItem("Brand Identity Design")}
                {listItem("Custom Typography")}
              </div>
            </div>
          </section>

          {/* Marketing Materials */}
          <section className="bg-slate-100 mb-12">
            <div className="text-gray-600 mb-4 ml-4">

              <div className="mb-6">
                <h3 className="text-xl font-medium text-gray-800">Marketing Materials</h3>
                <p className="text-gray-600 mb-2">
                  Engage your audience with eye-catching promotional assets.
                </p>
                {listItem("Brochure Design")}
                {listItem("Flyer Design")}
                {listItem("Banner Design")}
                {listItem("Social Media Graphics")}
                {listItem("Advertisement Design")}
                {listItem("Catalog Design")}
              </div>
            </div>
          </section>

          {/* Digital and Web Design */}
          <section className="bg-slate-100 mb-12">
            <div className="text-gray-600 mb-4 ml-4">

              <div className="mb-6">
                <h3 className="text-xl font-medium text-gray-800">Digital and Web Design</h3>
                <p className="text-gray-600 mb-2">
                  Enhance user experiences and improve interaction online.
                </p>
                {listItem("UI/UX Design")}
                {listItem("Motion Graphics")}
                {listItem("Infographic Design")}
                {listItem("Ebook and Magazine Design")}
                {listItem("Presentation Design")}
              </div>
            </div>
          </section>

          {/* Packaging and Print */}
          <section className="bg-slate-100 mb-12">
            <div className="text-gray-600 mb-4 ml-4">

              <div className="mb-6">
                <h3 className="text-xl font-medium text-gray-800">Packaging and Print</h3>
                <p className="text-gray-600 mb-2">
                  Deliver professional and appealing physical designs.
                </p>
                {listItem("Packaging Design")}
                {listItem("Business Card Design")}
                {listItem("Poster Design")}
                {listItem("Print Collateral Design")}
              </div>
            </div>
          </section>
        </div>
        {/* Advanced Services */}
        <section className="bg-slate-100 py-8 text-center">
          <div className="text-gray-600 max-w-3xl mx-auto">
            <h3 className="text-xl font-medium text-gray-800 mb-4">Advanced Services</h3>
            <p className="text-gray-600 mb-6">
              Specialized solutions for unique business needs.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 items-center justify-center">
              {listItem("3D Design and Rendering")}
              {listItem("Photo Editing and Retouching")}
              {listItem("Illustration Services")}
            </div>
          </div>
        </section>

        {/* Call-to-Action */}
        <section className="text-center">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Get Started Today</h2>
          <p className="text-lg text-gray-600 mb-4">
            Partner with us for designs that inspire and elevate your brand's visual impact.
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

export default GraphicDesign;
