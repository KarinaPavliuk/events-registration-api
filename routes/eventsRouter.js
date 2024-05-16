import express from "express";
import { getAllEvents, createEvent } from "../controllers/eventsControllers.js";
import { ctrlWrapper } from "../helpers/ctrlWrapper.js";
import validateBody from "../helpers/validateBody.js";
import { isValidId } from "../middlewares/isValidId.js";
import { schemas } from "../models/event.js";

const eventsRouter = express.Router();

eventsRouter.get("/", ctrlWrapper(getAllEvents));

// contactsRouter.get("/:id", isValidId, ctrlWrapper(getOneContact));

// contactsRouter.delete("/:id", isValidId, ctrlWrapper(deleteContact));

eventsRouter.post("/", validateBody(schemas.createEventSchema), ctrlWrapper(createEvent));

// contactsRouter.put("/:id", isValidId, validateBody(schemas.updateContactSchema), ctrlWrapper(updateContact));

// contactsRouter.patch("/:id/favorite", isValidId, validateBody(schemas.updateFavoriteSchema), ctrlWrapper(updateFavorite));

export default eventsRouter;