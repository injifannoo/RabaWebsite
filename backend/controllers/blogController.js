const Blog = require('../models/BlogModel'); 

// Get all blogs
exports.getAllBlogs = async (req, res) => {
  try {
    const blogs = await Blog.find();
    res.status(200).json(blogs);  // Return the list of blogs
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error fetching blogs.' });
  }
};

// Create a new blog
exports.createBlog = async (req, res) => {
    try {
      const { title, content,conclusion,tags, author } = req.body;
  
      // Validate that all required fields are provided
      if (!title || !content || !author) {
        return res.status(400).json({ message: "Title, content, and author are required" });
      }
  
      const newBlog = new Blog({ title, content,conclusion,tags, author });
  
      await newBlog.save();  // Save the blog to the database
      res.status(201).json({
        message: "Blog created successfully!",
        blog: newBlog  // Return the created blog for feedback
      });
    } catch (error) {
      console.error(error);
    res.status(500).json({ message: "Error creating blog", error: error.message });
}
};
