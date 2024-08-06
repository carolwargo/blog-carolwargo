import Subscriber from '../models/subscriber.model.js';
import { errorHandler } from '../utils/error.js';

export const getSubscribers = async (req, res, next) => {
  try {
    const subscribers = await Subscriber.find();
    res.status(200).json(subscribers);
  } catch (error) {
    next(error);
  }
};
