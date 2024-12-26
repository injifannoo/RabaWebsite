import React, { useEffect, useRef } from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import { motion, useAnimation } from "framer-motion";
import { useNavigate } from "react-router-dom";


const services = [
    {
        title:"Website Development",
        imageUrl:"client/public/images/service-img/web.svg",
        description: "Building high-quality, responsive websites tailored to meet client requirements"
    },
    {
        title:"Mobile Development",
        imageUrl:"client/public/images/service-img/mobile.svg",
        description: " Creating innovative and user-friendly mobile applications for iOS and Android platforms"
    },
    {
        title:"Continous Maintenance",
        imageUrl:"client/public/images/service-img/maintenance.svg",
        description: "Providing ongoing support and maintenance services for websites and applications."
    },
    {
        title:"Backend Development",
        imageUrl:"client/public/images/service-img/backend-dev.svg",
        description: "Building robust backend APIs to facilitate seamless data exchange between applications."
    },
    {
        title:"Graphics Design",
        imageUrl:"client/public/images/service-img/graphics-design.svg",
        description: "Offering visually appealing and engaging graphic design services."
    },
    {
        title:"UI/UX Design",
        imageUrl:"client/public/images/service-img/ui-ux-design.svg",
        description: "creating visually stunning interfaces and seamless user experiences."
    },
];

const Services = () => {
    const navigate = useNavigate();
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
        <div className="bg-slate-50 w-full text-secondary font-custom" ref={sectionRef}>
            <div className="flex flex-col justify-center items-center my-10">
                <h2 className="text-center text-xl md:text-3xl font-bold text-blue-700 mb-1">Our Services</h2>
                <hr className="w-24 h-1 bg-blue-500 border-0 rounded " />
            </div>
            <TransitionGroup className="grid grid-cols-2 md:grid-cols-3 max-w-[1200px] gap-2 md:gap-14 m-auto px-3 my-10">
                {services.map((service, indx) => (
                    <CSSTransition
                        key={indx}
                        timeout={300}
                        classNames="fade"
                    >
                        <motion.div
                            className="flex flex-col justify-center items-center rounded-lg group overflow-hidden border border-blue-500 bg-white bg[#F1F4F3] p-4 hover:shadow-lg hover:border-blue-500 hover:transform hover:scale-105"
                            custom={indx}
                            initial={{ opacity: 0, x: -300, scale: 1 }}
                            animate={controls}
                            whileHover={{ scale: 1.1 }}
                        >
                            <img
                                width={100}
                                height={100}c
                                src={service.imageUrl}
                                alt={service.title}
                            />
                            <div className="text-center mt-4">
                                <h1 className="text-sm md:text-xl text-blue-700 font-bold">{service.title}</h1>
                                <p className="text-xs md:text-lg text-gray-600">{service.description}</p>
                            </div>
                        </motion.div>
                    </CSSTransition>
                ))}
            </TransitionGroup>
        </div>
    );
};

export default Services;
