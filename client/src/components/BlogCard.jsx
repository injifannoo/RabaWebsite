import React, { useState } from 'react';
import { CalendarIcon } from '@heroicons/react/24/outline'; // Correct import path for v2

const BlogCard = ({ blog }) => {
  const [showModal, setShowModal] = useState(false);

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
  return (
    <div className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg">
      {blog.media && (
        blog.media.endsWith(".mp4") ? (
          <video controls src={blog.media} className="w-full h-auto"></video>
        ) : (
          <img src={blog.media} alt="Blog Media" className="w-full h-auto" />
        )
      )}

      <div className="text-justify ml-10 my-10">
        <div className="grid grid-cols-2 gap-6 px-4 md-4">
          {/* Add Calendar Icon before the date */}
          <div className="flex items-center text-sm text-gray-500">
            <CalendarIcon className="h-5 w-5 text-gray-400 mr-2" />
            <p>{new Date(blog.createdAt).toLocaleDateString()}</p>
          </div>
        </div>
        <h3 className="text-xl font-semibold mb-4">{blog.title}</h3>
        <div
          className="text-gray-700 text-lg mb-4"
          dangerouslySetInnerHTML={{ __html: blog.content.slice(0, 150) + '...' }}
        />
 {/* Display Tags */}
 {blog.tags && blog.tags.length > 0 && (
          <div className="mt-2">
            <span className="font-semibold text-gray-700"> </span>
            {renderTags(blog.tags)}
          </div>
        )}

        <div className="flex items-center justify-between mt-6">
          <button
            onClick={handleToggle}
            className="text-blue-600 hover:text-blue-800 focus:outline-none text-lg font-medium transition duration-200 ease-in-out"
          >
            Read More
          </button>
        </div>
      </div>

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
                <video controls src={blog.media} className="w-full h-auto"></video>
              ) : (
                <img src={blog.media} alt="Blog Media" className="w-full h-auto" />
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
