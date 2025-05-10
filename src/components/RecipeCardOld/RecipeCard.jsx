import styles from "./RecipeCard.module.css";
import { Typography } from "../Typography/Typography";

import heartIcon from "../../assets/icons/heart.svg";
import arrowIcon from "../../assets/icons/arrow-up-right.svg";

const RecipeCard = ({
  recipe,
  isFavorite,
  onFavoriteToggle,
  onAuthorClick,
  onViewRecipe,
}) => {
  if (!recipe) return null;

  const avatarUrl = recipe.user?.avatar?.startsWith("http")
    ? recipe.user.avatar
    : "/assets/images/empty/no-avatar.jpg";

  return (
    <div className={styles.card}>
      <img src={recipe.preview} alt={recipe.title} className={styles.image} />
      <div className={styles.content}>
        <Typography variant="h4" textColor="black" className={styles.title}>
          {recipe.title}
        </Typography>

        <Typography
          variant="body"
          textColor="gray"
          className={styles.description}
          lineClamp={2}
        >
          {recipe.description}
        </Typography>

        <div className={styles.wrapper}>
          <button className={styles.author} onClick={onAuthorClick}>
            <img
              src={avatarUrl}
              alt={recipe.user?.name || "Anonymous"}
              className={styles.avatar}
            />
            <Typography variant="body" textColor="main">
              {recipe.user?.name || "Anonymous"}
            </Typography>
          </button>

          <div className={styles.wrap}>
            <button
              className={`${styles.heart} ${isFavorite ? styles.active : ""}`}
              onClick={(e) => {
                e.stopPropagation();
                onFavoriteToggle();
              }}
              aria-label="Toggle favorite"
            >
              <img src={heartIcon} alt="Favorite" className={styles.icon} />
            </button>

            <button
              className={styles.arrow}
              onClick={onViewRecipe}
              aria-label="View recipe"
            >
              <img src={arrowIcon} alt="View" className={styles.icon} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecipeCard;
