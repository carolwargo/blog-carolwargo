import express from 'express';
import { addSubscriber, getSubscribers } from '../controllers/subscriber.controller.js';

const router = express.Router();

// Route to add a subscriber
router.post('/subscribers', addSubscriber);

// Route to get all subscribers (optional, for testing)
router.get('/subscribers', getSubscribers);

export default router;
