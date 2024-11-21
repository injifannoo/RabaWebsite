import React, { useState, useEffect } from "react";

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
        isScrolled ? "bg-neutral-600 text-white shadow-lg" : "bg-transparent  text-white"
      }`}
    >
      <ul className="flex space-x-4 justify-center p-4">
        <li>
          <a href="#home" className="hover:text-blue-300">
            Home
          </a>
        </li>
        <li>
          <a href="#about-us" className="hover:text-blue-300">
            About Us
          </a>
        </li>
        <li>
          <a href="#services" className="hover:text-blue-300">
            Services
          </a>
        </li>
        <li>
          <a href="#our-project" className="hover:text-blue-300">
            Our Project
          </a>
        </li>
        <li>
          <a href="#contact" className="hover:text-blue-300">
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
