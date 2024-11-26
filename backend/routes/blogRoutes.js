const express = require("express");
const { getAllBlogs, createBlog } = require("../controllers/blogController");

const router = express.Router();

// Get all blogs
router.get("/", getAllBlogs);

// Create a new blog
router.post("/", createBlog);

module.exports = router;