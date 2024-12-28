import React, { useEffect } from "react";
import itu from '../../../assets/images/profile/itub.jpg';
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Ebba = () => {
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
                                alt="Ebba Mekonnen"
                                className="w-60 h-80 rounded-full border-4 border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                            />
                        </div>
                        <h1 className="text-3xl font-bold text-black mb-2">Ebba Mekonnen Abdeta</h1>
                        <div className=" text-3xl flex flex-row items-center size-20 mt-2 space-x-4">
                            <a
                                href="https://github.com/ebba"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-gray-500 hover:text-gray-800 text-3xl"
                            >
                                <FontAwesomeIcon icon={faGithub} />

                            </a>
                            <a
                                href="https://www.linkedin.com/in/eba-mekonnen-88b4bb244/"
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
                            Co-Founder & Software Developer
                        </h2>
                        <p className="mt-4 text-lg text-gray-600">
                            Eba Mekonnen is an innovative co-founder and proficient software developer with expertise in application and software development. Specializing in Flutter and Java for mobile and desktop applications, and WordPress for web development, Eba combines technical mastery with creativity to craft user-friendly and scalable solutions.
                        </p>
                        <p className="mt-4 text-gray-600">
                            With a dedication to leveraging technology for impactful results, Eba is committed to delivering excellence. As a co-founder, Eba plays a pivotal role in shaping the company’s vision, fostering innovation, and driving the development of tailored, high-quality software solutions.
                        </p>

                        <h3 className="text-xl font-semibold text-black mt-6">Key Areas of Expertise:</h3>
                        <ul className="list-disc list-inside mt-2 text-gray-600">
                            <li>Application Development: Building robust, cross-platform applications with Flutter and Java.</li>
                            <li>Web Development: Creating responsive and dynamic websites using WordPress.
                            </li>
                            <li>Technical Leadership: Streamlining development workflows and mentoring team members.
                            </li>
                            <li>Problem Solving: Translating complex requirements into scalable software solutions.</li>
                        </ul>

                        <h3 className="text-xl font-semibold text-black mt-6">Achievements:</h3>
                        <ul className="list-disc list-inside mt-2 text-gray-600">
                            <li>
                                Successfully led and developed key projects that enhanced user experience and drove
                                client satisfaction.
                            </li>
                            <li>
                                Co-founded the company, establishing its foundation for technological innovation and growth.
                            </li>
                            <li>
                                Delivered customized software solutions by closely collaborating with clients and stakeholders.
                            </li>
                        </ul>
                        {/* Added Education Section */}
                        <h3 className="text-xl font-semibold text-black mt-6">Education:</h3>
                        <p className="mt-2 text-gray-600">
                            Graduated from Addis Ababa University in Computer Science.
                        </p>
                        <h3 className="text-xl font-semibold text-black mt-6">Personal Philosophy:</h3>
                        <p className="mt-2 text-gray-600 italic">
                            I believe technology should be accessible, impactful, and transformative. My mission is to create solutions that simplify lives and empower businesses to achieve their goals."
                        </p>


                    </div>

                </div>
            </div>
        </div>
    );
};
export default Ebba;
