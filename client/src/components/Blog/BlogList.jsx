import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


const BlogList = () => {
  const [blogs, setBlogs] = useState([]);
  const navigate = useNavigate();  // Initialize navigate

  useEffect(() => {
    // Fetch blogs from the backend API
    axios.get('http://localhost:3000/api/blogs')
      .then((response) => {
        setBlogs(response.data);  // Set the fetched blogs
      })
      .catch((error) => {
        console.error('Error fetching blogs:', error);  // Handle errors
      });
  }, []);

  const handleDelete = async (id) => {
    const confirmDelete = window.confirm("Are you sure you want to delete this blog?");
    if (confirmDelete) {
      const token = localStorage.getItem('adminToken');
      console.log('The token is:', token);
      if (!token) {
        alert('You are not logged in!');
        // Optionally redirect the user to the login page
        // window.location.href = '/admin';
        return;
      }

      try {
        await axios.delete(`http://localhost:3000/api/blogs/${id}`, {
          headers: {
            Authorization: `Bearer ${token}`, // Pass the token in the Authorization header
          },
        });

        // Remove the blog from the state after successful deletion
        setBlogs(prevBlogs => prevBlogs.filter(blog => blog._id !== id));
      } catch (error) {
        alert('Error deleting blog');
        console.error('Error deleting blog:', error);
      }
    }
  };

  const handleEdit = (id) => {
    // Redirect to an edit page with the blog ID
    navigate(`/edit-blog/${id}`);
  };

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
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-7xl mx-auto bg-white rounded-lg shadow-lg p-6">
        <h1 className="text-3xl font-semibold text-gray-800 mb-6">Manage Blogs</h1>
        <div className="overflow-x-auto shadow-md rounded-lg">
          <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 gap-6 px-4 mx-10">
            {blogs.length > 0 ? (
              blogs.map(blog => (
                <div key={blog._id} className="bg-white rounded-lg shadow-md p-6">
                  <img src={blog.media} alt="Blog Media" className="w-full h-auto" />
                  <h2 className="text-xl font-semibold text-gray-800">{blog.title}</h2>
                  <div
                    className="text-gray-700 text-lg mb-4"
                    dangerouslySetInnerHTML={{ __html: blog.content }}
                  />
                  <p className="text-gray-600 mt-2">Media: <a href={blog.media} target="_blank" rel="noopener noreferrer">{blog.media}</a> </p>
                  {/* Display Tags */}
                  {blog.tags && blog.tags.length > 0 && (
                    <div className="mt-2">
                      <span className="font-semibold text-gray-700"> </span>
                      {renderTags(blog.tags)}
                    </div>
                  )}                  <p className="text-gray-600 mt-2"> Author: {blog.author}</p>
                  <p className="text-gray-600 mt-2"> Status: {blog.status}</p>
                  <p className="text-gray-600 mt-2"> Created At: {blog.createdAt}</p>
                  <p className="text-gray-600 mt-2">Scheduled at: {blog.scheduledDate}</p>
                  <p className="text-gray-600 mt-2">{blog.isPublished ? 'Published' : 'Not Published'}</p>
                  <p className="text-gray-600 mt-2">{blog.views}</p>
                  <p className="text-gray-600 mt-2">{blog.shares}</p>
                  <p className="text-gray-600 mt-2">{blog.comments}</p>
                  <div className="mt-4 flex space-x-4">
                    <button onClick={() => handleEdit(blog._id)}
                      className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition duration-300">
                      Edit
                    </button>
                    <button
                      onClick={() => handleDelete(blog._id)}
                      className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition duration-300"
                    >
                      Delete
                    </button>
                  </div>
                </div>
              ))
            ) : (
              <div className="text-center py-4 text-gray-600">No blogs available</div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogList;
