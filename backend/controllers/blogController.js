
// import Blog from "../models/BlogModel.js";


// // Get all blogs
// const getAllBlogs = async (req, res) => {
//   try {
//     const blogs = await Blog.find();
//   res.status(200).json(blogs); // Return the list of blogs
//   } catch (error) {
//     console.error("Error fetching blogs:", error);
//     res.status(500).json({ message: "Error fetching blogs." });
//   }
// };
// // Get a single blog by ID
// const getBlogById = async (req, res) => {
//   try {
//     const { id } = req.params; // Get the blog ID from the request params
// console.log('id if the blog:',id);
//     // Find the blog by its ID
//     const blog = await Blog.findById(id);

//     if (!blog) {
//       return res.status(404).json({ message: "Blog not found" });
//     }

//     res.status(200).json(blog);
//   } catch (error) {
//     console.error("Error fetching blog:", error);
//     res.status(500).json({ message: "Error fetching blog" });
//   }
// };

// const createBlog = async (req, res) => {
//   try {
//     const { title, content, conclusion, tags, author } = req.body;

//     if (!title || !content || !author || !tags) {
//       return res
//         .status(400)
//         .json({ message: "Title, content, tags, and author are required" });
//     }

//     const mediaUrl = req.file ? `backend/uploads/${req.file.filename}` : null;

//     const newBlog = new Blog({ title, content, conclusion, tags, author, media: mediaUrl });

//     await newBlog.save();
//     res.status(201).json({
//       message: "Blog created successfully!",
//       blog: newBlog,
//     });
//   } catch (error) {
//     console.error("Error creating blog:", error);
//     res.status(500).json({ message: "Error creating blog", error: error.message });
//   }
// };


// // Update Blog
// const updateBlog = async (req, res) => {
//   try {
//     const { id } = req.params; // Get blog ID from the request params
//     const { title, content, conclusion, media,tags, author, status, scheduledDate, isPublished } = req.body;

//     if (!title || !content || !author || !tags) {
//       return res
//         .status(400)
//         .json({ message: "Title, content, tags, and author are required" });
//     }

//     const mediaUrl = req.file ? `backend/uploads/${req.file.filename}` : null;

//     const updatedFields = {
//       title,
//       content,
//       conclusion,
//       media,
//       tags,
//       author,
//       status,
//       scheduledDate,
//       isPublished,
//     };

//     if (mediaUrl) {
//       updatedFields.media = mediaUrl;
//     }

//     const updatedBlog = await Blog.findByIdAndUpdate(id, updatedFields, { new: true });

//     if (!updatedBlog) {
//       return res.status(404).json({ message: "Blog not found" });
//     }

//     res.status(200).json({
//       message: "Blog updated successfully!",
//       blog: updatedBlog,
//     });
//   } catch (error) {
//     console.error("Error updating blog:", error);
//     res.status(500).json({ message: "Error updating blog", error: error.message });
//   }
// };

// // Delete a blog
// const deleteBlog = async (req, res) => {
//   try {
//     const deletedBlog = await Blog.findByIdAndDelete(req.params.id);
//     if (!deletedBlog) {
//       return res.status(404).json({ message: "Blog not found" });
//     }
//     res.status(200).json({ message: "Blog deleted successfully" });
//   } catch (error) {
//     console.error("Error deleting blog:", error);
//     res.status(500).json({ error: "Failed to delete blog" });
//   }
// };

// export default { getAllBlogs,getBlogById, createBlog, updateBlog, deleteBlog };

// MYSQL

// Import the MySQL connection
import connectDB from '../config/db.js';

// Get all blogs
export const getAllBlogs = async (req, res) => {
  try {
    const db = await connectDB();  // Await the database connection
    const [rows] = await db.query('SELECT * FROM blogs');
    res.status(200).json(rows);
  } catch (error) {
    console.error('Error fetching blogs:', error);
    res.status(500).json({ message: 'Error fetching blogs.' });
  }
};

// Get blog by ID
export const getBlogById = async (req, res) => {
  const { id } = req.params;
  try {
    const db = await connectDB();  // Await the database connection
    const [rows] = await db.query('SELECT * FROM blogs WHERE id = ?', [id]);
    if (rows.length === 0) {
      return res.status(404).json({ message: 'Blog not found.' });
    }
    res.status(200).json(rows[0]);
  } catch (error) {
    console.error('Error fetching blog:', error);
    res.status(500).json({ message: 'Error fetching blog.' });
  }
};

// Create a new blog
export const createBlog = async (req, res) => {
  const { title, content, tags, author } = req.body;
  const media = req.file ? `uploads/${req.file.filename}` : null;

  try {
    const db = await connectDB();  // Await the database connection
    const [result] = await db.query(
      'INSERT INTO blogs (title, content, media, tags, author) VALUES (?, ?, ?, ?, ?)',
      [title, content, media, tags, author]
    );
    res.status(201).json({ message: 'Blog created successfully!', blogId: result.insertId });

    db.end();  // Close the connection after the query
  } catch (error) {
    console.error('Error creating blog:', error);
    res.status(500).json({ message: 'Error creating blog.' });
  }
};
// export const createBlog = async (req, res) => {
//   const { title, content, tags, author } = req.body;
//   const media = req.file ? `uploads/${req.file.filename}` : null;

//   try {
//     const [result] = await db.query(
//       'INSERT INTO blogs (title, content, media, tags, author) VALUES (?, ?, ?, ?, ?)',
//       [title, content, media, tags, author]
//     );
//     res.status(201).json({ message: 'Blog created successfully!', blogId: result.insertId });
//   } catch (error) {
//     console.error('Error creating blog:', error);
//     res.status(500).json({ message: 'Error creating blog.' });
//   }
// };

// Update a blog by ID
export const updateBlog = async (req, res) => {
  const { id } = req.params;
  const { title, content, tags, author } = req.body;
  const media = req.file ? `uploads/${req.file.filename}` : null;

  try {
    const db = await connectDB();  // Await the database connection
    const [result] = await db.query(
      'UPDATE blogs SET title = ?, content = ?, media = ?, tags = ?, author = ? WHERE id = ?',
      [title, content, media, tags, author, id]
    );

    if (result.affectedRows === 0) {
      return res.status(404).json({ message: 'Blog not found.' });
    }

    res.status(200).json({ message: 'Blog updated successfully!' });
  } catch (error) {
    console.error('Error updating blog:', error);
    res.status(500).json({ message: 'Error updating blog.' });
  }
};

// Delete a blog by ID
export const deleteBlog = async (req, res) => {
  const { id } = req.params;

  try {
    const db = await connectDB();  // Await the database connection
    const [result] = await db.query('DELETE FROM blogs WHERE id = ?', [id]);

    if (result.affectedRows === 0) {
      return res.status(404).json({ message: 'Blog not found.' });
    }

    res.status(200).json({ message: 'Blog deleted successfully!' });
  } catch (error) {
    console.error('Error deleting blog:', error);
    res.status(500).json({ message: 'Error deleting blog.' });
  }
};
export default { getAllBlogs,getBlogById, createBlog, updateBlog, deleteBlog };
