import React from 'react';

const BlogAnalytics = ({ analytics }) => {
  return (
    <div className="p-6 bg-white rounded-lg shadow-lg">
      <h2 className="text-2xl font-semibold mb-4">Blog Analytics</h2>
      <div className="grid grid-cols-2 gap-6">
        <div className="bg-blue-100 p-4 rounded-md text-center">
          <h3 className="text-xl font-bold">{analytics.views}</h3>
          <p className="text-sm">Total Views</p>
        </div>
        <div className="bg-green-100 p-4 rounded-md text-center">
          <h3 className="text-xl font-bold">{analytics.shares}</h3>
          <p className="text-sm">Total Shares</p>
        </div>
      </div>
    </div>
  );
};

export default BlogAnalytics;
