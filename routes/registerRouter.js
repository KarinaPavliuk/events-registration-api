import express from "express";
import validateBody from "../helpers/validateBody.js";
import { schemas } from "../models/user.js";
import { ctrlWrapper } from "../helpers/ctrlWrapper.js";
import { getUsers, register } from "../controllers/registerControllers.js";

const registerRouter = express.Router();

registerRouter.post("/", validateBody(schemas.registerSchema), ctrlWrapper(register));
registerRouter.get("/", ctrlWrapper(getUsers));

export default registerRouter;