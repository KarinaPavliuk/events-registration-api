import { Schema, model } from "mongoose";
import Joi from "joi";
import { handleMongooseError } from "../middlewares/handleMongooseError.js";

const eventSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  date: {
    type: String,
    required: true,
  },
  organizer: {
    type: String,
    required: true,  
  }
}, {
  versionKey: false, timestamps: true
});

eventSchema.post("save", handleMongooseError);

const createEventSchema = Joi.object({
  title: Joi.string().required(),
  description: Joi.string().required(),
  date: Joi.string().required(),
  organizer: Joi.string().required(),
})

const schemas = {
    createEventSchema,
}

const Event = model("event", eventSchema);

export { Event, schemas };