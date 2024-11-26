import React from 'react';

const BlogCard = ({ blog }) => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg">
      <h3 className="text-xl font-semibold">{blog.title}</h3>
      <p className="text-gray-700">{blog.content.slice(0, 100)}...</p>
      <p className="text-sm text-gray-500">By {blog.author}</p>
      <p className="text-sm text-gray-500">{new Date(blog.date).toLocaleDateString()}</p>
    </div>
  );
};

export default BlogCard;
