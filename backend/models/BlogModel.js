// import mongoose from "mongoose";

// const blogSchema = new mongoose.Schema(
//   {
//     title: {
//       type: String,
//       required: true,  // Ensures title is provided when creating a blog
//     },
//     content: {
//       type: String,
//       required: true,  // Ensures content is provided
//     },

//     media: { type: String }, // Field for image path
//     tags: {
//       type: String,
//       required: true,  // Ensures author is specified
//     },
//     author: {
//       type: String,
//       required: true,  // Ensures author is specified
//     },
//     status: { type: String, enum: ['draft', 'published'], default: 'draft' },

//     createdAt: {
//       type: Date,
//       default: Date.now,  // Default date to the current date and time
//     },
//   scheduledDate: { type: Date },
//   isPublished: { type: Boolean, default: false },
//   views: { type: Number, default: 0 },
//   shares: { type: Number, default: 0 },
//   comments: [{ body: String, date: Date }],
//   },
//   { timestamps: true }  // Adds createdAt and updatedAt fields automatically
// );

// const Blog = mongoose.model("Blog", blogSchema);
// export default Blog;
import db from '../config/db.js';

// Define the Blog model
const Blog = {
  // Create a new blog
  create: async (blogData) => {
    const { title, content, media, tags, author, status, scheduledDate, isPublished } = blogData;
    try {
      const [result] = await db.query(
        'INSERT INTO blogs (title, content, media, tags, author, status, scheduledDate, isPublished) VALUES (?, ?, ?, ?, ?, ?, ?, ?)',
        [title, content, media, tags, author, status, scheduledDate, isPublished]
      );
      return result;
    } catch (error) {
      throw new Error('Error creating blog: ' + error.message);
    }
  },

  // Get all blogs
  getAll: async () => {
    try {
      const [rows] = await db.query('SELECT * FROM blogs');
      return rows;
    } catch (error) {
      throw new Error('Error fetching blogs: ' + error.message);
    }
  },

  // Get blog by ID
  getById: async (id) => {
    try {
      const [rows] = await db.query('SELECT * FROM blogs WHERE id = ?', [id]);
      return rows[0]; // Assuming there's only one blog per ID
    } catch (error) {
      throw new Error('Error fetching blog: ' + error.message);
    }
  },

  // Update a blog
  update: async (id, blogData) => {
    const { title, content, media, tags, author, status, scheduledDate, isPublished } = blogData;
    try {
      const [result] = await db.query(
        'UPDATE blogs SET title = ?, content = ?, media = ?, tags = ?, author = ?, status = ?, scheduledDate = ?, isPublished = ? WHERE id = ?',
        [title, content, media, tags, author, status, scheduledDate, isPublished, id]
      );
      return result;
    } catch (error) {
      throw new Error('Error updating blog: ' + error.message);
    }
  },

  // Delete a blog
  delete: async (id) => {
    try {
      const [result] = await db.query('DELETE FROM blogs WHERE id = ?', [id]);
      return result;
    } catch (error) {
      throw new Error('Error deleting blog: ' + error.message);
    }
  }
};

export default Blog;
