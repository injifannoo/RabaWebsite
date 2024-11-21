const ContactForm = () => ( 
    <div className="contact-form-container flex flex-col md:flex-row md:space-x-4 mt-auto">
      {/* Form Section */}
      <div className="form-section w-full md:w-2/3 px-4">
        <h1 className="text-2xl md:text-3xl font-bold text-center">Contact Us</h1>
        <form className="mt-6 max-w-md mx-auto space-y-4">
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
      <div className="description-section w-full md:w-1/3 border border-black p-8 bg-gray-200 mt-6 md:mt-0">
        <p>
          Raba technologies is a digital company based in Ethiopia. Our area of
          expertise is web and mobile app development. With a precision
          commitment to results, the Raba team has refined the science of the
          digital world.
        </p>
      </div>
    </div>
  );
  
  export default ContactForm;  