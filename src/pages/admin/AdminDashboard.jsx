import React, { useEffect, useState } from 'react';
import BlogList from '../../components/Blog/BlogList';
//import createBlog from '../../components/Blog/createBlog';
import { useNavigate } from 'react-router-dom';

const AdminDashboard = () => {
  const navigate = useNavigate();

  const handleCreateBlog = () => {
    navigate('/create-blog'); // Navigate to the "Create Blog" page
  };

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-7xl mx-auto bg-white rounded-lg shadow-lg p-6">
        <h1 className="text-3xl font-semibold text-gray-800 mb-6">Dashboard</h1>


         {/* Create Blog Button */}
         <div className="flex justify-end mb-4">
          <button
            onClick={handleCreateBlog}
            className="bg-blue-600 text-white px-6 py-3 rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2"
          >
            Create Blog
          </button>
        </div>
        {/* Display the BlogList component */}
        <BlogList />
      </div>
    </div>
  );
};

export default AdminDashboard;

