import React from 'react';
import Navbar from '../Navbar'; // Adjust the path if necessary
import { FaCheckCircle } from 'react-icons/fa'; // Importing an icon library

const DigitalMarketing = () => {
  const listItem = (text) => (
    <div className="flex items-start mb-2">
      <FaCheckCircle className="text-blue-500 mt-1 mr-2" />
      <span>{text}</span>
    </div>
  );

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

        {/* Focus Section */}
        <section className="bg-slate-100 text-gray-600 mb-12 ml-10">
          <h2 className="text-2xl text-center font-semibold text-gray-800 mb-4">Focus</h2>
          <p className="text-gray-600 text-center">
            Developing and executing targeted strategies to promote your brand, products, or services online, ensuring they reach the right audience through the most effective channels.
          </p>
        </section>

        {/* Involves Section */}
        <h2 className="text-2xl text-center font-semibold text-gray-800 mb-10 mt-4">Involves</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 ml-10">
          {/* Search Engine Optimization */}
          <section className="bg-slate-100 mb-12">
            <div className="text-gray-600 mb-4 ml-4">
              <h3 className="text-xl font-medium text-gray-800">Search Engine Optimization (SEO)</h3>
              <p className="text-gray-600 mb-2">
                Optimizing your website content to improve its visibility on search engines and attract organic traffic.
              </p>
              {listItem("Keyword Research and Analysis")}
              {listItem("On-Page SEO")}
              {listItem("Off-Page SEO and Link Building")}
              {listItem("Technical SEO")}
            </div>
          </section>

          {/* Social Media Marketing */}
          <section className="bg-slate-100 mb-12">
            <div className="text-gray-600 mb-4 ml-4">
              <h3 className="text-xl font-medium text-gray-800">Social Media Marketing</h3>
              <p className="text-gray-600 mb-2">
                Building and managing your brand’s presence across social platforms to engage with your audience and drive conversions.
              </p>
              {listItem("Social Media Strategy Development")}
              {listItem("Content Creation and Scheduling")}
              {listItem("Influencer Partnerships")}
              {listItem("Social Media Ads Management")}
            </div>
          </section>

          {/* Content Marketing */}
          <section className="bg-slate-100 mb-12">
            <div className="text-gray-600 mb-4 ml-4">
              <h3 className="text-xl font-medium text-gray-800">Content Marketing</h3>
              <p className="text-gray-600 mb-2">
                Creating valuable content that educates, entertains, and informs your audience, driving engagement and loyalty.
              </p>
              {listItem("Blog Writing and Publishing")}
              {listItem("Video Production")}
              {listItem("Infographics and Visual Content")}
              {listItem("Ebooks and Whitepapers")}
            </div>
          </section>

          {/* Email Marketing */}
          <section className="bg-slate-100 mb-12">
            <div className="text-gray-600 mb-4 ml-4">
              <h3 className="text-xl font-medium text-gray-800">Email Marketing</h3>
              <p className="text-gray-600 mb-2">
                Crafting personalized email campaigns to nurture leads and maintain strong customer relationships.
              </p>
              {listItem("Newsletter Design")}
              {listItem("Automated Campaigns")}
              {listItem("Lead Nurturing")}
              {listItem("Email Analytics")}
            </div>
          </section>

          {/* PPC Advertising */}
          <section className="bg-slate-100 mb-12">
            <div className="text-gray-600 mb-4 ml-4">
              <h3 className="text-xl font-medium text-gray-800">Pay-Per-Click (PPC) Advertising</h3>
              <p className="text-gray-600 mb-2">
                Managing targeted paid ad campaigns on platforms like Google Ads to drive immediate traffic and leads.
              </p>
              {listItem("Google Ads")}
              {listItem("Facebook Ads")}
              {listItem("LinkedIn Ads")}
              {listItem("Display and Retargeting Campaigns")}
            </div>
          </section>

          {/* Analytics and Reporting */}
          <section className="bg-slate-100 mb-12">
            <div className="text-gray-600 mb-4 ml-4">
              <h3 className="text-xl font-medium text-gray-800">Analytics and Reporting</h3>
              <p className="text-gray-600 mb-2">
                Continuously analyzing data to measure performance, optimize strategies, and ensure marketing goals are met.
              </p>
              {listItem("Website Traffic Analysis")}
              {listItem("Conversion Rate Optimization")}
              {listItem("Campaign Performance Reports")}
            </div>
          </section>


        </div>
        <section className="bg-slate-100 text-center mb-8 flex items-center justify-center">
          <div className="grid-cols-2">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">Creating Awareness about Digital Marketing</h3>
            <p className="text-gray-600">
              Educating businesses and individuals about the importance of digital marketing, helping them understand its impact, tools, and strategies to grow their online presence.
            </p>
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
        {/* Call-to-Action Section */}
        <section className="text-center">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Get Started Today</h2>
          <p className="text-lg text-gray-600 mb-4">
            Partner with us to create innovative digital marketing strategies that increase your online presence and deliver measurable results.
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

export default DigitalMarketing;
