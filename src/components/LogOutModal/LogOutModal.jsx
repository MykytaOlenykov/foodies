import { useState } from "react";
import { useDispatch } from "react-redux";
import toast from "react-hot-toast";

import { Button } from "../Button/Button";
import { Typography } from "../Typography/Typography";
import { logout } from "../../store/auth";
import { DEFAULT_ERROR_MESSAGE } from "../../constants/common";

import css from "./LogOutModal.module.css";

export const LogOutModal = ({ onClose }) => {
  const dispatch = useDispatch();
  const [disabled, setDisabled] = useState(false);

  const handleLogout = async () => {
    try {
      setDisabled(true);
      await dispatch(logout()).unwrap();
    } catch (error) {
      toast.error(error.error?.message ?? DEFAULT_ERROR_MESSAGE);
    } finally {
      setDisabled(false);
    }
  };

  return (
    <div className={css.container}>
      <Typography className={css.title} variant="h2">
        Log out
      </Typography>

      <Typography className={css.text} variant="body">
        You can always log back in at any time.
      </Typography>

      <Button
        className={`${css.button} ${css.buttonMB}`}
        type="button"
        variant="dark"
        size="medium"
        disabled={disabled}
        bordered
        onClick={handleLogout}
      >
        Log out
      </Button>

      <Button
        className={css.button}
        type="button"
        variant="light"
        size="medium"
        bordered
        onClick={onClose}
      >
        Cancel
      </Button>
    </div>
  );
};
