
import Blog from "../models/BlogModel.js";


// Get all blogs
const getAllBlogs = async (req, res) => {
  try {
    const blogs = await Blog.find();
  res.status(200).json(blogs); // Return the list of blogs
  } catch (error) {
    console.error("Error fetching blogs:", error);
    res.status(500).json({ message: "Error fetching blogs." });
  }
};
// Get a single blog by ID
const getBlogById = async (req, res) => {
  try {
    const { id } = req.params; // Get the blog ID from the request params
console.log('id if the blog:',id);
    // Find the blog by its ID
    const blog = await Blog.findById(id);

    if (!blog) {
      return res.status(404).json({ message: "Blog not found" });
    }

    res.status(200).json(blog);
  } catch (error) {
    console.error("Error fetching blog:", error);
    res.status(500).json({ message: "Error fetching blog" });
  }
};

const createBlog = async (req, res) => {
  try {
    const { title, content, conclusion, tags, author } = req.body;

    if (!title || !content || !author || !tags) {
      return res
        .status(400)
        .json({ message: "Title, content, tags, and author are required" });
    }

    const mediaUrl = req.file ? `backend/uploads/${req.file.filename}` : null;

    const newBlog = new Blog({ title, content, conclusion, tags, author, media: mediaUrl });

    await newBlog.save();
    res.status(201).json({
      message: "Blog created successfully!",
      blog: newBlog,
    });
  } catch (error) {
    console.error("Error creating blog:", error);
    res.status(500).json({ message: "Error creating blog", error: error.message });
  }
};


// Update Blog
const updateBlog = async (req, res) => {
  try {
    const { id } = req.params; // Get blog ID from the request params
    const { title, content, conclusion, media,tags, author, status, scheduledDate, isPublished } = req.body;

    if (!title || !content || !author || !tags) {
      return res
        .status(400)
        .json({ message: "Title, content, tags, and author are required" });
    }

    const mediaUrl = req.file ? `backend/uploads/${req.file.filename}` : null;

    const updatedFields = {
      title,
      content,
      conclusion,
      media,
      tags,
      author,
      status,
      scheduledDate,
      isPublished,
    };

    if (mediaUrl) {
      updatedFields.media = mediaUrl;
    }

    const updatedBlog = await Blog.findByIdAndUpdate(id, updatedFields, { new: true });

    if (!updatedBlog) {
      return res.status(404).json({ message: "Blog not found" });
    }

    res.status(200).json({
      message: "Blog updated successfully!",
      blog: updatedBlog,
    });
  } catch (error) {
    console.error("Error updating blog:", error);
    res.status(500).json({ message: "Error updating blog", error: error.message });
  }
};


// Create a new blog
// const createBlog = async (req, res) => {
//   try {
//     const { title, content, conclusion, tags, author } = req.body;

//     // Validate that all required fields are provided
//     if (!title || !content || !author || !tags) {
//       return res
//         .status(400)
//         .json({ message: "Title, content, tags, and author are required" });
//     }

//     const newBlog = new Blog({ title, content, conclusion, tags, author });

//     await newBlog.save(); // Save the blog to the database
//     res.status(201).json({
//       message: "Blog created successfully!",
//       blog: newBlog, // Return the created blog for feedback
//     });
//   } catch (error) {
//     console.error("Error creating blog:", error);
//     res.status(500).json({ message: "Error creating blog", error: error.message });
//   }
// };

// // Update a blog
// const updateBlog = async (req, res) => {
//   try {
//     const updatedBlog = await Blog.findByIdAndUpdate(
//       req.params.id,
//       req.body,
//       { new: true }
//     );
//     if (!updatedBlog) {
//       return res.status(404).json({ message: "Blog not found" });
//     }
//     res.status(200).json(updatedBlog);
//   } catch (error) {
//     console.error("Error updating blog:", error);
//     res.status(500).json({ error: "Failed to update blog" });
//   }
// };

// Delete a blog
const deleteBlog = async (req, res) => {
  try {
    const deletedBlog = await Blog.findByIdAndDelete(req.params.id);
    if (!deletedBlog) {
      return res.status(404).json({ message: "Blog not found" });
    }
    res.status(200).json({ message: "Blog deleted successfully" });
  } catch (error) {
    console.error("Error deleting blog:", error);
    res.status(500).json({ error: "Failed to delete blog" });
  }
};

export default { getAllBlogs,getBlogById, createBlog, updateBlog, deleteBlog };