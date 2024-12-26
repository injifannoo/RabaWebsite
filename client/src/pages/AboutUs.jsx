import aboutUs from "../assets/images/about-us.png";
import { useNavigate } from "react-router-dom";

const AboutUs = () => {
    const navigate = useNavigate();
    return (
        <div className="flex flex-row md:flex-row items-center md:justify-between -mt-8">
            <div className="flex flex-col w-full md:w-1/2 text-left py-0 px-8">
                <h1 className="text-3xl font-bold text-center">About Us</h1>
                <p className="mt-4 text-lg text-start text-gray-700">
                    Raba Technologies is a software development startup with a mission to build robust platforms that solve our customers' and society's problems. 
                    We aim to deliver innovative software solutions to businesses of all sizes.
                </p>
                <div className="flex justify-evenly items-center mt-4">
                    <button
                        className="bg-blue-600 py-1 px-2 text-xl text-white rounded-lg"
                        onClick={() => navigate("/learn-more")}
                    >
                        LEARN MORE
                    </button>
                    <button
                            onClick={() => {    
                              console.log("Navigating to Learn More");
                              navigate("/teams")}}
                        id="teams"
                        className="border border-black py-1 px-2 text-xl text-blue-600 rounded-lg"
                    >
                        OUR TEAM
                    </button>
                </div>
            </div>

            <div className="w-full md:w-1/2 mt-0 md:mt-0 py-0 px-8">
                <img 
                    src={aboutUs}
                    alt="About Us"
                    className="max-w-full h-auto object-cover"
                />
            </div>
        </div>
    );
};

export default AboutUs;
