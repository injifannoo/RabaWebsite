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
      <div className="bg-gray-200 py-20">
        <h2 className="text-center text-3xl font-bold text-black mb-12">OUR TEAM</h2>
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
          {teamMembers.map((member) => (
            <div
              key={member.id}
              className="w-auto rounded-lg bg-white shadow-lg p-8 flex flex-col items-center transition transform hover:scale-105 hover:shadow-2xl"
            >
              <img
                src={member.image}
                alt={member.name}
                className="w-32 h-32 rounded-full border-4 border-white shadow-md mb-4"
              />
              <div className="text-center">
                <h3 className="text-xl font-semibold text-gray-800">{member.name}</h3>
                <p className="text-sm text-indigo-500 mb-3">{member.role}</p>
                <p className="text-sm text-gray-600">{member.description}</p>
                <div className="flex justify-center space-x-6 mt-6">
                  <a
                    href={member.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-500 hover:text-gray-800 text-3xl"
                  >
                    <FontAwesomeIcon icon={faGithub} />
                  </a>
                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 hover:text-blue-700 text-3xl"
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