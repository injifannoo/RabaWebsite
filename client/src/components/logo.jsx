import React from "react";
import LogoImage from '../assets/images/rabaLogo.jpg';

const Logo = () => {
  return (
    <a href="/" className="flex items-center">
      <img src={LogoImage} alt="Raba Technologies Logo" className="h-10 w-auto" />
      <div className="flex flex-col">
      <span className="ml-2 text-lg font-semibold text-white">Raba Technologies</span>
      <span className="text-sm text-white italic -mt-2">
        Warriors for change, champions for success!
      </span>
      </div>
    </a>
  );
};

export default Logo;
