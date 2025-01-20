import React from 'react';
import Navbar from '../Navbar'; // Adjust the path if necessary

const GraphicDesign = () => {
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

        <div className="grid grid-cols-1 md:grid-rows-2 ml-10">
          <div className="bg-slate-100 text-gray-600 mb-12 ml-4">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Focus</h2>
            <p className="text-gray-600">
              Creating visually striking and impactful designs that communicate your message effectively and leave a lasting impression.
            </p>
          </div>

          <section className="bg-slate-100 mb-12">
            <div className="text-gray-600 mb-4 ml-4">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4 mt-4">Involves</h2>
              <div className="mb-6">
                <h3 className="text-xl font-medium text-gray-800">Brand Identity</h3>
                <p className="text-gray-600">
                  Designing logos, color palettes, and visual elements that define your unique brand image.
                </p>
              </div>

              <div className="mb-6">
                <h3 className="text-xl font-medium text-gray-800">Marketing Materials</h3>
                <p className="text-gray-600">
                  Crafting brochures, flyers, banners, and social media graphics to promote your business.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-medium text-gray-800">Illustrations and Infographics</h3>
                <p className="text-gray-600">
                  Creating custom graphics and data visuals that simplify complex information and enhance engagement.
                </p>
              </div>
            </div>
          </section>
        </div>

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
