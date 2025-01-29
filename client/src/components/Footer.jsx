// src/components/Footer.jsx
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faTelegram, faLinkedin,  } from "@fortawesome/free-brands-svg-icons";
import { faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import Logo from "./logo";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-blue-500 via-indigo-600 to-purple-700 text-white py-10">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-48 ">

        {/* Logo Section */}
       
        <div className="flex flex-col items-center md:items-start">
          <Logo /> {/* This now uses the Logo component */}
          <p className="text-sm mt-2 text-gray-200">Warriors for change champions for success!</p>
        </div>

        {/* Services Section */}
        <div className="flex flex-col items-center md:items-start">
          <h3 className="text-xl text-orange-500 font-semibold mb-4">Our Services</h3>
          <ul className="space-y-2 flex flex-col items-center md:items-start">
            <li className="text-sm hover:text-indigo-200">Website Development</li>
            <li className="text-sm hover:text-indigo-200">Mobile App Development</li>
            <li className="text-sm hover:text-indigo-200">Digital Marketing</li>
            <li className="text-sm hover:text-indigo-200">Graphic Design</li>
            <li className="text-sm hover:text-indigo-200">Video Editing</li>

          </ul>
        </div>

        {/* Social Media & Contact Section */}
        <div className="flex flex-col items-center md:items-start">
          <h3 className="text-xl text-orange-500 font-semibold mb-4">Contact Us</h3>
          <div className="flex space-x-6 mb-4">
            <a href="https://www.facebook.com/rabatechnologies" target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-500">
              <FontAwesomeIcon icon={faFacebook} size="2x" />
            </a>
            <a href="https://t.me/rabatechnologies" target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-400">
              <FontAwesomeIcon icon={faTelegram} size="2x" />
            </a>
            <a href="https://www.linkedin.com/company/rabatechnologies" target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-700">
              <FontAwesomeIcon icon={faLinkedin} size="2x" />
            </a>
            
          </div>
          <div className="flex space-x-6 mb-4">
            <a href="tel:+123456789" className="text-white hover:text-gray-300">
              <FontAwesomeIcon icon={faPhone} size="lg" />
              <span className="ml-2">+251962408198/+251972900847</span>
            </a>
          </div>
          <div className="flex space-x-6">
            <a href="mailto:info@rabatechnologies.com" className="text-white hover:text-gray-300">
              <FontAwesomeIcon icon={faEnvelope} size="lg" />
              <span className="ml-2">info@rabatechnologies.com</span>
            </a>
          </div>
          
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="text-center mt-10 pt-6 border-t border-gray-700">
        <p className="text-sm">&copy; {new Date().getFullYear()} Raba Technologies. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
