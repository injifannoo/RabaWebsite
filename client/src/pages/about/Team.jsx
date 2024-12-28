// import React from "react";
// import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
// import { faGithub } from "@fortawesome/free-brands-svg-icons";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// const TeamSection = () => {
//   const teamMembers = [
//     {
//       id: 1,
//       name: "User One",
//       role: "Front-end Developer",
//       image: "https://via.placeholder.com/150", // Replace with actual image
//       description:
//         "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.",
//       github: "#",
//       linkedin: "#",
//     },
//     {
//       id: 2,
//       name: "User Two",
//       role: "Backend Developer",
//       image: "https://via.placeholder.com/150",
//       description:
//         "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.",
//       github: "#",
//       linkedin: "#",
//     },
//     {
//       id: 3,
//       name: "User Three",
//       role: "Mobile Developer",
//       image: "https://via.placeholder.com/150",
//       description:
//         "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.",
//       github: "#",
//       linkedin: "#",
//     },
//     {
//       id: 3,
//       name: "User Three",
//       role: "Mobile Developer",
//       image: "https://via.placeholder.com/150",
//       description:
//         "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.",
//       github: "#",
//       linkedin: "#",
//     },
//   ];

//   return (
//     <div className="bg-white w-full text-secondary font-custom ">
//       <div className="flex flex-col justify-center items-center my-10">
//         <h2 className="text-center text-3xl font-bold text-black mb-12">Our Team</h2>
//         <div className="line"></div>
//       </div>
//       <div className="grid md:grid-cols-3 max-w-[1200px] md:gap-14 m-auto px-3 my-10">
//         {teamMembers.map((member) => (
//           <div
//             key={member.id}
//             className="flex flex-col justify-center items-center rounded-lg  group overflow-hidden transition-transform duration-300 transform hover:scale-105 border hover:bg-[#F1F4F3]"
//           >
//             <img
//               src={member.image}
//               alt={member.name}
//               className="w-32 h-32 rounded-full border-4 border-white shadow-md mb-4"
//             />
//             <div className="text-center">
//               <h3 className="text-xl font-semibold text-gray-800">{member.name}</h3>
//               <p className="text-sm text-indigo-500 mb-3">{member.role}</p>
//               <p className="text-sm text-gray-600">{member.description}</p>
//               <div className="flex justify-center space-x-6 mt-6">
//                 <a
//                   href={member.github}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="text-gray-500 hover:text-gray-800 text-3xl"
//                 >
//                   <FontAwesomeIcon icon={faGithub} />
//                 </a>
//                 <a
//                   href={member.linkedin}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="text-blue-500 hover:text-blue-700 text-3xl"
//                 >
//                   <FontAwesomeIcon icon={faLinkedin} />
//                 </a>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default TeamSection;
import React from "react";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const TeamSection = () => {
  const teamMembers = [
    {
      id: 1,
      name: "Ebba Mekonnen Abdeta ",
      role: "Co-Founder & Software Developer",
      image: "https://via.placeholder.com/150", // Replace with actual image
      description:
        "Specializes in MERN stack & Flutter, delivering high-quality software solutions.",
      fullDescription:
        "Ebba Mekonnen Abdeta is a passionate co-founder and software developer specializing in MERN stack and Flutter. With a focus on innovation, he drives technical strategies and builds scalable solutions for web and mobile platforms.",
      github: "#",
      linkedin: "#",
      profileLink: "/team/ebba",
    },
    
      {
        id: 2,
        name: "Enjifano Tamiru Urgessa",
        role: "Co-Founder & Software Developer",
        image: "https://via.placeholder.com/150", // Replace with actual image
        description:
          "Specializes in MERN stack & Flutter, delivering high-quality software solutions.",
        fullDescription:
          "Enjifano Tamiru Urgessa is a passionate co-founder and software developer specializing in MERN stack and Flutter. With a focus on innovation, he drives technical strategies and builds scalable solutions for web and mobile platforms.",
        github: "#",
        linkedin: "#",
        profileLink: "/team/enjifano",
      },
    {
      id: 3,
      name: "Gizachew Haptamariam",
      role: "Co-Founder & Software Developer",
      image: "https://via.placeholder.com/150", // Replace with actual image
      description:
        "Specializes in MERN stack & Flutter, delivering high-quality software solutions.",
      fullDescription:
        "Enjifano Tamiru Urgessa is a passionate co-founder and software developer specializing in MERN stack and Flutter. With a focus on innovation, he drives technical strategies and builds scalable solutions for web and mobile platforms.",
      github: "#",
      linkedin: "#",
      profileLink: "/team/gizachew",
    },
    {
      id: 4,
      name: "Naol Kecha Geda",
      role: "Co-Founder & Software Developer",
      image: "https://via.placeholder.com/150", // Replace with actual image
      description:
        "Specializes in MERN stack & Flutter, delivering high-quality software solutions.",
      fullDescription:
        "Enjifano Tamiru Urgessa is a passionate co-founder and software developer specializing in MERN stack and Flutter. With a focus on innovation, he drives technical strategies and builds scalable solutions for web and mobile platforms.",
      github: "#",
      linkedin: "#",
      profileLink: "/team/naol",
    },
  ];

  return (
    <div className="bg-white w-full text-secondary font-custom ">
      <div className="flex flex-col justify-center items-center my-10">
        <h2 className="text-center text-3xl font-bold text-black mb-12">Our Team</h2>
        <div className="line"></div>
      </div>
      <div className="grid md:grid-cols-3 max-w-[1200px] md:gap-14 m-auto px-3 my-10">
        {teamMembers.map((member) => (
          <div
            key={member.id}
            className="flex flex-col justify-center items-center rounded-lg group overflow-hidden transition-transform duration-300 transform hover:scale-105 border hover:bg-[#F1F4F3]"
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
              <button
                onClick={() => (window.location.href = member.profileLink)}
                className="mt-4 text-blue-600 hover:text-blue-800 text-sm font-medium transition duration-200"
              >
                Read More
              </button>
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
