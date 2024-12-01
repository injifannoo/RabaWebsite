const ContactForm = () => ( 
    <div className="contact-form-container flex flex-col md:flex-row md:space-x-4 mt-auto md:justify-between md:mx-20">
      {/* Form Section */}
      <div className="form-section w-full md:w-5/6 p-4 flex flex-col items-center">
        <h1 className="text-2xl md:text-3xl font-bold text-center">Contact Us</h1>
        <form className="mt-6 max-w-lg mx-auto md:mx-10 px-auto space-y-4">
          <input
            type="text"
            placeholder="Your Name"
            className="bg-gray-200 w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="bg-gray-200 w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <textarea
            placeholder="Your Message"
            className="bg-gray-200 w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          ></textarea>
          <button
            type="submit"
            className="w-full p-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          >
            Send Message
          </button>
        </form>
      </div>
  
      {/* Description Section */}
      <div className="description-section w-full md:w-2/3 p-10 bg-gray-200 mt-6 md:mt-20 rounded-md flex items-cente  ">
        <p className="text-lg text-wrap text-justify font-serif">
          Raba technologies is a digital company based in Ethiopia. Our area of
          expertise is web and mobile app development. With a precision
          commitment to results, the Raba team has refined the science of the
          digital world.
        </p>
      </div>
    </div>
  );
  
  export default ContactForm;  