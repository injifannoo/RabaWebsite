import React, { useState, useEffect } from "react";
import Logo from "./logo";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-gray-200 text-black shadow-sm opacity-90" : "bg-transparent  text-white"
      }`}
    >
      <div className="flex justify-between items-center px-6 py-3">
      <Logo />
      <ul className="flex space-x-4 justify-center items-center px-20 py-2 text-xl">
        <li>
          <a href="#home" className="hover:text-blue-300">
            Home
          </a>
        </li>
        <li>
          <a href="#about-us" className="hover:text-blue-300">
            About
          </a>
        </li>
        <li>
          <a href="#services" className="hover:text-blue-300">
            Services
          </a>
        </li>
        <li>
          <a href="#our-project" className="hover:text-blue-300">
            Projects
          </a>
        </li>
        <li>
          <a href="#blog" className="hover:text-blue-300">
          Blogs
          </a>
        </li>
        
      </ul>
      <div>
        <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600">
          Contact Us
        </button>

      </div>
      </div>
    </nav>
  );
};

export default Navbar;
