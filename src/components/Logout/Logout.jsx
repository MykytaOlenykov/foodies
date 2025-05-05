import { useDispatch } from "react-redux";
import clx from "clsx";

import { Button } from "../Button/Button";
import { Typography } from "../Typography/Typography";
import styles from "./Logout.module.css";

import  ArrowUpRightIcon from "../../assets/icons/arrow-up-right.svg?react";

// Temp stub instead of Redux-selector
const logoutUser = () => false;

export const Logout = ({ setModalLogoutOpen }) => {
  const dispatch = useDispatch();

  const handleLogout = async (e) => {
    e.preventDefault();
    dispatch(logoutUser());
    setModalLogoutOpen(false);
  };

  return (
    <form
      className={clx(styles.container, styles["logout-form"])}
      onSubmit={handleLogout}
    >
      <Typography variant="h2" className={styles["logout-title"]}>
        LOG OUT
      </Typography>

      <Typography variant="body" className={styles.text}>
        You can always log back in at any time.
      </Typography>

      <ul className={styles.list}>
        <li>
          <Button
            type="submit"
            variant="log_follow"
            size="small"
            icon={<ArrowUpRightIcon />}
          >
            Log out
          </Button>
        </li>
        <li>
          <Button
            type="button"
            variant="log_cancel"
            size="small"
            onClick={() => setModalLogoutOpen(false)}
            className={styles["cancel-button"]}
          >
            Cancel
          </Button>
        </li>
      </ul>
    </form>
  );
};

export default Logout;
