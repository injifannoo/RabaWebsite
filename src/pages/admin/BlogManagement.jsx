import React, { useEffect, useState } from 'react';
import axios from 'axios';

const BlogManagement = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const fetchBlogs = async () => {
      const token = localStorage.getItem('token');
      const config = { headers: { Authorization: `Bearer ${token}` } };

      try {
        const response = await axios.get('/api/blogs', config);
        setBlogs(response.data);
      } catch (error) {
        console.error('Failed to fetch blogs');
      }
    };

    fetchBlogs();
  }, []);

  return (
    <div className="blog-management">
      <h2>Blog Management</h2>
      <button onClick={() => (window.location.href = '/admin/blogs/create')}>Create Blog</button>
      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {blogs.map((blog) => (
            <tr key={blog._id}>
              <td>{blog.title}</td>
              <td>{blog.status}</td>
              <td>
                <button onClick={() => window.location.href = `/admin/blogs/edit/${blog._id}`}>Edit</button>
                <button>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default BlogManagement;
