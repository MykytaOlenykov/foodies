import { useDispatch } from "react-redux";
import cx from "classnames";

import { Button } from "../Button/Button";
import styles from "./Logout.module.css";

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
      className={cx(styles.container, styles["logout-form"])}
      onSubmit={handleLogout}
    >
      <h2 className={styles["logout-title"]}>LOG OUT</h2>
      <p className={styles.text}>You can always log back in at any time.</p>
      <ul className={styles.list}>
        <li>
          <Button type="submit" variant="log_follow" size="small">
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