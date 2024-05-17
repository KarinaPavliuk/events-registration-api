import { User } from "../models/user.js";
import { HttpError } from "../helpers/HttpError.js";
// import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const { SECRET_KEY } = process.env;

export const register = async (req, res) => {
  const { email } = req.body;
  const user = await User.findOne({ email });

  if (user) {
    throw HttpError(409, "Email already in use");
  }

  // const hashPassword = await bcrypt.hash(password, 10);

  const newUser = await User.create(...req.body);

  res.status(201).json({
    name: newUser.name,
    email: newUser.email,
    date: newUser.date,
    radio: newUser.radio,
  })
}