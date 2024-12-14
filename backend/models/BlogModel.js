import mongoose from "mongoose";

const blogSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,  // Ensures title is provided when creating a blog
    },
    content: {
      type: String,
      required: true,  // Ensures content is provided
    },

    media: { type: String },
    tags: {
      type: String,
      required: true,  // Ensures author is specified
    },
    author: {
      type: String,
      required: true,  // Ensures author is specified
    },
    status: { type: String, enum: ['draft', 'published'], default: 'draft' },

    createdAt: {
      type: Date,
      default: Date.now,  // Default date to the current date and time
    },
  scheduledDate: { type: Date },
  isPublished: { type: Boolean, default: false },
  views: { type: Number, default: 0 },
  shares: { type: Number, default: 0 },
  comments: [{ body: String, date: Date }],
  },
  { timestamps: true }  // Adds createdAt and updatedAt fields automatically
);

const Blog = mongoose.model("Blog", blogSchema);
export default Blog;
