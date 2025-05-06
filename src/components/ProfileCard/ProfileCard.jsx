import React from "react";
import styles from "./ProfileCard.module.css";
import PlusIcon from "../../assets/icons/plus.svg?react";
import { ButtonIcon } from "../ButtonIcon/ButtonIcon";
import { Typography } from "../Typography/Typography";

/**
 * @param {object} props
 * @param {UserModel} props.user — User data object.
 * @param {boolean} props.isMyProfile — Flag indicating if this is the current user's own profile.
 * @param {() => void} [props.onAvatarChange] — Optional click handler for changing avatar.
 */

export const ProfileCard = ({ user, isMyProfile, onAvatarChange }) => {
  const {
    avatarURL,
    name,
    email,
    recipesCount,
    favoriteRecipesCount,
    followersCount,
    followingCount,
  } = user;

  return (
    <div className={styles.profileCard}>
      <div className={styles.avatarWrapper}>
        <img
          className={styles.avatar}
          src={avatarURL}
          alt={`${name}'s avatar`}
        />
        {isMyProfile && (
          <ButtonIcon
            className={styles.avatarEdit}
            variant="dark"
            size="small"
            icon={<PlusIcon width={18} height={18} />}
            onClick={onAvatarChange}
          />
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
