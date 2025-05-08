import { useDispatch } from "react-redux";

import { Button } from "../Button/Button";
import { openSignIn, openSignUp } from "../../store/auth";

import css from "./AuthBar.module.css";
import clsx from "clsx";

export const AuthBar = () => {
  const dispatch = useDispatch();

  return (
    <div className={css.container}>
      <Button
        className={clsx(css.button, css.signInButton)}
        variant="light"
        size="small"
        bordered
        onClick={() => dispatch(openSignIn())}
      >
        Sign in
      </Button>

      <Button
        className={clsx(css.button, css.signUpButton)}
        variant="dark"
        size="small"
        bordered
        onClick={() => dispatch(openSignUp())}
      >
        Sign up
      </Button>
    </div>
  );
};
