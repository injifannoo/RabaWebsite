import aboutUs from "../assets/images/about-us.png";
import { useNavigate } from "react-router-dom";
import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";

const AboutUs = () => {
    const navigate = useNavigate();
    const controls = useAnimation();

    useEffect(() => {
        const handleScroll = () => {
            const scrollY = window.scrollY;
            if (scrollY > 100) {
                controls.start({ opacity: 1, x: 0, scale: 1, transition: { duration: 0.8, ease: "easeOut", staggerChildren: 0.2 } });
            } else {
                controls.start({ opacity: 0, x: -100, scale: 0.8, transition: { duration: 0.8, ease: "easeOut", staggerChildren: 0.2 } });
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, [controls]);

    return (
        <div className="flex flex-col md:flex-row max-w-6xl items-center md:justify-between mx-auto- md:mt-0">
            <motion.div
                className="flex flex-col w-full md:w-1/2 text-left py-0 px-8"
                initial={{ opacity: 0, x: -300, scale: 0.8 }}
                animate={controls}
                transition={{ duration: 0.8, ease: "easeOut", staggerChildren: 0.4 }}
            >
                <motion.h1
                    className="text-lg md:text-3xl font-bold text-start text-blue-700 md:text-center"
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    About Us
                </motion.h1>
                <motion.p
                    className="mt-4 text-base md:text-lg text-justify text-gray-700"
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    Raba Technologies is a software development startup with a mission to build robust platforms that solve our customers' and society's problems.
                    We aim to deliver innovative software solutions to businesses of all sizes.
                </motion.p>
                <motion.div
                    className="flex justify-center gap-5 items-center my-5"
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    <button
                        className="bg-blue-600 py-1 px-2 text-base md:text-xl text-white rounded md:rounded-lg"
                        onClick={() => navigate("/learn-more")}
                    >
                        LEARN MORE
                    </button>

                    <button
                        onClick={() => {
                            const teamSection = document.getElementById("teams");
                            if (teamSection) {
                                teamSection.scrollIntoView({ behavior: "smooth" });
                            }
                        }}
                        className="border border-black py-1 px-2 text-base md:text-xl text-blue-600 rounded md:rounded-lg"
                    >
                        OUR TEAM
                    </button>

                </motion.div>
            </motion.div>

            <motion.div
                className="w-full md:w-1/2 mt-0 md:mt-0 py-0 px-8"
                initial={{ opacity: 0, x: 100, scale: 0.8 }}
                animate={controls}
                transition={{ duration: 0.8, ease: "easeOut", staggerChildren: 0.4 }}
            >
                <motion.img
                    src={aboutUs}
                    alt="About Us"
                    className="max-w-full h-auto object-cover"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                />
            </motion.div>
        </div>
    );
};

export default AboutUs;
