import { useSelector } from "react-redux";
import { NavLink } from "react-router";
import clx from "clsx";

import { openLogOut, selectUser } from "../../../store/auth";

import css from "./HeaderProfileMenu.module.css";
import ArrowUpRightIcon from "../../../assets/icons/arrow-up-right.svg?react";

export const HeaderProfileMenu = ({ onClose }) => {
  const user = useSelector(selectUser);

  return (
    <div className={css.container}>
      <NavLink to={`/user/${user.id}`} className={css.link} onClick={onClose}>
        Profile
      </NavLink>

      <button
        type="button"
        className={clx(css.link, css.button)}
        onClick={() => dispatchEvent(openLogOut())}
      >
        Log out
        <ArrowUpRightIcon className={css.logoutIcon} />
      </button>
    </div>
  );
};
