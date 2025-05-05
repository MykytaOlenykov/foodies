import * as yup from "yup";

import { emailRegexp } from "../../constants/auth";

export const loginValidationSchema = yup.object({
  email: yup
    .string()
    .trim()
    .max(255, "Email must be at most 255 characters")
    .matches(emailRegexp, "Email must be a valid format like example@mail.com")
    .required("Email is required"),

  password: yup
    .string()
    .trim()
    .min(6, "Password must be at least 6 characters")
    .max(255, "Password must be at most 255 characters")
    .required("Password is required"),
});
