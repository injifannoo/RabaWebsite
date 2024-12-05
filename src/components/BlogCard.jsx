import React, { useState } from 'react';

const BlogCard = ({ blog }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleToggle = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className=" bg-white p-4 rounded-lg shadow-md hover:shadow-lg">
      <div className="text-justify ml-10 my-10">
     <div className="grid grid-cols-2 gap-6 px-4 md-4"> 
      <p className="text-sm text-gray-500 align-baseline">{new Date(blog.date).toLocaleDateString()}</p>
      <p className="text-sm text-gray-500 align-middle">By {blog.author}</p>
      </div>
      <h3 className="text-xl font-semibold mb-4">{blog.title}</h3>
      <p className="text-gray-700 text-justify">
        {isExpanded ? blog.content : `${blog.content.slice(0, 100)}...`}
      </p>
      {/* <p className="text-gray-700">{blog.conclusion}</p> */}
      <p className="text-sm text-gray-500">Tags: {blog.tags}</p>
      <button
        onClick={handleToggle}
        className="mt-2 text-blue-500 hover:underline focus:outline-none"
      >
        {isExpanded ? 'Show Less' : 'Read More'}
      </button>
      </div>
    </div>
  );
};

export default BlogCard;
