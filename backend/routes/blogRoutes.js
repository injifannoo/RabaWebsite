import express from "express";
import blogController from '../controllers/blogController.js';
import authMiddleware from '../middleware/authMiddleware.js';
const { authenticate, authorize } = authMiddleware;

const router = express.Router();
router.get('/', blogController.getAllBlogs); // No authenticate middleware here
router.post('/', authenticate, authorize(['Super Admin', 'Editor']), blogController.createBlog);
router.put('/:id', authenticate, authorize(['Super Admin', 'Editor']), blogController.updateBlog);
router.delete('/:id', authenticate, authorize(['Super Admin']), blogController.deleteBlogs);

export default router;
// // Get all blogs
// router.get("/", getAllBlogs);

// // Create a new blog
// router.post("/", createBlog);
// //update blogs
// router.put("/",updateBlog);
// //delete blogs
// router.delete("/", deleteBlogs);

