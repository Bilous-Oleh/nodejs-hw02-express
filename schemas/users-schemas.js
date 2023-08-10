import Joi from "joi";

import { emailRegexp } from "../constants/user-constants.js";
import { subscriptionList } from "../constants/contact-constants.js";

const userRegisterSchema = Joi.object({
  email: Joi.string().pattern(emailRegexp).required().messages({
    "any.required": "Missing required email field",
  }),
  password: Joi.string().min(6).required().messages({
    "any.required": "Missing required password field",
  }),
  subscription: Joi.string().valid(...subscriptionList),
});

const userLoginSchema = Joi.object({
  email: Joi.string().pattern(emailRegexp).required().messages({
    "any.required": "Missing required email field",
  }),
  password: Joi.string().min(6).required().messages({
    "any.required": "Missing required password field",
  }),
});

const userVerifySchema = Joi.object({
  email: Joi.string().pattern(emailRegexp).required().messages({
    "any.required": "Missing required email field",
  }),
});

export default {
  userRegisterSchema,
  userLoginSchema,
  userVerifySchema,
};
