import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';  // Hook to access URL parameters
import { CalendarIcon } from '@heroicons/react/24/outline';


const BlogDetailPage = () => {
  const { id } = useParams();  // Get the blog ID from the URL
  const [blog, setBlog] = useState(null);

  useEffect(() => {
    // Fetch the full blog content from an API or data source
    fetch(`http://localhost:3000/api/blogs/${id}`)  // Assuming you have a backend or data source to fetch from
      .then((response) => response.json())
      .then((data) => setBlog(data))
      .catch((error) => console.error('Error fetching blog:', error));
  }, [id]);

  if (!blog) {
    return <div>Loading...</div>;
  }
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
   
      <div className="items-center bg-gray-200 p-6 mt-20 rounded-lg shadow-md hover:shadow-lg min-h-[400px] h-auto">
      {/* Main Blog Card Content */}
      <div className="flex flex-col justify-start items-center ml-20 mr-20">
        <div className="w-full h-fit hover:bg-[#FAF8F5] flex justify-center items-center p-2">
          {blog.media && ( // Check for media type and display accordingly
            blog.media.endsWith(".mp4") ? (
              <video controls src={`http://localhost:3000/${blog.media}`} className="w-full h-full object-cover mb-4"></video>
            ) : (
              <img src={`http://localhost:3000/${blog.media}`} alt="Blog Media" className="w-full h-full object-cover mb-4" />
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
          <h3 className="text-xl  font-semibold mb-4">{blog.title}</h3>
          <div className="text-gray-700 text-lg mb-4"
            dangerouslySetInnerHTML={{ __html: blog.content}}
          />
          {blog.tags && blog.tags.length > 0 && (
            <div className="mt-2 flex flex-wrap">
              {renderTags(blog.tags)}
            </div>
          )}
         
        </div>
      </div>
    </div>
     
  );
};

export default BlogDetailPage;
