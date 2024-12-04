const express = require('express');
const { authenticate, authorize } = require('../middleware/authMiddleware');
const contactController = require('../controllers/contactController');
// Debugging: Log imported modules
console.log(contactController);
console.log(authenticate, authorize);
const router = express.Router();

router.post('/',contactController.submitContact);
 router.get('/', authenticate, authorize(['Super Admin', 'Editor']), contactController.getMessages);
 router.put('/:id', authenticate, authorize(['Super Admin', 'Editor']), contactController.updateMessageStatus);
 router.post('/reply', authenticate, authorize(['Super Admin', 'Editor']), contactController.replyToUser);

module.exports = router;