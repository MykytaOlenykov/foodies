import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import toast from "react-hot-toast";

import { Typography } from "../Typography/Typography";
import { SignInForm } from "../SignInForm";
import { login, selectUser } from "../../store/auth";
import { DEFAULT_ERROR_MESSAGE } from "../../constants/common";

import css from "./SignInModal.module.css";

/**
 * SignInModal component renders a registration form with a submit handler and redirect logic.
 *
 * @param {object} props
 * @param {() => void} [props.onRedirectToSignUp] - Callback function to redirect the user to the sign-in modal or page.
 */
export const SignInModal = ({ onRedirectToSignUp }) => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  const [disabledForm, setDisabledForm] = useState(false);

  const handleSubmit = async (values, formActions) => {
    try {
      setDisabledForm(true);
      await dispatch(login(values)).unwrap();
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
        Sign in
      </Typography>

      <SignInForm
        onSubmit={handleSubmit}
        disabled={disabledForm}
        initialValues={{ email: user?.email ?? "" }}
      />

      <div className={css.text}>
        Don't have an account?
        <button
          className={css.button}
          type="button"
          onClick={onRedirectToSignUp}
        >
          Create an account
        </button>
      </div>
    </div>
  );
};
