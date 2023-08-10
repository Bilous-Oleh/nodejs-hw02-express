import express from "express";

import userController from "../../controllers/user-controller.js";

import { validateBody } from "../../decorators/index.js";

import usersSchemas from "../../schemas/users-schemas.js";

import { authenticate, upload } from "../../middlewars/index.js";

const usersRouter = express.Router();

usersRouter.post(
  "/register",
  validateBody(usersSchemas.userRegisterSchema),
  userController.register
);

usersRouter.get("/verify/:verificationToken", userController.verify);

usersRouter.post(
  "/verify",
  validateBody(usersSchemas.userVerifySchema),
  userController.resendVerifyEmail
);

usersRouter.post(
  "/login",
  validateBody(usersSchemas.userLoginSchema),
  userController.login
);

usersRouter.get("/current", authenticate, userController.getCurrent);

usersRouter.post("/logout", authenticate, userController.logout);

usersRouter.patch(
  "/avatars",
  authenticate,
  upload.single("avatar"),
  userController.updateAvatar
);

export default usersRouter;
