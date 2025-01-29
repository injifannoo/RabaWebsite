import homeImage from '../assets/images/homebg.jpg';
import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const navigate = useNavigate();

  return (
    <div className="w-full h-screen bg-cover bg-center mt-0"
      style={{ backgroundImage: `url(${homeImage})` }}>
      <div className="flex flex-col w-full h-full bg-black bg-opacity-50 px-5 md:px-24 items-start justify-start pt-40">
        {/* Heading with gradient colors */}
        <h1 className="text-2xl md:text-5xl  font-extrabold leading-tight">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-900 via-blue-950 to-black">
            Raba
          </span>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-orange-400 ml-2 md:ml-4">
             Technologies
          </span>
        </h1>

        {/* Quote Styling */}
        <p className="text-white text-1xl font-semibold italic mb-6 max-w-xl leading-tight">
          <span className="text-purple-400">“</span>
          Warriors for change, champions for success!
          <span className="text-purple-400">”</span>
        </p>

        {/* Powerful Description Text */}
        <p className="text-white text-base md:text-xl max-w-2xl mt-5 mb-6 leading-relaxed font-serif tracking-wide shadow-lg opacity-90 transition-all duration-300 hover:opacity-100 hover:shadow-xl">
          Transforming ideas into digital innovation with precision. Raba Technologies is your partner in pushing boundaries and building the future, one solution at a time.
        </p>

        {/* Learn More Button */}
        <button
          className="bg-gradient-to-r from-blue-950 via-blue-600 to-orange-600 text-white text-xl py-2 px-6 mt-5 rounded-full hover:bg-gradient-to-r hover:from-blue-600 hover:via-purple-700 hover:to-black transition duration-300 max-w-[250px] items-center align-middle text-center"
          onClick={() => navigate("/learn-more")}
        >
          LEARN MORE
        </button>
      </div>
    </div>
  );
};

export default HomePage;
