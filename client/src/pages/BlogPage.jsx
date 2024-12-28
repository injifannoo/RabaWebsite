import React, { useState, useEffect } from 'react';
import axios from 'axios';
import BlogCard from '../components/BlogCard';
import { Link } from 'react-router-dom';

const LatestBlogs = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    // Fetch blogs from the backend API
    axios.get('http://localhost:3000/api/blogs')
      .then((response) => {
        setBlogs(response.data);
      })
      .catch((error) => {
        console.error('Error fetching blogs:', error);
      });
  }, []);

  return (
    <div className="bg-white w-full">
      <div className="flex flex-col justify-center items-center my-10">
        <h2 className="text-center text-3xl font-bold  text-blue-700 mb-3">Recent Blogs</h2>
        <hr className="w-24 h-1 bg-blue-500 border-0 rounded " />

        <div className="line"></div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 gap-6 md:px-4 md:mx-10">
        {blogs.slice(0, 3).map((blog) => (
          <BlogCard key={blog._id} blog={blog} />
        ))}
      </div>
      <div className="flex justify-center mt-10">
        <Link to="/all-blogs">
          <button
            className="bg-blue-600 text-white hover:bg-blue-700 focus:outline-none text-lg font-medium transition duration-200 ease-in-out px-6 py-3 rounded-full"
          >
            See More
          </button>
        </Link>
      </div>
    </div>
  );
};

export default LatestBlogs;