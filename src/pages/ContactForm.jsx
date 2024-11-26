//   export default ContactForm;  
import React, { useState } from "react";
import axios from "axios";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState(""); // For success or error messages

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
      // Check if the error response has an 'error' field
      if (error.response && error.response.data && error.response.data.error) {
        setStatus(error.response.data.error); // Display the error from the backend
      } else {
        setStatus("Failed to send message. Please try again later.");
      }
    }
  };
  
  return (
    <div className="contact-form-container flex flex-col md:flex-row md:space-x-4 mt-auto">
      {/* Form Section */}
      <div className="form-section w-full md:w-2/3 px-4">
        <h1 className="text-2xl md:text-3xl font-bold text-center">Contact Us</h1>
        <form
          onSubmit={handleSubmit}
          className="mt-6 max-w-md mx-auto space-y-4"
        >
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Your Name"
            className="bg-gray-200 w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Your Email"
            className="bg-gray-200 w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Your Message"
            className="bg-gray-200 w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          ></textarea>
          <button
            type="submit"
            className="w-full p-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          >
            Send Message
          </button>
        </form>
        {status && (
          <p
            className={`mt-4 text-center ${
              status.includes("successfully") ? "text-green-500" : "text-red-500"
            }`}
          >
            {status}
          </p>
        )}
      </div>

      {/* Description Section */}
      <div className="description-section w-full md:w-1/3 border border-black p-8 bg-gray-200 mt-6 md:mt-0">
        <p>
          Raba Technologies is a digital company based in Ethiopia. Our area of
          expertise is web and mobile app development. With a precision
          commitment to results, the Raba team has refined the science of the
          digital world.
        </p>
      </div>
    </div>
  );
};

export default ContactForm;
