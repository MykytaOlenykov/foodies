import React from "react";
import styles from "./ProfileCard.module.css";
import PlusIcon from "../../assets/icons/plus.svg?react";
import { ButtonIcon } from "../ButtonIcon/ButtonIcon";
import { Typography } from "../Typography/Typography";

/**
 * @param {object} props
 * @param {string} props.avatarURL — URL of the user's avatar image.
 * @param {string} props.name — Full name of the user.
 * @param {string} props.email — Email address of the user.
 * @param {boolean} props.isMyProfile — Flag indicating if this is the current user's own profile.
 * @param {object} [props.stats] — Object with user statistics.
 * @param {number} [props.stats.recipes] — Number of added recipes.
 * @param {number} [props.stats.favorites] — Number of favorite recipes (only if `isMyProfile` is true).
 * @param {number} [props.stats.followers] — Number of followers.
 * @param {number} [props.stats.following] — Number of users this user is following (only if `isMyProfile` is true).
 * @param {() => void} [props.onAvatarChange] — Optional click handler for changing avatar.
 */
export const ProfileCard = ({
  avatarURL,
  name,
  email,
  isMyProfile,
  stats = { recipes: 0, favorites: 0, followers: 0, following: 0 },
  onAvatarChange,
}) => {
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
          <label>Added recipes:</label> {stats.recipes}
        </div>
        {isMyProfile && (
          <div>
            <label>Favorites:</label> {stats.favorites}
          </div>
        )}
        <div>
          <label>Followers:</label> {stats.followers}
        </div>
        {isMyProfile && (
          <div>
            <label>Following:</label> {stats.following}
          </div>
        )}
      </div>
    </div>
  );
};
