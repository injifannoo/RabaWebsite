
import homeImage from '../assets/images/homebg.png';
const HomePage = () => (

    
    <div className="w-full h-screen bg-cover bg-center mt-0 "
    style={{ backgroundImage: `url(${homeImage})` }}>

      <div className="flex flex-col w-full h-full bg-black bg-opacity-50 px-4 md:px-20 justify-center"> 
      <h1 className="text-white text-4xl font-bold text-start pt-0">
        Raba Technologies
      </h1>
      <p className="text-white text-1xl mt-5">
        Raba is a digital company based in Ethiopia. Our area of expertise is web and mobile
        app development. <br/> With a precision commitment to results, the Raba team has
        refined the science of the digital world.
      </p>
      <button className="bg-blue-600 text-white text-xl py-2 px-4 mt-5 rounded-lg hover:bg-blue-700 max-w-[200px]">
        LEARN MORE
      </button>
    </div>
  </div>
);

export default HomePage;
  