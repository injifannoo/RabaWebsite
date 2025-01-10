import React, { useEffect } from "react";
import itu from '../../../assets/images/profile/itub.jpg';
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Gizachew = () => {
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
                alt="Gizachew Habtamariam"
                className="w-60 h-80 rounded-full border-4 border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              />
            </div>
            <h1 className="text-3xl font-bold text-black mb-2">Gizachew Habtamariam</h1>
            <div className="text-3xl flex flex-row items-center size-20 mt-2 space-x-4">
              <a
                href="https://github.com/gizachew"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-gray-800 text-3xl"
              >
                <FontAwesomeIcon icon={faGithub} />
              </a>
              <a
                href="https://www.linkedin.com/in/gizachew-habtemariam-516645263/"
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
              Co-Founder, Public Relations & Graphic Designer
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Gizachew Haptamariam is a visionary co-founder and skilled Graphic Designer. He specializes in graphic design, strategic communication, brand management, and creating visually impactful designs to enhance brand identity and messaging. His background in Political Science and International Relations empowers him to engage effectively with diverse stakeholders and drive positive public perception.
            </p>
            <p className="mt-4 text-gray-600">
              With a keen eye for design and a passion for relationship-building, Gizachew plays a pivotal role in shaping the company's visual and communication strategies, expanding its market reach, and delivering creative, impactful solutions.
            </p>

            <h3 className="text-xl font-semibold text-black mt-6">Key Areas of Expertise:</h3>
            <ul className="list-disc list-inside mt-2 text-gray-600">
              <li>Public Relations: Building brand visibility and managing external communications.</li>
              <li>Graphic Design: Crafting compelling visuals to communicate brand messages effectively.</li>
              <li>Stakeholder Engagement: Cultivating partnerships and maintaining strong client relations.</li>
              <li>Strategic Communication: Designing cohesive messaging strategies for brand positioning.</li>
            </ul>

            <h3 className="text-xl font-semibold text-black mt-6">Achievements:</h3>
            <ul className="list-disc list-inside mt-2 text-gray-600">
              <li>
                Successfully led the design of brand materials that enhanced visibility and client engagement.
              </li>
              <li>
                Co-founded the company, contributing to its public relations, design, and communication frameworks.
              </li>
              <li>
                Developed creative campaigns focused on enhancing brand identity and corporate outreach.
              </li>
            </ul>

            <h3 className="text-xl font-semibold text-black mt-6">Education:</h3>
            <p className="mt-2 text-gray-600">
              Graduated from Addis Ababa University with a degree in Political Science and International Relations.
            </p>

            <h3 className="text-xl font-semibold text-black mt-6">Personal Philosophy:</h3>
            <p className="mt-2 text-gray-600 italic">
              "Effective communication and impactful design are the pillars of building lasting relationships and strong brand identities."
            </p>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Gizachew;
