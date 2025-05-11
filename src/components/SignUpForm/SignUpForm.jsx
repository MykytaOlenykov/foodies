import { useState } from "react";
import { useFormik } from "formik";
import Eye from "../../assets/icons/eye-icon.svg?react";
import EyeOff from "../../assets/icons/eye-icon-crossed.svg?react";

import { Input } from "../Input/Input";
import { Button } from "../Button/Button";
import { registerValidationSchema } from "./lib";

import css from "./SignUpForm.module.css";

const defaultInitialValues = { name: "", email: "", password: "" };

/**
 * SignUpForm component for user registration.
 *
 * @param {Object} props - Component props
 * @param {function(Object, Object): void} props.onSubmit - Callback triggered on form submit with form values and actions.
 * @param {Object} [props.initialValues] - Optional initial values for the form fields (`name`, `email`, `password`).
 * @param {boolean} [props.disabled=false] - Disables all form inputs and the submit button when true.
 */
export const SignUpForm = ({
  onSubmit,
  initialValues = {},
  disabled = false,
}) => {
  const [visiblePassword, setVisiblePassword] = useState(false);

  const { values, errors, handleChange, handleSubmit } = useFormik({
    initialValues: { ...defaultInitialValues, ...initialValues },
    onSubmit,
    validationSchema: registerValidationSchema,
  });

  return (
    <form noValidate onSubmit={handleSubmit}>
      <div className={css.fieldsContainer}>
        <Input
          value={values.name}
          error={errors.name}
          name="name"
          onChange={handleChange("name")}
          placeholder="Name"
          required
          disabled={disabled}
        />

        <Input
          value={values.email}
          error={errors.email}
          name="email"
          onChange={handleChange("email")}
          placeholder="Email"
          required
          disabled={disabled}
        />

        <Input
          value={values.password}
          error={errors.password}
          name="password"
          onChange={handleChange("password")}
          onIconClick={() => setVisiblePassword((prev) => !prev)}
          type={visiblePassword ? "text" : "password"}
          iconRight={visiblePassword ? <EyeOff size={18} /> : <Eye size={18} />}
          placeholder="Password"
          required
          disabled={disabled}
        />
      </div>

      <Button
        className={css.button}
        type="submit"
        variant="dark"
        size="medium"
        bordered
        disabled={disabled}
      >
        Create
      </Button>
    </form>
  );
};
