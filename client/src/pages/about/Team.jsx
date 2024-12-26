import React, { useEffect, useRef } from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import { motion, useAnimation } from "framer-motion";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

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
