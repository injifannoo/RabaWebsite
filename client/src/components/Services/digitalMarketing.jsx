import React from 'react';
import Navbar from '../Navbar'; // Adjust the path if necessary

const DigitalMarketing = () => {
  return (
    <>
      <Navbar />
      <div className="px-4 py-8 max-w-7xl mx-auto">
        {/* Header Section */}
        <header className="text-center mb-12 mt-20">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Digital Marketing</h1>
          <p className="text-lg text-gray-600">
            At Raba Technologies, we harness the power of digital marketing to increase your brand’s visibility, drive traffic, and convert leads into loyal customers.
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 ml-10">
          <section className="bg-slate-100 mb-8 flex items-center justify-center">
            <div className="text-gray-600 ml-4 grid-cols-2">
              <h2 className="text-2xl font-semibold text-gray-800 text-center mb-4">Focus</h2>
              <p className="text-gray-600">
                Developing and executing targeted strategies to promote your brand, products, or services online, ensuring they reach the right audience through the most effective channels.
              </p>
            </div>
          </section>

          <section className="bg-slate-100 mb-8 flex flex-col justify-center">
            <div className="text-gray-600 ml-4">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Involves</h2>
              <div className="mb-6">
                <h3 className="text-xl font-medium text-gray-800">Search Engine Optimization (SEO)</h3>
                <p className="text-gray-600">Optimizing your website content to improve its visibility on search engines and attract organic traffic.</p>
              </div>

              <div className="mb-6">
                <h3 className="text-xl font-medium text-gray-800">Social Media Marketing</h3>
                <p className="text-gray-600">Building and managing your brand’s presence across social platforms like Facebook, Instagram, Twitter, and LinkedIn to engage with your audience and drive conversions.</p>
              </div>

              <div className="mb-6">
                <h3 className="text-xl font-medium text-gray-800">Content Marketing</h3>
                <p className="text-gray-600">Creating valuable content that educates, entertains, and informs your audience, driving engagement and loyalty.</p>
              </div>

              <div className="mb-6">
                <h3 className="text-xl font-medium text-gray-800">Email Marketing</h3>
                <p className="text-gray-600">Crafting personalized email campaigns that nurture leads and maintain strong relationships with your customers.</p>
              </div>

              <div className="mb-6">
                <h3 className="text-xl font-medium text-gray-800">Pay-Per-Click (PPC) Advertising</h3>
                <p className="text-gray-600">Managing targeted paid ad campaigns on platforms like Google Ads to drive immediate traffic and leads.</p>
              </div>

              <div>
                <h3 className="text-xl font-medium text-gray-800">Analytics and Reporting</h3>
                <p className="text-gray-600">Continuously analyzing data to measure performance, optimize strategies, and ensure marketing goals are met.</p>
              </div>
            </div>
          </section>

          <section className="bg-slate-100 text-center mb-8 flex items-center justify-center">
            <div className="grid-cols-2">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Goal</h2>
            <p className="text-lg text-gray-600 mb-4">
              Partner with us to create innovative digital marketing strategies that increase your online presence and deliver measurable results.
            </p>
            </div>
          </section>
        </div>

        {/* Call to Action Section */}
        <section className="text-center mb-12">
          <h2 className="text-3xl font-semibold text-gray-800 mb-4">Get Started Today</h2>
          <p className="text-lg text-gray-600 mb-6">Partner with us to build solutions that drive your business forward.</p>
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

export default DigitalMarketing;
