import React from "react";
import LogoImage from '../assets/images/rabaLogo.jpg';

const Logo = () => {
  return (
    <a href="/" className="flex items-center">
      <img src={LogoImage} alt="Raba Technologies Logo" className="h-10 w-auto" />
      
      <span className="ml-2 text-lg font-semibold text-white">Raba Technologies</span>
    </a>
  );
};

export default Logo;
