import React, { useEffect, useRef } from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import { motion, useAnimation } from "framer-motion";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import itu from '../../assets/images/profile/itub.jpg';
import { Link } from "react-router-dom";

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
    image: itu, // Replace with actual image
    description:
      "Specializes in MERN stack & Flutter, delivering high-quality software solutions.",
    fullDescription:
      "Enjifano Tamiru Urgessa is a passionate co-founder and software developer specializing in MERN stack and Flutter. With a focus on innovation, he drives technical strategies and builds scalable solutions for web and mobile platforms.",
    github: "https://github.com/injifannoo",
    linkedin: "https://linkedin.com/in/injifanotamiru",
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

const TeamSection = () => {
  const controls = useAnimation();
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            controls.start((i) => ({
              opacity: 1,
              transition: { duration: 0.5, ease: "easeOut", delay: i * 0.5 },
            }));
          } else {
            controls.start((i) => ({
              opacity: 0,
              transition: { duration: 0.5, ease: "easeOut", delay: i * 0.5 },
            }));
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, [controls]);

  return (
    <div className="bg-slate-100 w-full text-secondary font-custom" ref={sectionRef}>
      <div className="flex flex-col justify-center items-center my-10">
        <h2 className="text-center text-xl md:text-3xl font-bold text-blue-700 mb-3">Our Team</h2>
        <hr className="w-24 h-1 bg-blue-500 border-0 rounded " />
      </div>
      <TransitionGroup className="grid md:grid-cols-3 max-w-[1200px] gap-5 md:gap-14 m-auto px-3 my-10">
        {teamMembers.map((member, indx) => (
          <CSSTransition key={member.id} timeout={300} classNames="fade">
            <motion.div
              className="flex flex-col justify-center items-center rounded-lg group overflow-hidden bg-white transition-transform duration-300 transform hover:scale-105 border border-blue-500 hover:bg-[#F1F4F3] py-5"
              custom={indx}
              initial={{ opacity: 0 }}
              animate={controls}
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
                <Link
                  to={member.profileLink}
                  className="mt-4 text-blue-600 hover:text-blue-800 text-sm font-medium transition duration-200"
                >
                  Read More
                </Link>
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
            </motion.div>
          </CSSTransition>
        ))}
      </TransitionGroup>
    </div>
  );
};

export default TeamSection;
