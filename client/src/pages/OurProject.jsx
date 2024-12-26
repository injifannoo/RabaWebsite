
import React from "react";

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
]

const Projects = () => {
    return (
        <div className="bg-white w-full text-secondary font-custom">
            <div className="flex flex-col justify-center items-center my-10">
                <h2 className="text-center text-3xl font-bold text-black mb-12">Our projects</h2>
                <div className="line"></div>
            </div>
            <div className="grid md:grid-cols-3 max-w-[1200px] md:gap-14 m-auto px-3 my-10">
                {projects.map((project, indx) => (
                    <div
                        key={indx}
                        className="flex flex-col justify-center items-center rounded-lg  group overflow-hidden transition-transform duration-300 transform hover:scale-105 border hover:bg-[#F1F4F3]"
                    >
                        <div className="w-full h-full hover:bg-[#FAF8F5] flex justify-center items-center p-2">
                            <img
                                width={200}
                                height={150}
                                src={project.imageUrl}
                                alt={project.title}
                            />
                        </div>
                        <div className="flex flex-col justify-center items-center p-5 my-5">
                            <h1 className="text-2xl mb-3 text-primary">{project.title}</h1>
                            <p className="text-center">{project.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Projects;
