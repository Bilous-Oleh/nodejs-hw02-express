import express from "express";
import contactsController from "../../controllers/contacts-controller.js";
import contactsSchemas from "../../schemas/contacts-schemas.js";
import { validateBody } from "../../decorators/index.js";
import {
  isEmptyBody,
  isValidId,
  isEmptyBodyFavorite,
} from "../../middlewars/index.js";

const contactsRouter = express.Router();

contactsRouter.get("/", contactsController.getAll);

contactsRouter.get("/:id", isValidId, contactsController.getById);

contactsRouter.post(
  "/",
  isEmptyBody,
  validateBody(contactsSchemas.contactsAddSchema),
  contactsController.add
);

contactsRouter.delete("/:id", isValidId, contactsController.deleteById);

contactsRouter.put(
  "/:id",
  isEmptyBody,
  isValidId,
  validateBody(contactsSchemas.contactsAddSchema),
  contactsController.updateById
);

contactsRouter.patch(
  "/:id/favorite",
  isEmptyBodyFavorite,
  isValidId,
  validateBody(contactsSchemas.contactUpdateFavoriteSchema),
  contactsController.updateFavorite
);

export default contactsRouter;
