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

export const addSubscriber = async (req, res, next) => {
  try {
    const { name, email } = req.body;
    const newSubscriber = new Subscriber({ name, email });
    const savedSubscriber = await newSubscriber.save();
    res.status(201).json(savedSubscriber);
  } catch (error) {
    next(error);
  }
};

