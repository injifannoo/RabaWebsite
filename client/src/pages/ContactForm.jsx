import React, { useState, useRef, useEffect } from "react";
import axios from "axios";
import { motion, useAnimation } from "framer-motion";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState(""); // For success or error messages
  const controls = useAnimation();
  const formRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            controls.start({
              opacity: 1,
              y: 0,
              transition: { duration: 0.5, ease: "easeOut" },
            });
          } else {
            controls.start({
              opacity: 0,
              y: 50,
              transition: { duration: 0.5, ease: "easeOut" },
            });
          }
        });
      },
      { threshold: 0.1 }
    );

    if (formRef.current) {
      observer.observe(formRef.current);
    }

    return () => {
      if (formRef.current) {
        observer.unobserve(formRef.current);
      }
    };
  }, [controls]);

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus(""); // Clear previous status

    try {
      const response = await axios.post("http://localhost:3000/api/contact", formData);

      if (response.status === 201) {
        setStatus("Message sent successfully!");
        setFormData({ name: "", email: "", message: "" }); // Clear form
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      if (error.response && error.response.data && error.response.data.error) {
        setStatus(error.response.data.error); // Display the error from the backend
      } else {
        setStatus("Failed to send message. Please try again later.");
      }
    }
  };

  return (
    <motion.div
      className="max-w-7xl bg-white text-secondary font-custom contact-form-container flex flex-col md:flex-row md:space-x-10 mt-8"
      ref={formRef}
      initial={{ opacity: 0, y: 50 }}
      animate={controls}
    >
      {/* description Section */}
      <div className="w-full md:w-1/3 p-6 md:p-8 bg-gradient-to-r from-indigo-500 via-purple-600 to-blue-600 text-white rounded-2xl shadow-xl flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl md:text-4xl font-extrabold text-white mb-6">Let's Connect!</h2>
          <p className="text-base md:text-lg mb-8 leading-relaxed">
            Have questions? Need support? Or just a brilliant idea to share?
            We’re here to make it happen. Drop us a message and let’s create something amazing together! 🚀✨
          </p>

          <div className="bg-white bg-opacity-20 p-6 rounded-xl shadow-lg">
            <h3 className="text-xl font-semibold mb-3 text-yellow-300">Contact Us:</h3>
            <p className="mb-2">📍 <strong>Address:</strong> Addis Ababa, Ethiopia</p>
            <p className="mb-2">📧 <strong>Email:</strong>
              <a href="mailto:info@rabatechnologies.com" className="text-yellow-200 hover:text-yellow-400 ml-1">
                info@rabatechnologies.com
              </a>
            </p>
            <p className="mb-2">📞 <strong>Phone:</strong>
              <a href="tel:+251962408198" className="text-yellow-200 hover:text-yellow-400 ml-1">
                +251962408198
              </a> /
              <a href="tel:+251972900847" className="text-yellow-200 hover:text-yellow-400 ml-1">
                +251972900847
              </a>
            </p>
          </div>
        </div>
      </div>

      {/* Form Section */}
      <div className="form-section w-full md:w-2/3 px-4 md:px-8 py-6 md:py-8 bg-white rounded-lg shadow-lg mt-6 md:mt-0">
        <h1 className="text-blue-700 text-2xl md:text-3xl font-bold text-center mb-8">Contact Us</h1>
        <form onSubmit={handleSubmit} className="space-y-6">
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Your Name"
            className="bg-gray-100 w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            required
          />
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Your Email"
            className="bg-gray-100 w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            required
          />
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Your Message"
            className="bg-gray-100 w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            required
          ></textarea>
          <button
            type="submit"
            className="w-full p-4 bg-indigo-600 text-white font-semibold rounded-lg hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          >
            Send Message
          </button>
        </form>

        {status && (
          <p
            className={`mt-4 text-center ${status.includes("successfully") ? "text-green-500" : "text-red-500"
              }`}
          >
            {status}
          </p>
        )}
      </div>
    </motion.div>
  );
};

export default ContactForm;