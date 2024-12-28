import React, { useState, useEffect, useRef } from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import { motion, useAnimation } from "framer-motion";
import { CalendarIcon } from '@heroicons/react/24/outline';

const BlogCard = ({ blog }) => {
  const [showModal, setShowModal] = useState(false);
  const controls = useAnimation();
  const sectionRef = useRef(null);

  const handleToggle = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  // Function to split tags by commas (or spaces) and remove extra spaces
  const renderTags = (tags) => {
    return tags
      .split(',') // Split by commas
      .map((tag, index) => (
        <a
          key={index}
          href={`/tags/${tag.trim()}`} // Trim spaces for clean URLs
          className="text-blue-600 hover:text-blue-800 transition duration-200 ease-in-out ml-2"
        >
          {tag.trim()}
        </a>
      ));
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            controls.start((i) => ({
              opacity: 1,
              x: 0,
              scale: 1,
              transition: { duration: 0.1, ease: "easeOut", delay: i * 0.2 },
            }));
          } else {
            controls.start((i) => ({
              opacity: 0,
              x: -100,
              scale: 0.8,
              transition: { duration: 0.5, ease: "easeOut", delay: i * 0.2 },
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
    <div className="bg-gray-200 p-6 rounded-lg shadow-md hover:shadow-lg min-h-[400px] h-auto" ref={sectionRef}>
      <TransitionGroup className="grid grid-cols-2 md:grid-cols-3 max-w-max gap-6 md:gap-14 m-auto px-3 my-10">
        <CSSTransition key={blog.id} timeout={300} classNames="fade">
          <motion.div
            className="flex flex-col min-w-[500px] max-w-full min-h-[400px] h-auto justify-start items-center rounded-lg group overflow-auto border-2 border-blue-500 bg-white p-6 hover:shadow-lg hover:border-blue-500 hover:transform hover:scale-105 transition-all duration-100"
            initial={{ opacity: 0, x: -300, scale: 1 }}
            animate={controls}
            whileHover={{ scale: 1.05 }}
          >
            <div className="w-full h-fit hover:bg-[#FAF8F5] hover:translate-x-0 hover:scale-105 flex justify-center items-center p-2">
              {blog.media && (
                blog.media.endsWith(".mp4") ? (
                  <video controls src={blog.media} className="w-full h-[200px] object-cover mb-4"></video>
                ) : (
                  <img src={blog.media} alt="Blog Media" className="w-full h-[200px] object-cover mb-4" />
                )
              )}
            </div>

            <div className="flex flex-col w-full justify-start items-start p-2 md:p-5 md:mb-5">
              <div className="grid grid-cols-2 gap-6 px-4 md-4">
                <div className="flex items-center text-sm text-gray-500 pb-4">
                  <CalendarIcon className="h-5 w-5 text-gray-400 mr-2" />
                  <p>{new Date(blog.createdAt).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-4">{blog.title}</h3>
              <div className="text-gray-700 text-lg mb-4"
                dangerouslySetInnerHTML={{ __html: blog.content.slice(0, 200) + '...' }}
              />

              {/* Display Tags */}
              {blog.tags && blog.tags.length > 0 && (
                <div className="mt-2 flex flex-wrap max-w-[400px]">
                  <span className="font-semibold text-gray-700"> </span>
                  {renderTags(blog.tags)}
                </div>
              )}

              <div className="flex items-center justify-between mt-6">
                <button
                  onClick={handleToggle}
                  className=" text-black hover:text-white hover:bg-blue-600 focus:outline-none text-lg font-medium transition duration-200 ease-in-out px-4 py-2 rounded-full border border-black"
                >
                  Read More
                </button>
              </div>
            </div>
          </motion.div>
        </CSSTransition>
      </TransitionGroup>

      {/* Full-Screen Modal */}
      {showModal && (
        <div
          className="fixed inset-0 bg-gray-800 bg-opacity-75 flex items-start justify-center z-50 overflow-auto"
          onClick={handleCloseModal}
        >
          <div
            className="bg-white p-6 w-full max-w-4xl h-auto max-h-[90vh] overflow-y-auto rounded-lg shadow-xl mt-16 mx-4 sm:mx-auto"
            onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside the modal
          >
            {/* Close Button at Top-Right Corner */}
            <button
              onClick={handleCloseModal}
              className="absolute top-4 right-4 text-gray-800 text-3xl font-semibold bg-white rounded-full hover:bg-gray-200 transition duration-300 ease-in-out p-3 shadow-lg focus:outline-none"
            >
              &times;
            </button>
            {blog.media && (
              blog.media.endsWith(".mp4") ? (
                <video controls src={blog.media} className="w-full h-auto mb-6"></video>
              ) : (
                <img src={blog.media} alt="Blog Media" className="w-full h-auto mb-6" />
              )
            )}

            <h2 className="text-3xl font-semibold text-gray-800 mb-6">{blog.title}</h2>
            <div
              className="text-gray-700 text-lg mb-4"
              dangerouslySetInnerHTML={{ __html: blog.content }}
            />
            {/* Display Tags */}
            {blog.tags && blog.tags.length > 0 && (
              <div className="mt-2">
                <span className="font-semibold text-gray-700"> </span>
                {renderTags(blog.tags)}
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default BlogCard;
