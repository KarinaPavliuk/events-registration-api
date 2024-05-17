import { User } from "../models/user.js";
import { HttpError } from "../helpers/HttpError.js";

export const register = async (req, res) => {
  try {
    const { email, event } = req.body;
    const user = await User.findOne({ email, event });

    if (user) {
      throw HttpError(409, "User is already register");
    }

    const newUser = await User.create({...req.body});

    res.status(201).json({
      name: newUser.name,
      email: newUser.email,
      date: newUser.date,
      radio: newUser.radio,
      event: newUser.event,
    })
  } catch (error) {
    console.error('Registration error:', error);
    if (error.code === 11000) { // Handle potential duplicate key error
      return res.status(409).json({ message: "Duplicate entry detected" });
    }
    res.status(500).json({ message: error.message });
  }
}

export const getUsers = async (req, res) => {
  const result = await User.find();

  res.json(result);
};