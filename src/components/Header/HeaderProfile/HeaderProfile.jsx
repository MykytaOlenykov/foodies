import { useState } from "react";
import { useSelector } from "react-redux";
import clx from "clsx";

import { HeaderProfileMenu } from "../HeaderProfileMenu";
import { selectUser } from "../../../store/auth";

import css from "./HeaderProfile.module.css";

import emptyImages from "../../../assets/images/empty";
import ChevronDownIcon from "../../../assets/icons/chevron-down.svg?react";

export const HeaderProfile = () => {
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

      {isOpenProfile && (
        <HeaderProfileMenu onClose={() => setIsOpenProfile(false)} />
      )}
    </div>
  );
};
