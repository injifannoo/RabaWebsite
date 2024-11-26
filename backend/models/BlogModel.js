const mongoose = require("mongoose");

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
    author: {
      type: String,
      required: true,  // Ensures author is specified
    },
    date: {
      type: Date,
      default: Date.now,  // Default date to the current date and time
    },
  },
  { timestamps: true }  // Adds createdAt and updatedAt fields automatically
);

module.exports = mongoose.model("Blog", blogSchema);
