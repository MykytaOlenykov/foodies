import { useSelector } from "react-redux";
import { NavLink } from "react-router";
import clx from "clsx";

import styles from "./HeaderProfile.module.css";
import ArrowUpRightIcon from "../../../assets/icons/arrow-up-right.svg?react";

const selectAuthUserId = () => false;

const HeaderProfileMenu = ({ onClick, onClose }) => {
  const id = useSelector(selectAuthUserId);
  return (
    <div className={styles.wrap_profile_modal}>
      <NavLink to={`/user/${id}`} className={styles.link} onClick={onClose}>
        Profile
      </NavLink>
      <button
        type="button"
        className={clx(styles.link, styles.link_logout)}
        onClick={onClick}
      >
        Log out
        <ArrowUpRightIcon className={styles.icon_logout} />
      </button>
    </div>
  );
};

export default HeaderProfileMenu;
