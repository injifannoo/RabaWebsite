import React from 'react';
import { FaPaintBrush, FaCode, FaServer, FaCertificate, FaSearch } from 'react-icons/fa';
import Navbar from '../Navbar'; // Adjust the path if necessary

const WebDevelopment = () => {
  return (
    <>
      <Navbar />
      <div className="px-4 py-8 max-w-7xl mx-auto">
        {/* Header Section */}
        <header className="text-center mb-12 mt-20">
          <h1 className="text-5xl font-extrabold text-gray-900 mb-4">Web Development Services</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            At Raba Technologies, we deliver cutting-edge web development solutions tailored to your business needs. Let us bring your vision to life with innovative, scalable, and dynamic web applications.
          </p>
        </header>

        {/* Web Design Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 ml-10">
          <section className=" bg-slate-100 mb-12">
            <div className=" text-gray-600 mb-4 ml-4">
              <h2 className="text-3xl text-center font-semibold text-gray-800 mb-6 mt-4">Web Design</h2>
              <p><strong>Focus:</strong> Crafting visually appealing and interactive designs that reflect your brand identity and captivate your audience.</p>
              <ul className="list-none space-y-4 mt-4">
                <li className="flex items-center text-gray-600">
                  <FaPaintBrush className="mr-3 text-blue-500" />
                  Designing engaging layouts and user-centric interfaces
                </li>
                <li className="flex items-center text-gray-600">
                  <FaPaintBrush className="mr-3 text-blue-500" />
                  Selecting harmonious color schemes and typography
                </li>
                <li className="flex items-center text-gray-600">
                  <FaPaintBrush className="mr-3 text-blue-500" />
                  Integrating high-quality images and dynamic elements
                </li>
              </ul>
              <p><strong>Goal:</strong> To build visually stunning, user-friendly websites that provide seamless navigation and leave a lasting impression.</p>
            </div>
          </section>

          {/* Web Development Section */}
          <section className=" bg-slate-100 mb-12">
            <div className=" text-gray-600 mb-4 ml-4">
              <h2 className="text-3xl text-center font-semibold text-gray-800 mb-6 mt-4">Web Development</h2>
              <p><strong>Focus:</strong> Building the technical backbone of your website to ensure robust functionality and smooth performance.</p>
              <ul className="list-none space-y-4 mt-4">
                <li className="flex items-center text-gray-600">
                  <FaCode className="mr-3 text-green-500" />
                  Writing clean, scalable, and efficient code
                </li>
                <li className="flex items-center text-gray-600">
                  <FaCode className="mr-3 text-green-500" />
                  Integrating databases and custom features
                </li>
                <li className="flex items-center text-gray-600">
                  <FaCode className="mr-3 text-green-500" />
                  Ensuring cross-platform and cross-browser compatibility
                </li>
              </ul>
              <p><strong>Goal:</strong> To develop reliable, scalable, and dynamic websites that meet user needs and drive business growth.</p>
            </div>
          </section>
        </div>

        {/* Web Hosting Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 ml-10">
          <section className=" bg-slate-100 mb-12">
            <div className="text-gray-600 mb-4 ml-4">
              <h2 className="text-3xl text-center font-semibold text-gray-800 mb-6 mt-4">Web Hosting</h2>
              <p><strong>Focus:</strong> Providing secure and reliable infrastructure to keep your website accessible around the clock.</p>
              <ul className="list-none space-y-4 mt-4">
                <li className="flex items-center text-gray-600">
                  <FaServer className="mr-3 text-red-500" />
                  Hosting your website on powerful, stable servers
                </li>
                <li className="flex items-center text-gray-600">
                  <FaServer className="mr-3 text-red-500" />
                  Managing server performance and ensuring maximum uptime
                </li>
                <li className="flex items-center text-gray-600">
                  <FaServer className="mr-3 text-red-500" />
                  Implementing security protocols to protect your data
                </li>
              </ul>
              <p><strong>Goal:</strong> To deliver fast, secure, and continuous hosting services that ensure your website is always online and performing optimally.</p>
            </div>
          </section>
          {/* Additional Services Section */}
          <section className=" bg-slate-100 mb-12">
            <div className="text-gray-600 mb-4 ml-4">
              <h2 className="text-3xl text-center font-semibold text-gray-800 mb-6 mt-4">Additional Services</h2>
              <ul className="list-none space-y-4">
                <li className="flex items-center text-gray-600">
                  <FaCertificate className="mr-3 text-yellow-500" />
                  Domain Name Registration: Secure the perfect domain that represents your brand and enhances your online identity.
                </li>
                <li className="flex items-center text-gray-600">
                  <FaCertificate className="mr-3 text-yellow-500" />
                  SSL Certificates: Safeguard your website with advanced encryption technology, boosting security and user trust.
                </li>
                <li className="flex items-center text-gray-600">
                  <FaSearch className="mr-3 text-purple-500" />
                  SEO: Enhance your website’s visibility and ranking with proven SEO strategies to attract more traffic and potential customers.
                </li>
              </ul>
            </div>
          </section>
        </div>

        {/* Call to Action Section */}
        <section className="text-center mb-12">
          <h2 className="text-3xl font-semibold text-gray-800 mb-4">Get Started Today</h2>
          <p className="text-lg text-gray-600 mb-6">Partner with us to build innovative and dynamic web solutions that drive your business forward.</p>
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

export default WebDevelopment;
