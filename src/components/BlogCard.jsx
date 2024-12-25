// import React, { useState } from 'react';

// const BlogCard = ({ blog }) => {
//   const [isExpanded, setIsExpanded] = useState(false);

//   const handleToggle = () => {
//     setIsExpanded(!isExpanded);
//   };

//   return (
//     <div className=" bg-white p-4 rounded-lg shadow-md hover:shadow-lg">
//       <div className="text-justify ml-10 my-10">
//      <div className="grid grid-cols-2 gap-6 px-4 md-4"> 
//       <p className="text-sm text-gray-500 align-baseline">{new Date(blog.date).toLocaleDateString()}</p>
//       <p className="text-sm text-gray-500 align-middle">By {blog.author}</p>
//       </div>
//       <h3 className="text-xl font-semibold mb-4">{blog.title}</h3>
//       <p className="text-gray-700 text-justify">
//         { isExpanded ? blog.content : `${blog.content.slice(0, 100)}...`}
//       </p>
//       {/* <p className="text-gray-700">{blog.conclusion}</p> */}
//       <p className="text-sm text-gray-500">Tags: {blog.tags}</p>
//       <button
//         onClick={handleToggle}
//         className="mt-2 text-blue-500 hover:underline focus:outline-none"
//       >
//         {isExpanded ? 'Show Less' : 'Read More'}
//       </button>
//       </div>
//     </div>
//   );
// };

// export default BlogCard;
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

  return (
    <div className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg">
      <div className="text-justify ml-10 my-10">
        <div className="grid grid-cols-2 gap-6 px-4 md-4">
          {/* Add Calendar Icon before the date */}
          <div className="flex items-center text-sm text-gray-500">
            <CalendarIcon className="h-5 w-5 text-gray-400 mr-2" />
            <p>{new Date(blog.createdAt).toLocaleDateString()}</p>
          </div>
        </div>
        <h3 className="text-xl font-semibold mb-4">{blog.title}</h3>
        <p className="text-gray-700 text-justify">
          {blog.content.slice(0, 150)}...
        </p>

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
            <h2 className="text-3xl font-semibold text-gray-800 mb-6">{blog.title}</h2>
            <p className="text-gray-700 text-lg mb-4">{blog.content}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default BlogCard;
