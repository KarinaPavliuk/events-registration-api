import { Event } from "../models/event.js";
import { HttpError } from "../helpers/HttpError.js";

export const getAllEvents = async (req, res) => {
  const result = await Event.find();

  res.json(result);
};

// export const getOneContact = async (req, res) => {
//   const { id } = req.params;
//   const result = await Contact.findById(id);

//   if (!result) {
//     throw HttpError(404, "Not found");
//   }

//   res.status(200).json(result);
// };

// export const deleteContact = async (req, res) => {
//   const { id } = req.params;
//   const result = await Contact.findByIdAndDelete(id);

//   if (!result) {
//     throw HttpError(404, "Not found");
//   }
    
//   res.status(200).json(result);
// };

export const createEvent = async (req, res) => {
  const result = await Event.create(req.body);

  res.status(201).json(result);
};

// export const updateContact = async (req, res) => {
//   const { id } = req.params;
//   const result = await Contact.findByIdAndUpdate(id, req.body, {new: true});

//   if (!result) {
//     throw HttpError(400, "Body must have at least one field")
//   };

//   res.status(200).json(result);
// };

// export const updateFavorite = async (req, res) => {
//     const { id } = req.params;
//     const result = await Contact.findByIdAndUpdate(id, req.body, {new: true});
//     if (!result) {
//         throw HttpError(404, "Not found");
//     }
//     res.json(result);
// }