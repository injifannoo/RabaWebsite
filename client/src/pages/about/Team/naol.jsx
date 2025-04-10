import React, { useEffect } from "react";
import itu from '../../../assets/images/profile/itub.jpg';
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Naol = () => {
    useEffect(() => {
        // Scroll to the top of the page when the component is mounted
        window.scrollTo(0, 0);
    }, []);
    return (
        <div className="bg-white w-full text-secondary font-custom min-h-screen">
            <div className="max-w-[1200px] m-auto px-6 py-10 mt-20">
                <div className="flex flex-col md:flex-row items-center md:items-start">

                    <div className="md:w-1/3 flex flex-col items-center md:items-start sticky top-0">
                        {/* Profile Picture Section */}
                        <div className="flex justify-center md:justify-start mb-6 md:mb-0">
                            <img
                                src={itu}
                                alt="Naol Kecha Geda"
                                className="w-60 h-80 rounded-full border-4 border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                            />
                        </div>
                        <h1 className="text-3xl font-bold text-black mb-2">Enjifano Tamiru Urgessa</h1>
                        <div className=" text-3xl flex flex-row items-center size-20 mt-2 space-x-4">
                            <a
                                href="https://github.com/Naolkecha"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-gray-500 hover:text-gray-800 text-3xl"
                            >
                                <FontAwesomeIcon icon={faGithub} />

                            </a>
                            <a
                                href="https://www.linkedin.com/in/naolkecha"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-blue-500 hover:text-blue-700 text-3xl"
                            >
                                <FontAwesomeIcon icon={faLinkedin} />

                            </a>
                        </div>
                    </div>

                    {/* Profile Details Section */}
                    <div className="bg-gray-100 md:w-2/3 md:pl-8 overflow-y-scroll max-h-screen scrollbar-hide">
                        <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                            Co-Founder & Software Engineer
                        </h2>
                        <p className="mt-4 text-lg text-gray-600">
                            Naol Kecha is a dynamic co-founder and accomplished software engineer specializing in the MERN stack (MongoDB, Express, React, Node.js) and Flutter development. With a knack for creating innovative, scalable solutions, Naol leverages expertise in modern web and mobile technologies to deliver exceptional results tailored to business objectives.
                        </p>
                        <p className="mt-4 text-gray-600">
                        A problem-solver at heart, Naol is committed to excellence, combining technical proficiency with strategic thinking to drive impactful projects. As a co-founder, Naol plays a vital role in shaping the company's technical vision, fostering collaboration, and ensuring the delivery of high-quality, user-focused solutions.
                        </p>

                        <h3 className="text-xl font-semibold text-black mt-6">Key Areas of Expertise:</h3>
                        <ul className="list-disc list-inside mt-2 text-gray-600">
                            <li>Web Development: Full-stack solutions using the MERN stack.</li>
                            <li>Mobile App Development: High-performance, cross-platform apps with Flutter.</li>
                            <li>Team Leadership: Mentoring team members and streamlining development workflows.</li>
                            <li>Problem Solving: Translating complex requirements into scalable software solutions.</li>
                        </ul>

                        <h3 className="text-xl font-semibold text-black mt-6">Achievements:</h3>
                        <ul className="list-disc list-inside mt-2 text-gray-600">
                            <li>
                            Spearheaded critical projects that enhanced user engagement and business outcomes.
                            </li>
                            <li>
                                Co-founded the company, playing a pivotal role in its technical foundation and growth
                                strategy.
                            </li>
                            <li>
                            Worked closely with stakeholders to create tailored software solutions that exceed expectations.
                            </li>
                        </ul>
                        {/* Added Education Section */}
                        <h3 className="text-xl font-semibold text-black mt-6">Education:</h3>
                        <p className="mt-2 text-gray-600">
                        Graduated in Software Engineering from Addis Ababa Institute of Technology (AAiT).                        </p>
                        <h3 className="text-xl font-semibold text-black mt-6">Personal Philosophy:</h3>
                        <p className="mt-2 text-gray-600 italic">
                            "Tech is good"
                        </p>


                    </div>

                </div>
            </div>
        </div>
    );
};

export default Naol;
