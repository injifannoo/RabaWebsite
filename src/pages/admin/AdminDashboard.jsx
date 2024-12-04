import React, { useEffect, useState } from 'react';
import axios from 'axios';

const AdminDashboard = () => {
  const [blogInsights, setBlogInsights] = useState({});
  const [contactMetrics, setContactMetrics] = useState({});

  useEffect(() => {
    const fetchAnalytics = async () => {
      const token = localStorage.getItem('token');
      const config = { headers: { Authorization: `Bearer ${token}` } };

      try {
        const blogResponse = await axios.get('/api/analytics/blogs', config);
        const contactResponse = await axios.get('/api/analytics/contacts', config);
        setBlogInsights(blogResponse.data);
        setContactMetrics(contactResponse.data);
      } catch (error) {
        console.error('Failed to fetch analytics');
      }
    };

    fetchAnalytics();
  }, []);

  return (
    <div className="dashboard">
      <h2>Admin Dashboard</h2>
      <div className="stats">
        <div>
          <h3>Blog Insights</h3>
          <p>Total Blogs: {blogInsights.totalBlogs}</p>
          <p>Published Blogs: {blogInsights.publishedBlogs}</p>
        </div>
        <div>
          <h3>Contact Metrics</h3>
          <p>Total Messages: {contactMetrics.totalMessages}</p>
          <p>Resolved Messages: {contactMetrics.resolvedMessages}</p>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;

