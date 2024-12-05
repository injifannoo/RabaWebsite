import express from 'express';
import authMiddleware from '../middleware/authMiddleware.js';
import contactController from '../controllers/contactController.js';
// Debugging: Log imported modules
console.log(contactController);
console.log(authMiddleware);
const router = express.Router();
const { authenticate, authorize } = authMiddleware;

router.post('/',contactController.submitContact);
 router.get('/', authenticate, authorize(['Super Admin', 'Editor']), contactController.getMessages);
 router.put('/:id', authenticate, authorize(['Super Admin', 'Editor']), contactController.updateMessageStatus);
 router.post('/reply', authenticate, authorize(['Super Admin', 'Editor']), contactController.replyToUser);

export default router;