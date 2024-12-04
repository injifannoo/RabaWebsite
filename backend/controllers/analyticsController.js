const Blog = require('../models/Blog');
const Contact = require('../models/Contact');

// Get blog insights
exports.getBlogInsights = async (req, res) => {
  try {
    const blogCount = await Blog.countDocuments();
    const publishedCount = await Blog.countDocuments({ status: 'published' });

    res.status(200).json({ totalBlogs: blogCount, publishedBlogs: publishedCount });
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch blog insights' });
  }
};

// Get contact form metrics
exports.getContactMetrics = async (req, res) => {
  try {
    const totalMessages = await Contact.countDocuments();
    const resolvedMessages = await Contact.countDocuments({ status: 'resolved' });

    res.status(200).json({ totalMessages, resolvedMessages });
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch contact metrics' });
  }
};
