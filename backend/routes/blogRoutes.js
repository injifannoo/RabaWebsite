import express from "express";
import multer from "multer";
import path from "path";
import blogController from "../controllers/blogController.js";
import authMiddleware from "../middleware/authMiddleware.js";
const { authenticate, authorize } = authMiddleware;

const router = express.Router();

router.get("/", blogController.getAllBlogs); // No authenticate middleware here
router.get("/:id", blogController.updateBlog); // No authenticate middleware here
// Configure Multer for file uploads
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/"); // Directory to store uploaded files
  },
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}-${file.originalname}`);
  },
});

const fileFilter = (req, file, cb) => {
  const allowedMimeTypes = ["image/jpeg", "image/png", "video/mp4"];
  if (allowedMimeTypes.includes(file.mimetype)) {
    cb(null, true);
  } else {
    cb(new Error("Invalid file type. Only JPEG, PNG, and MP4 files are allowed."), false);
  }
};

const upload = multer({ storage, fileFilter });

router.post(
  "/",
  authenticate,
  authorize(["admin", "editor"]),
  upload.single("media"), // Accept single media upload
  blogController.createBlog
);
router.put(
  "/:id",
  authenticate,
  authorize(["admin", "editor"]),
  upload.single("media"),
  blogController.updateBlog
);
router.delete(
  "/:id",
  authenticate,
  authorize(["admin"]),
  blogController.deleteBlog // Fixed the name
);

export default router;