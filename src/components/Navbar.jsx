import React, { useState, useEffect } from "react";
import Logo from "./logo";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  const handleMenuClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-gray-200 text-black shadow-sm opacity-90" : "bg-transparent text-white"
      }`}
    >
      <div className="flex justify-between items-center px-6 py-3">
        <Logo />
        <div className="md:hidden">
          <button onClick={toggleMenu} className="focus:outline-none">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              ></path>
            </svg>
          </button>
        </div>
        <ul
          className={`md:flex space-x-4 justify-center items-center px-20 py-2 text-xl ${
            isMenuOpen ? "hidden" : "hidden"
          } md:block`}
        >
          <li>
            <a href="#home" className="hover:text-blue-300" onClick={handleMenuClick}>
              Home
            </a>
          </li>
          <li>
            <a href="#about-us" className="hover:text-blue-300" onClick={handleMenuClick}>
              About
            </a>
          </li>
          <li>
            <a href="#services" className="hover:text-blue-300" onClick={handleMenuClick}>
              Services
            </a>
          </li>
          <li>
            <a href="#our-project" className="hover:text-blue-300" onClick={handleMenuClick}>
              Projects
            </a>
          </li>
          <li>
            <a href="#blog" className="hover:text-blue-300" onClick={handleMenuClick}>
              Blogs
            </a>
          </li>
        </ul>
        <div className="hidden md:block">
          <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600">
            Contact Us
          </button>
        </div>
      </div>
      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-gray-200 text-black">
          <ul className="flex flex-col items-center space-y-4 px-6 py-4 text-xl">
            <li>
              <a href="#home" className="hover:text-blue-300" onClick={handleMenuClick}>
                Home
              </a>
            </li>
            <li>
              <a href="#about-us" className="hover:text-blue-300" onClick={handleMenuClick}>
                About
              </a>
            </li>
            <li>
              <a href="#services" className="hover:text-blue-300" onClick={handleMenuClick}>
                Services
              </a>
            </li>
            <li>
              <a href="#our-project" className="hover:text-blue-300" onClick={handleMenuClick}>
                Projects
              </a>
            </li>
            <li>
              <a href="#blog" className="hover:text-blue-300" onClick={handleMenuClick}>
                Blogs
              </a>
            </li>
            <li>
              <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600">
                Contact Us
              </button>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
