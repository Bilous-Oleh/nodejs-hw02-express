// const express = require("express");

// const contactsController = require("../../controllers/contacts-controller.js");

// const contactsSchemas = require("../../schemas/contacts-schemas.js");

// const { validateBody } = require("../../decorators/index.js");

// const { isEmptyBody } = require("../../middlewars/index.js");

import express from "express";
import contactsController from "../../controllers/contacts-controller.js";
import contactsSchemas from "../../schemas/contacts-schemas.js";
import { validateBody } from "../../decorators/index.js";
import { isEmptyBody } from "../../middlewars/index.js";

const contactsRouter = express.Router();

contactsRouter.get("/", contactsController.getAll);

contactsRouter.get("/:id", contactsController.getById);

contactsRouter.post(
  "/",
  isEmptyBody,
  validateBody(contactsSchemas.contactsAddSchema),
  contactsController.add
);

contactsRouter.delete("/:id", contactsController.deleteById);

contactsRouter.put(
  "/:id",
  isEmptyBody,
  validateBody(contactsSchemas.contactsAddSchema),
  contactsController.updateById
);

export default contactsRouter;
