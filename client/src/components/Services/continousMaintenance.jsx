import React from 'react';
import Navbar from '../Navbar'; // Adjust the path if necessary
import { FaRegEye, FaBug, FaLock, FaTachometerAlt, FaStar } from 'react-icons/fa';

const ContinuousMaintenanceServices = () => {
  return (
    <>
      <Navbar />
      <div className="px-4 py-8 max-w-7xl mx-auto">
        {/* Header Section */}
        <header className="text-center mb-12 mt-20">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Continuous Maintenance Services</h1>
          <p className="text-lg text-gray-600">
            At Raba Technologies, we offer comprehensive continuous maintenance services that ensure the long-term success and stability of your web applications.
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 ml-10">
          <section className="bg-slate-100 mb-12">
            <div className="text-gray-600 mb-4 ml-4">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Ongoing Monitoring</h2>
              <p><strong>Focus:</strong> Continuously monitor the health of your website or application to proactively identify and resolve issues.</p>
              <ul className="list-none mb-4 text-gray-600">
                <li className="flex items-center mb-2"><FaRegEye className="inline mr-2" /> Real-time performance tracking and server health checks</li>
                <li className="flex items-center mb-2"><FaRegEye className="inline mr-2" /> Monitoring error logs for unexpected behavior or issues</li>
                <li className="flex items-center mb-2"><FaRegEye className="inline mr-2" /> Analyzing user feedback to identify areas for improvement</li>
              </ul>
              <p><strong>Goal:</strong> To ensure optimal performance by addressing any technical issues before they affect your users.</p>
            </div>
          </section>

          <section className="bg-slate-100 mb-12">
            <div className="text-gray-600 mb-4 ml-4">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Bug Fixes and Patches</h2>
              <p><strong>Focus:</strong> Quickly addressing and resolving bugs and vulnerabilities that arise to maintain a smooth user experience.</p>
              <ul className="list-none mb-4 text-gray-600">
                <li className="flex items-center mb-2"><FaBug className="inline mr-2" /> Quick response and resolution of critical bugs</li>
                <li className="flex items-center mb-2"><FaBug className="inline mr-2" /> Routine software patches for security vulnerabilities</li>
                <li className="flex items-center mb-2"><FaBug className="inline mr-2" /> Ensuring all aspects of your site remain compatible with the latest updates</li>
              </ul>
              <p><strong>Goal:</strong> To provide consistent improvements and ensure your site stays secure, functional, and up-to-date.</p>
            </div>
          </section>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 ml-10">
          <section className="bg-slate-100 mb-12">
            <div className="text-gray-600 mb-4 ml-4">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Security Updates</h2>
              <p><strong>Focus:</strong> Keep your application secure by applying the latest security updates and patches to protect against emerging threats.</p>
              <ul className="list-none mb-4 text-gray-600">
                <li className="flex items-center mb-2"><FaLock className="inline mr-2" /> Regular updates to libraries and third-party dependencies</li>
                <li className="flex items-center mb-2"><FaLock className="inline mr-2" /> Vulnerability scanning and mitigation</li>
                <li className="flex items-center mb-2"><FaLock className="inline mr-2" /> Implementing industry-standard encryption and security protocols</li>
              </ul>
              <p><strong>Goal:</strong> To safeguard your website from security threats and keep user data protected at all times.</p>
            </div>
          </section>

          <section className="bg-slate-100 mb-12">
            <div className="text-gray-600 mb-4 ml-4">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Performance Optimization</h2>
              <p><strong>Focus:</strong> Ensure your website continues to perform optimally, even as traffic grows or new features are added.</p>
              <ul className="list-none mb-4 text-gray-600">
                <li className="flex items-center mb-2"><FaTachometerAlt className="inline mr-2" /> Optimizing load times and server response times</li>
                <li className="flex items-center mb-2"><FaTachometerAlt className="inline mr-2" /> Database indexing and query optimization</li>
                <li className="flex items-center mb-2"><FaTachometerAlt className="inline mr-2" /> Regular testing to identify and address bottlenecks</li>
              </ul>
              <p><strong>Goal:</strong> To deliver a fast, seamless experience for users, regardless of their location or device.</p>
            </div>
          </section>
        </div>

        <section className="bg-slate-100 mb-12 ml-10">
          <div className="text-gray-600 text-center mb-4 ml-4">
            <h2 className="text-2xl  font-semibold text-gray-800 mb-4">Feature Enhancements</h2>
            <p className="text-start"><strong>Focus:</strong> Continuously improve your site by adding new features or improving existing ones based on user feedback and market trends.</p>
            <ul className="list-none mb-4 text-gray-600">
              <li className="flex items-center mb-2"><FaStar className="inline mr-2" /> Implementing new features to meet user needs</li>
              <li className="flex items-center mb-2"><FaStar className="inline mr-2" /> Enhancing existing features based on feedback</li>
              <li className="flex items-center mb-2"><FaStar className="inline mr-2" /> Keeping your website aligned with the latest industry trends</li>
            </ul>
            <p className="text-start"><strong>Goal:</strong> To ensure your site evolves with user demands and remains competitive in the marketplace.</p>
          </div>
        </section>

        <section className="text-center">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Get Started Today</h2>
          <p className="text-lg text-gray-600 mb-4">Partner with us to ensure your website stays secure, optimized, and continuously improved over time.</p>
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

export default ContinuousMaintenanceServices;
