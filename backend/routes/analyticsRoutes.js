import express from "express";
import analyticsController from '../controllers/analyticsController.js';
import authMiddleware from '../middleware/authMiddleware.js';
const { authenticate, authorize } = authMiddleware;
const router = express.Router();

router.get('/blogs', authenticate, authorize(['admin']), analyticsController.getBlogInsights);
router.get('/contacts', authenticate, authorize(['admin']), analyticsController.getContactMetrics);

export default router;
