import React, { useState, useEffect } from "react";
import Logo from "./logo";
import ft from '../assets/images/ft.jpg';
import { isAdmin } from "../utils/auth";
import { Navigate } from "react-router-dom"; // Import Navigate for route redirection

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State for mobile menu toggle
  const [isAboutOpen, setIsAboutOpen] = useState(false); // State for about dropdown
  const [isServicesOpen, setIsServiceOpen] = useState(false); // State for services dropdown
  const [aboutTimeout, setAboutTimeout] = useState(null); // Timeout for about dropdown
  const [serviceTimeout, setServiceTimeout] = useState(null); // Timeout for about dropdown



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

  // Function to check if the user is an admin
  const ProtectedAdminRoute = ({ element }) => {
    return isAdmin() ? element : <Navigate to="/admin/login" />;
  };

  // Handle closing the menu when a link is clicked
  const handleMenuItemClick = () => {
    setIsMenuOpen(false);
  };

  // Handle mouse enter for about dropdown
  const handleAboutMouseEnter = () => {
    if (aboutTimeout) {
      clearTimeout(aboutTimeout);
      setAboutTimeout(null);
    }
    setIsAboutOpen(true);
  };

  // Handle mouse leave for about dropdown
  const handleAboutMouseLeave = () => {
    const timeout = setTimeout(() => {
      setIsAboutOpen(false);
    }, 100); // Delay of 500ms
    setAboutTimeout(timeout);
  };

  const handleServiceMouseEnter = () => {
    if (serviceTimeout) {
      clearTimeout(serviceTimeout);
      setServiceTimeout(null);
    }
    setIsServiceOpen(true);
  };

  // Handle mouse leave for Servicet dropdown
  const handleServiceMouseLeave = () => {
    const timeout = setTimeout(() => {
      setIsServiceOpen(false);
    }, 100); // Delay of 500ms
    setServiceTimeout(timeout);
  };

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? "bg-gray-200 text-blue shadow-lg" : "bg-transparent text-white"
        }`}
    >
      <div className="flex justify-between items-center px-4 py-3 md:px-6 lg:px-8">
        <Logo />
        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="text-white md:hidden focus:outline-none"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-blue-500"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
            />
          </svg>
        </button>

        {/* Desktop Menu */}
        <ul
          className={`hidden md:flex md:space-x-6 lg:space-x-8 items-center text-lg`}
        >
          <li>
            <a href="/" className="hover:text-blue-300">
              Home
            </a>
          </li>

          {/* <li>
            <a href="#about-us" className="hover:text-blue-300">
              About
            </a>
          </li> */}
       
       <li
            className="relative"
            onMouseEnter={handleAboutMouseEnter}
            onMouseLeave={handleAboutMouseLeave}
          >
            <a href="#about-us" className="hover:text-blue-300">
              About
            </a>
            {isAboutOpen && (
              <ul
                className="absolute left-0 mt-2 w-48 bg-white text-black shadow-lg rounded-lg"
                onMouseEnter={handleAboutMouseEnter}
                onMouseLeave={handleAboutMouseLeave}
              >
                <li className="px-4 py-2 hover:bg-gray-200">
                  <a href="/learn-more" className="block">Learn More</a>
                </li>
                <li className="px-4 py-2 hover:bg-gray-200">
                  <a href="/teams" className="block">Our Team</a>
                </li>
              </ul>
            )}
          </li>
          {/* <li>
            <a href="#services" className="hover:text-blue-300">
              Services
            </a>
          </li> */}
          <li
             className="relative"
             onMouseEnter={handleServiceMouseEnter}
             onMouseLeave={handleServiceMouseLeave}
           >
            <a href="#services" className="hover:text-blue-300">
              Services
            </a>
            {isServicesOpen && (
               <ul
               className="absolute left-0 mt-2 w-48 bg-white text-black shadow-lg rounded-lg"
               onMouseEnter={handleServiceMouseEnter}
               onMouseLeave={handleServiceMouseLeave}
             >
              
                <li className="px-4 py-2 hover:bg-gray-200">
                  <a href="#service1" className="block">Web development</a>
                </li>
                <li className="px-4 py-2 hover:bg-gray-200">
                  <a href="#service2" className="block">Mobile app development</a>
                </li>
                <li className="px-4 py-2 hover:bg-gray-200">
                  <a href="#service3" className="block">Digital Marketing</a>
                </li>
                <li className="px-4 py-2 hover:bg-gray-200">
                  <a href="#service3" className="block">Continous Maintenance
                  </a>
                </li>
                <li className="px-4 py-2 hover:bg-gray-200">
                  <a href="#service3" className="block">Graphics Design</a>
                </li>
                <li className="px-4 py-2 hover:bg-gray-200">
                  <a href="#service3" className="block">UI/UX Design</a>
                </li>
              </ul>
            )}
          </li>
          <li>
            <a href="#our-project" className="hover:text-blue-300">
              Projects
            </a>
          </li>
          <li>
            <a href="#blogs" className="hover:text-blue-300">
              Blogs
            </a>
          </li>
          <li>
            <a href="#contact" className="hover:text-blue-300">
              Contact
            </a>
          </li>
          <li>
            <a href="https://ftsolution.net/" target="_blank" rel="noopener noreferrer" className="relative inline-block px-11 py-4 pt-4 text-lg font-semibold text-white bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 rounded-full shadow-md hover:underline hover:text-blue-300">
              <span className="absolute inset-0 bg-cover bg-center opacity-50 rounded-full" style={{ backgroundImage: `url(${ft})`, backgroundSize: 'contain' }}></span>
            </a>
          </li>
        </ul>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <ul
            className="absolute top-full right-0 w-3/4 bg-neutral-600 text-white text-center space-y-4 py-4 shadow-lg md:hidden transform transition-transform duration-300 ease-in-out"
            style={{ transform: isMenuOpen ? "translateX(0)" : "translateX(100%)" }}
          >
            <li>
              <a href="/" className="block hover:text-blue-300" onClick={handleMenuItemClick}>
                Home
              </a>
            </li>
            {isAdmin() && (
              <li>
                <a href="/dashboard" className="block hover:text-blue-300" onClick={handleMenuItemClick}>
                  Admin Panel
                </a>
              </li>
            )}
            <li>
              <a href="#about-us" className="block hover:text-blue-300" onClick={handleMenuItemClick}>
                About
              </a>
            </li>
            <li>
              <a href="#services" className="block hover:text-blue-300" onClick={handleMenuItemClick}>
                Services
              </a>
            </li>
            <li>
              <a href="#our-project" className="block hover:text-blue-300" onClick={handleMenuItemClick}>
                Projects
              </a>
            </li>
            <li>
              <a href="#blogs" className="block hover:text-blue-300" onClick={handleMenuItemClick}>
                Blogs
              </a>
            </li>
            <li>
              <a href="#contact" className="block hover:text-blue-300" onClick={handleMenuItemClick}>
                Contact
              </a>
            </li>
            <li>
              <a href="https://ftsolution.net/" target="_blank" rel="noopener noreferrer" className="relative inline-block px-12 py-4 pt-4 text-lg font-semibold text-white bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 rounded-full shadow-md hover:underline hover:text-blue-300">
                <span className="absolute inset-0 bg-cover bg-center opacity-50 rounded-full" style={{ backgroundImage: `url(${ft})`, backgroundSize: 'contain' }}></span>
              </a>
            </li>
          </ul>
        )}
      </div>
    </nav>
  );
};

export default Navbar;

