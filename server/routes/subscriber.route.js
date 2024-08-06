import express from 'express';
import { addSubscriber, getSubscribers } from '../controllers/subscriber.controller.js';

const router = express.Router();

router.post('/add', addSubscriber);
router.get('/list', getSubscribers);

export default router; // Make sure to export the router

