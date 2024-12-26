import React, { useEffect, useRef } from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import { motion, useAnimation } from "framer-motion";

const projects = [
    {
        title:"Project 1",
        imageUrl:"client/src/assets/images/projectImage.png", 
        description: "Here the  description  for the project goes. The problems that this project aims to solve and the way it differs from others who offer solution to this problem.  just write a description.",
    },
    {
        title:"Project 2",
        imageUrl:"client/src/assets/images/projectImage.png", 
        description: "Here the  description  for the project goes. The problems that this project aims to solve and the way it differs from others who offer solution to this problem.  just write a description.",
    },
    {
        title:"Project 3",
        imageUrl:"client/src/assets/images/projectImage.png", 
        description: "Here the  description  for the project goes. The problems that this project aims to solve and the way it differs from others who offer solution to this problem.  just write a description.",
    },
    {
        title:"Project 3",
        imageUrl:"client/src/assets/images/projectImage.png", 
        description: "Here the  description  for the project goes. The problems that this project aims to solve and the way it differs from others who offer solution to this problem.  just write a description.",
    },
    {
        title:"Project 4",
        imageUrl:"client/src/assets/images/projectImage.png", 
        description: "Here the  description  for the project goes. The problems that this project aims to solve and the way it differs from others who offer solution to this problem.  just write a description.",
    },
    {
        title:"Project 5",
        imageUrl:"client/src/assets/images/projectImage.png", 
        description: "Here the  description  for the project goes. The problems that this project aims to solve and the way it differs from others who offer solution to this problem.  just write a description.",
    },
];

const Projects = () => {
    const controls = useAnimation();
    const sectionRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        controls.start((i) => ({
                            opacity: 1,
                            x: 0,
                            scale: 1,
                            transition: { duration: 0.5, ease: "easeOut", delay: i * 0.2 }
                        }));
                    } else {
                        controls.start((i) => ({
                            opacity: 0,
                            x: -100,
                            scale: 0.8,
                            transition: { duration: 0.5, ease: "easeOut", delay: i * 0.2 }
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
        <div className="bg w-full text-secondary font-custom" ref={sectionRef}>
            <div className="flex flex-col justify-center items-center my-10">
                <h2 className="text-center text-xl md:text-3xl font-bold text-blue-700 mb-3">Our projects</h2>
                <hr className="w-24 h-1 bg-blue-500 border-0 rounded " />
            </div>
            <TransitionGroup className="grid grid-cols-2 md:grid-cols-3 max-w-[1200px] gap-5 md:gap-14 m-auto px-3 my-10 "> 
                {projects.map((project, indx) => (
                    <CSSTransition
                        key={indx}
                        timeout={300}
                        classNames="fade"
                    >
                        <motion.div
                            className="flex flex-col justify-center items-center rounded-lg group overflow-hidden border bg-white hover:bg-[#F1F4F3] p-4 hover:shadow-lg hover:border-blue-500 hover:transform hover:scale-105"
                            custom={indx}
                            initial={{ opacity: 0, x: -300, scale: 1 }}
                            animate={controls}
                            whileHover={{ scale: 1.1 }}
                        >
                            <div className="w-full h-full hover:bg-[#FAF8F5] hover:translate-x-0 hover:scale-105 flex justify-center items-center p-2">
                                <img
                                    width={200}
                                    height={150}
                                    src={project.imageUrl}
                                    alt={project.title}
                                />
                            </div>
                            <div className="flex flex-col justify-center items-center p-2 md:p-5 md:mb-5">
                                <h1 className="text-lg md:text-2xl mb-3 text-blue-700">{project.title}</h1>
                                <p className="text-xs md:text-sm text-center">{project.description}</p>
                            </div>
                        </motion.div>
                    </CSSTransition>
                ))}
            </TransitionGroup>
        </div>
    );
};

export default Projects;
