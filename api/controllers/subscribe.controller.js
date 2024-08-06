import Subscriber from '../models/subscriber.model.js';
import { errorHandler } from '../utils/error.js';

export const addSubscriber = async (req, res, next) => {
  const { email, name } = req.body;

  if (!email || !name) {
    return next(errorHandler(400, 'Email and name are required'));
  }

  try {
    const newSubscriber = new Subscriber({ email, name });
    await newSubscriber.save();
    res.status(201).json('Subscriber added successfully');
  } catch (error) {
    next(error);
  }
};

export const getSubscribers = async (req, res, next) => {
  try {
    const subscribers = await Subscriber.find();
    res.status(200).json(subscribers);
  } catch (error) {
    next(error);
  }
};
