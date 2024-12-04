const express = require('express');
const { authenticate, authorize } = require('../middleware/authMiddleware');
const analyticsController = require('../controllers/analyticsController');

const router = express.Router();

router.get('/blogs', authenticate, authorize(['Super Admin']), analyticsController.getBlogInsights);
router.get('/contacts', authenticate, authorize(['Super Admin']), analyticsController.getContactMetrics);

module.exports = router;
