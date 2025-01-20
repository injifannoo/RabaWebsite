import React from 'react';
import Navbar from '../Navbar'; // Adjust the path if necessary

const VideoEditing = () => {
  return (
    <>
      <Navbar />
      <div className="px-4 py-8 max-w-7xl mx-auto">
        {/* Header Section */}
        <header className="text-center mb-12 mt-20">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Video Editing</h1>
          <p className="text-lg text-gray-600">
            At Raba Technologies, we craft compelling video content that tells your story, captivates your audience, and delivers your message effectively.
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 ml-10">
          <section className="bg-slate-100 mb-12">
            <div className="text-gray-600 mb-4 ml-4">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Focus</h2>
          <p className="text-gray-600">
            Creating engaging videos that blend creativity with technical precision to enhance your brand and communication.
          </p>
          </div>
        </section>

        <section className="bg-slate-100 mb-12">
            <div className="text-gray-600 mb-4 ml-4">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Involves</h2>
          <div className="mb-6">
            <h3 className="text-xl font-medium text-gray-800">Video Editing</h3>
            <p className="text-gray-600">
              Cutting, arranging, and refining video footage to create polished, professional content.
            </p>
          </div>

          <div className="mb-6">
            <h3 className="text-xl font-medium text-gray-800">Motion Graphics</h3>
            <p className="text-gray-600">
              Adding dynamic animations, titles, and visual effects to enhance storytelling.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-medium text-gray-800">Audio Enhancement</h3>
            <p className="text-gray-600">
              Optimizing audio quality with effects, transitions, and background music for immersive experiences.
            </p>
          </div>
          </div>
        </section>
        </div>

        <section className="text-center">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Get Started Today</h2>
          <p className="text-lg text-gray-600 mb-4">
            Let us transform your vision into visually stunning video content that resonates with your audience.
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

export default VideoEditing;
