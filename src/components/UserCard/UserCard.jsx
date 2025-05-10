import { useNavigate } from "react-router";
import PropTypes from "prop-types";
import { useBreakpoint } from "../../hooks";
import styles from "./UserCard.module.css";
import { Typography } from "../Typography/Typography";
import { ButtonIcon } from "../ButtonIcon/ButtonIcon";
import { Button } from "../Button/Button";
import ArrowUpRight from "../../assets/icons/arrow-up-right.svg?react";
import { normalizeImagePath } from "../../utils/normalizeImagePath.jsx";

/**
 * @typedef {Object} RecipePreview
 * @property {number} id
 * @property {string} thumb
 *
 * @typedef {Object} UserCardData
 * @property {number} id
 * @property {string} name
 * @property {string} avatarURL
 * @property {RecipePreview[]} recipes
 * @property {number} recipesCount
 */

/**
 * UserCard component
 *
 * Displays a user card with avatar, name, recipe count, follow/unfollow button,
 * recipe thumbnails (on tablet and desktop), and a button to navigate to user page.
 *
 * @param {Object} props
 * @param {UserCardData} props.user - User data object
 * @param {'followers'|'following'} props.tabType - List context
 * @param {Function} props.onFollow - Follow handler
 * @param {Function} props.onUnfollow - Unfollow handler
 * @param {string} [props.userPageBasePath='/users'] - Base path to build user page link
 * @param {boolean} [props.loading=false] - Loading state for follow button
 */
export const UserCard = ({
  user,
  tabType,
  onFollow,
  onUnfollow,
  userPageBasePath = '/users',
  loading = false,
}) => {
  const breakpoint = useBreakpoint();
  const navigate = useNavigate();

  const isFollowing = tabType === "following" || (user.isFollowed ?? false);
  const handleNavigateToUser = () => {
    navigate(`${userPageBasePath}/${user.id}`);
  };

  const handleToggleFollow = () => {
    if (isFollowing) {
      onUnfollow(user.id);
    } else {
      onFollow(user.id);
    }
  };

  const showRecipes = breakpoint === 'tablet' || breakpoint === 'desktop';
  const thumbCount = breakpoint === 'desktop' ? 4 : 3;
  const iconSize = breakpoint === 'desktop' ? 'medium' : 'small';
  const buttonSize = breakpoint === 'desktop' ? 'medium' : 'small';

  return (
    <div className={styles.card}>
      <div className={styles.userInfo}>
        <div className={styles.avatarWrapper}>
          <img
            src={normalizeImagePath(user.avatarURL)}
            alt={user.name}
            className={styles.avatar} />
        </div>
        <div className={styles.userDetails}>
          <Typography variant="h4">{user.name}</Typography>
          <Typography variant="bodyS" textColor="gray">
            Own recipes: {user.recipesCount}
          </Typography>
          <Button
            variant="light"
            bordered
            fullWidth
            size={buttonSize}
            onClick={handleToggleFollow}
            disabled={loading}
            className={styles.followButton}
          >
            {isFollowing ? 'FOLLOWING' : 'FOLLOW'}
          </Button>
        </div>
      </div>

      {showRecipes && user.recipes?.length > 0 && (
        <div className={styles.recipeList}>
          {user.recipes.slice(0, thumbCount).map((recipe) => (
            <div key={recipe.id} className={styles.recipeThumbWrapper}>
              <img
                src={normalizeImagePath(recipe.thumb)}
                alt={`Recipe ${recipe.id}`}
                className={styles.recipeThumb}
              />
            </div>
          ))}
        </div>
      )}

      <div className={styles.arrowButton}>
        <ButtonIcon
          icon={<ArrowUpRight />}
          variant="light"
          size={iconSize}
          onClick={handleNavigateToUser}
        />
      </div>
    </div>
  );
};

UserCard.propTypes = {
  user: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    avatarURL: PropTypes.string.isRequired,
    recipes: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        thumb: PropTypes.string.isRequired,
      })
    ).isRequired,
    recipesCount: PropTypes.number.isRequired,
    isFollowed: PropTypes.bool, // will be added in the future can be undefined
  }).isRequired,
  tabType: PropTypes.oneOf(['followers', 'following']).isRequired,
  onFollow: PropTypes.func.isRequired,
  onUnfollow: PropTypes.func.isRequired,
  userPageBasePath: PropTypes.string,
  loading: PropTypes.bool,
};
