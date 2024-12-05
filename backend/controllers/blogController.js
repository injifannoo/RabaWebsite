import Blog from '../models/BlogModel.js'; 

// Get all blogs
 const getAllBlogs = async (req, res) => {
  try {
    const blogs = await Blog.find();
    res.status(200).json(blogs);  // Return the list of blogs
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error fetching blogs.' });
  }
};

// Create a new blog
 const createBlog = async (req, res) => {
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
// Update a blog
 const updateBlog= async (req, res) => {
  try {
    const updatedBlog = await Blog.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.status(200).json(updatedBlog);
  } catch (error) {
    res.status(500).json({ error: 'Failed to update blog' });
  }
};

// Delete a blog
 const deleteBlogs= async (req, res) => {
  try {
    await Blog.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: 'Blog deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Failed to delete blog' });
}
};
export default { getAllBlogs, createBlog, updateBlog, deleteBlogs };
