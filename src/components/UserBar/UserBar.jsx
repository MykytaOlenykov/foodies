import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router";
import clx from "clsx";

import { openLogOut, selectUser } from "../../store/auth";

import css from "./UserBar.module.css";

import ChevronDownIcon from "../../assets/icons/chevron-down.svg?react";
import ArrowUpRightIcon from "../../assets/icons/arrow-up-right.svg?react";
import { Avatar } from "../Avatar/Avatar.jsx";
import { useBreakpoint } from "../../hooks/useBreakpoint.js";

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
  const breakpoint = useBreakpoint();
  const isMobile = ["mobile", "small-mobile"].includes(breakpoint);
  const [isOpenProfile, setIsOpenProfile] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target)
      ) {
        setIsOpenProfile(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const userName = user?.name || "User";

  return (
    <div className={css.container} ref={containerRef}>
      <div
        className={css.profile}
        onClick={() => setIsOpenProfile((prev) => !prev)}
      >
        <Avatar
          src={user?.avatarURL}
          alt={`${userName}'s avatar`}
          size={isMobile ? 32 : 50}
          name={userName}
        />
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
