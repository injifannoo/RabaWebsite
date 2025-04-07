import React, { useEffect, useRef } from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import { motion, useAnimation } from "framer-motion";

const projects = [
    {
        title:"Jupiter Tech Website",
        imageUrl:"client/src/assets/images/project_images/jupiter.png", 
        description: "The website for Jupiter Tech includes a student registration system and an admin panel. It allows students to register for courses and access relevant information, while the admin panel enables administrators to track registrations, and perform other administrative tasks effectively.",
    },
    {
        title:"Job Board",
        imageUrl:"client/src/assets/images/project_images/job_board.png", 
        description: "The job board web app connects job seekers with employers through profile creation and job applications. It allows employers to post job openings and manage candidates, while providing advanced search filters and personalized job recommendations for users.",
    },
    {
        title:"Kasbarks Pet Care Mobile App",
        imageUrl:"client/src/assets/images/project_images/kasbarks11.jpg", 
        description: "This project focused on enhancing the user interface and integrating essential features into a mobile application, such as backend APIs, user authentication, and real-time notifications. I improved the UI for a better user experience, integrated backend services, and implemented secure user authentication. I also set up a real-time notification system and ensured the app's compatibility across different devices and screen sizes. The result was a user-friendly, responsive app with seamless backend integration.",
    },
    {
        title:"samuelmekonnen.com",
        imageUrl:"client/src/assets/images/project_images/samuel.png", 
        description: "The Samuel Mekonnen Law Office website is a platform offering legal information and consultation services. It highlights the office’s commitment to providing high-standard legal services, including free consultations. The website connects clients to legal representation and consultation in Ethiopia.",
    },
    {
        title:"wbklegatafo.com",
        imageUrl:"client/src/assets/images/project_images/tafo-church.png", 
        description: "The Lega Tafo B/K Church website is a platform designed to proclaim God's word globally. It serves as a digital ministry tool, enabling the church to share messages, teachings, and spiritual resources with a worldwide audience while providing information about church services, events, and programs to foster community and inspire faith.",
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
            <TransitionGroup className="grid grid-cols-2 md:grid-cols-3 max-w-[1200px] gap-5 md:gap-14 m-auto px-3 my-5 "> 
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
                            <div className="h-full w-full object-cover hover:bg-[#FAF8F5] hover:translate-x-0 hover:scale-105 flex justify-center items-center p-">
                                <img
                                className=" h-full w-full object-cover object-center rounded-lg"
                                    
                                    src={project.imageUrl}
                                    alt={project.title}
                                />
                            </div>
                            <div className="flex flex-col justify-center items-cente p- md:p-2 ">
                                <h1 className="text-lg md:text-xl mb-1 md:mb-3 text-blue-700">{project.title}</h1>
                                <p className="text-sm text-justify text-gray-700">{project.description}</p>
                            </div>
                        </motion.div>
                    </CSSTransition>
                ))}
            </TransitionGroup>
        </div>
    );
};

export default Projects;
