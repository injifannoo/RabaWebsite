import React from 'react';
import Navbar from '../Navbar'; // Adjust the path if necessary

const appDevelopment = () => {
  return (
    <>
      <Navbar />
      <div className="px-4 py-8 max-w-7xl mx-auto">
        {/* Header Section */}
        <header className="text-center mb-12 mt-20">
          <h1 className="text-4xl font-bold mb-4">App Development Services</h1>
          <p className="text-lg text-center text-gray-600">At Raba Technologies, we specialize in creating powerful and user-friendly mobile applications that meet your business needs and enhance user engagement.</p>
        </header>

        <section className="text-center mb-8">
          <h2 className="text-2xl font-semibold mb-4">Focus</h2>
          <p>Designing and developing mobile apps that are intuitive, functional, and optimized for performance across platforms such as iOS and Android.</p>
        </section>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 ml-10">
          <section className=" bg-slate-100 mb-12">
            <div className=" text-gray-600 mb-4 ml-4">
              <h2 className="text-3xl text-center font-semibold text-gray-800 mb-6 mt-4">UI/UX Design</h2>
              <p className="mb-4"><strong>Focus:</strong> Crafting seamless, visually appealing interfaces that offer an exceptional user experience.</p>
              <ul className="list-disc pl-6">
                <li>Designing user-centric and aesthetically pleasing layouts</li>
                <li>Implementing intuitive navigation and interactive elements</li>
                <li>Ensuring brand consistency with tailored color schemes and typography</li>
              </ul>
            </div>
          </section>

          <section className=" bg-slate-100 mb-12">
            <div className=" text-gray-600 mb-4 ml-4">
              <h2 className="text-3xl text-center font-semibold text-gray-800 mb-6 mt-4">App Development</h2>
              <p className="mb-4"><strong>Focus:</strong> Writing robust, scalable code to build custom applications with unique features tailored to your requirements.</p>
              <ul className="list-disc pl-6">
                <li>Developing native and cross-platform mobile applications</li>
                <li>Implementing advanced functionalities like push notifications and real-time updates</li>
                <li>Optimizing code for performance and scalability</li>
              </ul>
            </div>
          </section>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 ml-10">
          <section className=" bg-slate-100 mb-12">
            <div className=" text-gray-600 mb-4 ml-4">
              <h2 className="text-3xl text-center font-semibold text-gray-800 mb-6 mt-4">Integration</h2>
              <p className="mb-4"><strong>Focus:</strong> Enhancing functionality through seamless integration with external systems and services.</p>
              <ul className="list-disc pl-6">
                <li>Connecting to third-party services and APIs</li>
                <li>Implementing secure payment gateways and authentication systems</li>
                <li>Utilizing cloud storage and database solutions</li>
              </ul>
            </div>
          </section>

          <section className=" bg-slate-100 mb-12">
            <div className=" text-gray-600 mb-4 ml-4">
              <h2 className="text-3xl text-center font-semibold text-gray-800 mb-6 mt-4">Testing & Optimization</h2>
              <p className="mb-4"><strong>Focus:</strong> Ensuring top-notch quality, reliability, and performance through comprehensive testing and optimization.</p>
              <ul className="list-disc pl-6">
                <li>Conducting thorough unit, integration, and system testing</li>
                <li>Fixing bugs and enhancing performance for smooth operation</li>
                <li>Optimizing the app for speed, responsiveness, and battery efficiency</li>
              </ul>
            </div>
          </section>
        </div>
        <section className="text-center">
          <h2 className="text-3xl text-center font-semibold text-gray-800 mb-6 mt-4">Bring Your App Vision to Life</h2>
          <p className="mb-4">Collaborate with us to create innovative, user-centric mobile applications that captivate your audience and drive success.</p>
          <a href="/contact" className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700">Get Started</a>
        </section>
      </div>
    </>
  );
};

export default appDevelopment;
