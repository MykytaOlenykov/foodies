import { Fragment, useRef } from "react";
import styles from "./UserInfo.module.css";
import PlusIcon from "../../assets/icons/plus.svg?react";
import { ButtonIcon } from "../ButtonIcon/ButtonIcon";
import { Typography } from "../Typography/Typography";
import { normalizeHttpError, normalizeImagePath } from "../../utils";
import toast from "react-hot-toast";
import { Avatar } from "../Avatar/Avatar.jsx";
import { useBreakpoint } from "../../hooks/useBreakpoint.js";

/**
 * @param {object} props
 * @param {UserModel} props.user — User data object.
 * @param {boolean} props.isMyProfile — Flag indicating if this is the current user's own profile.
 * @param {() => void} [props.onAvatarChange] — Optional click handler for changing avatar.
 */

export const UserInfo = ({ user, isMyProfile, onAvatarChange }) => {
  const fileInputRef = useRef();
  const breakpoint = useBreakpoint();
  const isMobile = ["mobile", "small-mobile"].includes(breakpoint);

  const {
    avatarURL,
    name,
    email,
    recipesCount,
    favoriteRecipesCount,
    followersCount,
    followingCount,
  } = user;

  const handleAvatarClick = () => {
    fileInputRef.current?.click();
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    try {
      onAvatarChange?.(file);
    } catch (err) {
      const error = normalizeHttpError(err);
      toast.error(error.message);
    }
  };

  return (
    <div className={styles.profileCard}>
      <div className={styles.avatarWrapper}>
        <Avatar
          src={normalizeImagePath(avatarURL)}
          alt={`${name}'s avatar`}
          size={isMobile ? 80 : 120}
          name={name}
        />
        {isMyProfile && (
          <Fragment>
            <ButtonIcon
              className={styles.avatarEdit}
              variant="dark"
              icon={<PlusIcon width={16} height={16} />}
              onClick={handleAvatarClick}
            />
            <input
              type="file"
              accept="image/png, image/jpeg"
              ref={fileInputRef}
              onChange={handleFileChange}
              className={styles.fileInput}
            />
          </Fragment>
        )}
      </div>
      <Typography variant="h3">{name}</Typography>

      <div className={styles.profileData}>
        <div>
          <label>Email:</label>
          <span title={email}>{email}</span>
        </div>
        <div>
          <label>Added recipes:</label> {recipesCount}
        </div>
        {isMyProfile && (
          <div>
            <label>Favorites:</label> {favoriteRecipesCount}
          </div>
        )}
        <div>
          <label>Followers:</label> {followersCount}
        </div>
        {isMyProfile && (
          <div>
            <label>Following:</label> {followingCount}
          </div>
        )}
      </div>
    </div>
  );
};
