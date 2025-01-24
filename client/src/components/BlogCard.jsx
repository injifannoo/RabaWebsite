import React from "react";
import { CalendarIcon } from '@heroicons/react/24/outline';
import { useNavigate } from "react-router-dom";  // Import useNavigate

const BlogCard = ({ blog }) => {
  const navigate = useNavigate();  // Hook to navigate to another page

  // Function to navigate to the full blog content page
  const handleReadMore = () => {
    navigate(`/blog-detail/${blog.id}`);  // Navigates to the full content page with the blog's ID
  };

  // Function to render tags
  const renderTags = (tags) => {
    return tags
      .split(',') // Split by commas
      .map((tag, index) => (
        <a
          key={index}
          href={`/tags/${tag.trim()}`}
          className="text-blue-600 hover:text-blue-800 transition duration-200 ease-in-out ml-2"
        >
          {tag.trim()}
        </a>
      ));
  };

  return (
    <div className="bg-gray-200 p-6 rounded-lg shadow-md hover:shadow-lg min-h-[400px] h-auto">
      {/* Main Blog Card Content */}
      <div className="flex flex-col justify-start items-center">
        <div className="w-full h-fit hover:bg-[#FAF8F5] flex justify-center items-center p-2">
          {blog.media && ( // Check for media type and display accordingly
            blog.media.endsWith(".mp4") ? (
              <video controls src={`http://localhost:3000/${blog.media}`} className="w-full h-[200px] object-cover mb-4"></video>
            ) : (
              <img src={`http://localhost:3000/${blog.media}`} alt="Blog Media" className="w-full h-[200px] object-cover mb-4" />
            )
          )}
        </div>

        <div className="flex flex-col w-full justify-start items-start p-2 md:p-5">
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
          {blog.tags && blog.tags.length > 0 && (
            <div className="mt-2 flex flex-wrap max-w-[400px]">
              {renderTags(blog.tags)}
            </div>
          )}
          <div className="flex items-center justify-between mt-6">
            <button
              onClick={handleReadMore}
              className="text-black hover:text-white hover:bg-blue-600 focus:outline-none text-lg font-medium transition duration-200 ease-in-out px-4 py-2 rounded-full border border-black"
            >
              Read More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
