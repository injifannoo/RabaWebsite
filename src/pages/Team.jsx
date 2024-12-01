import React from "react";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const TeamSection = () => {
    const teamMembers = [
      {
        id: 1,
        name: "User One",
        role: "Front-end Developer",
        image: "https://via.placeholder.com/150", // Replace with actual image
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.",
        github: "#",
        linkedin: "#",
      },
      {
        id: 2,
        name: "User Two",
        role: "Backend Developer",
        image: "https://via.placeholder.com/150",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.",
        github: "#",
        linkedin: "#",
      },
      {
        id: 3,
        name: "User Three",
        role: "Mobile Developer",
        image: "https://via.placeholder.com/150",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.",
        github: "#",
        linkedin: "#",
      },
    ];
  
    return (
      <div className="bg-gr py-12">
        <h2 className="text-center text-2xl font-bold text-gray-800 mb-20">
          OUR TEAM
        </h2>
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-5 ">
          {teamMembers.map((member) => (
            <div
              key={member.id}
              className="w-auto  rounded-lg p-6 flex flex-col items-center"
            >
              <img
                src={member.image}
                alt={member.name}
                className="w-20 md:w-32 rounded-full absolute bottom- transform -translate-x-0 -translate-y-12"
              />
              <div className="flex flex-col items-center border bg-gray-200 rounded-lg pt-10 md:pt-20 px-5">
              <h3 className="text-lg font-semibold text-gray-800">
                {member.name}
              </h3>
              <p className="text-sm text-blue-500 mb-2">{member.role}</p>
              <p className="text-sm text-gray-600 text-center">
                {member.description}
              </p>
              <div className="flex space-x-4 mt-4 pb-5">
                <a
                  href={member.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-500 hover:text-gray-800 text-2xl"
                >
                    <FontAwesomeIcon icon={faGithub} />
                </a>
                <a
                  href={member.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:text-blue-700 text-2xl"
                >
                  <FontAwesomeIcon icon={faLinkedin} />
                </a>
              </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };
  
  export default TeamSection;
  