import { useState } from "react";
import { useDispatch } from "react-redux";
import toast from "react-hot-toast";

import { SignUpForm } from "../SignUpForm";
import { Typography } from "../Typography/Typography";
import { register } from "../../store/auth";
import { DEFAULT_ERROR_MESSAGE } from "../../constants/common";

import css from "./SignUpModal.module.css";

/**
 * SignUpModal component renders a registration form with a submit handler and redirect logic.
 *
 * @param {object} props
 * @param {() => void} [props.onRedirectToSignIn] - Callback function to redirect the user to the sign-in modal or page.
 */
export const SignUpModal = ({ onRedirectToSignIn }) => {
  const dispatch = useDispatch();

  const [disabledForm, setDisabledForm] = useState(false);

  const handleSubmit = async (values, formActions) => {
    try {
      setDisabledForm(true);
      await dispatch(register(values)).unwrap();
      formActions.resetForm();
    } catch (error) {
      toast.error(error.error?.message ?? DEFAULT_ERROR_MESSAGE);
    } finally {
      setDisabledForm(false);
    }
  };

  return (
    <div className={css.container}>
      <Typography className={css.title} variant="h2">
        Sign up
      </Typography>

      <SignUpForm onSubmit={handleSubmit} disabled={disabledForm} />

      <div className={css.text}>
        <span>I already have an account?</span>
        <button
          className={css.button}
          type="button"
          onClick={onRedirectToSignIn}
        >
          Sign in
        </button>
      </div>
    </div>
  );
};
