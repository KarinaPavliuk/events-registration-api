import { Schema, model } from "mongoose";
import Joi from "joi";

import { handleMongooseError } from "../middlewares/handleMongooseError.js";

const emailRegexp = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

const userSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    match: emailRegexp,
    unique: true,
  },
  date: {
    type: String,
    required: true,
  },
  radio: {
    type: String,
    // enum: ["Social media", "Friends", "Found myself"],
    required: true,
  },
  event: {
    type: String,
    required: true,
  }
}, { versionKey: false, timestamps: true });

userSchema.post("save", handleMongooseError);

const registerSchema = Joi.object({
  name: Joi.string().required(),
  email: Joi.string().pattern(emailRegexp).required(),
  date: Joi.string().required(),
  radio: Joi.string().required(),
  event: Joi.string().required(),
});

const schemas = { registerSchema };

const User = model("user", userSchema);

export { User, schemas };