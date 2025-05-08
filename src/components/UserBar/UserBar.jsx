import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router";
import clx from "clsx";

import { openLogOut, selectUser } from "../../store/auth";

import css from "./UserBar.module.css";

import emptyImages from "../../assets/images/empty";
import ChevronDownIcon from "../../assets/icons/chevron-down.svg?react";
import ArrowUpRightIcon from "../../assets/icons/arrow-up-right.svg?react";

const ProfileMenu = ({ onClose }) => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  return (
    <div className={css.popover}>
      <NavLink to={`/user/${user.id}`} className={css.link} onClick={onClose}>
        Profile
      </NavLink>

      <button
        type="button"
        className={clx(css.link, css.logoutButton)}
        onClick={() => dispatch(openLogOut())}
      >
        Log out
        <ArrowUpRightIcon className={css.logoutIcon} />
      </button>
    </div>
  );
};

export const UserBar = () => {
  const user = useSelector(selectUser);

  const [isOpenProfile, setIsOpenProfile] = useState(false);

  const avatarURL = user?.avatar ?? emptyImages.noAvatar;
  const userName = user?.name || "User";

  return (
    <div className={css.container}>
      <div
        className={css.profile}
        onClick={() => setIsOpenProfile((prev) => !prev)}
      >
        <div className={css.avatarThumb}>
          <img className={css.avatar} src={avatarURL} alt={userName} />
        </div>
        <p className={css.profileName}>{userName}</p>
        <button
          type="button"
          className={clx(css.button, isOpenProfile && css.buttonOpen)}
        >
          <ChevronDownIcon className={css.arrowIcon} />
        </button>
      </div>

      {isOpenProfile && <ProfileMenu onClose={() => setIsOpenProfile(false)} />}
    </div>
  );
};
