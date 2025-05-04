import { useState } from "react";
import { useFormik } from "formik";
import { Eye, EyeOff } from "lucide-react";

import Input from "../Input/Input";
import { Button } from "../Button/Button";
import { registerValidationSchema } from "./lib";

import css from "./SignUpForm.module.css";

const defaultInitialValues = { name: "", email: "", password: "" };

export const SignUpForm = ({ onSubmit, initialValues = {} }) => {
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
        />

        <Input
          value={values.email}
          error={errors.email}
          name="email"
          onChange={handleChange("email")}
          placeholder="Email"
          required
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
        />
      </div>

      <Button
        className={css.button}
        type="submit"
        variant="dark"
        size="medium"
        bordered
      >
        Create
      </Button>
    </form>
  );
};
