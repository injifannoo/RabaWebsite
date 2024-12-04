const express = require('express');
const { authenticate, authorize } = require('../middleware/authMiddleware');
const adminController = require('../controllers/adminController');

const router = express.Router();

router.use(authenticate); // Apply authentication middleware to all routes

router.get('/dashboard', authorize(['admin']), adminController.getDashboard);
router.post('/blogs', authorize(['admin', 'editor']), adminController.createBlog);
router.delete('/blogs/:id', authorize(['admin']), adminController.deleteBlog);

module.exports = router;
