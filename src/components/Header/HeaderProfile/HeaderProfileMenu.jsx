import { useSelector } from "react-redux";
import { NavLink } from "react-router";
import cx from "classnames";

import Icon from "../../Icon/Icon";
import styles from "./HeaderProfile.module.css";

const selectAuthUserId = () => false;

const HeaderProfileMenu = ({ onClick, onClose }) => {
  const id = useSelector(selectAuthUserId);
  return (
    <div className={styles.wrap_profile_modal}>
      <NavLink to={`/user/${id}`} className={styles.link} onClick={onClose}>
        Profile
      </NavLink>
      <button
        type='button'
        className={cx(styles.link, styles.link_logout)}
        onClick={onClick}
      >
        Log out
        <Icon
          iconId='icon-arrow-up-right'
          width='18'
          height='18'
          customStyle={cx(styles.icon_logout)}
          stroke='#fff'
        />
      </button>
    </div>
  );
};

export default HeaderProfileMenu;