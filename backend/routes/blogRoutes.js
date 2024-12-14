import express from "express";
import blogController from "../controllers/blogController.js";
import authMiddleware from "../middleware/authMiddleware.js";
const { authenticate, authorize } = authMiddleware;

const router = express.Router();

router.get("/", blogController.getAllBlogs); // No authenticate middleware here
router.get("/:id", blogController.updateBlog); // No authenticate middleware here
router.post(
  "/",
  authenticate,
  authorize(["admin", "editor"]),
  blogController.createBlog
);
router.put(
  "/:id",
  authenticate,
  authorize(["admin", "editor"]),
  blogController.updateBlog
);
router.delete(
  "/:id",
  authenticate,
  authorize(["admin"]),
  blogController.deleteBlog // Fixed the name
);

export default router;