import styles from "./RecipeMainInfo.module.css";
import { useNavigate } from "react-router-dom";
import { Typography } from "../Typography/Typography";

const RecipeMainInfo = ({ title, category, time, description, user }) => {
  const navigate = useNavigate();

  const handleAuthorClick = () => {
    if (user?.id) {
      navigate(`/user/${user.id}`);
    }
  };

  const avatarUrl = user?.avatar?.startsWith("http")
    ? user.avatar
    : "https://via.placeholder.com/32";

  return (
    <section className="wrap">
      <div className={styles.recipeMainInfo}>
        <div className={styles.info}>
          <Typography variant="h3" textColor="black">
            {title}
          </Typography>

          <div className={styles.category}>
            <span>{category}</span>
            <span>{time} min</span>
          </div>

          <Typography variant="body" textColor="gray">
            {description}
          </Typography>

          <div className={styles.authorBlock}>
            <img
              src={avatarUrl}
              alt={user?.name || "Anonymous"}
              className={styles.authorImage}
            />
            <div className={styles.authorText}>
              <Typography variant="body" textColor="gray">
                Created by:
              </Typography>
              <button
                type="button"
                onClick={handleAuthorClick}
                className={styles.authorName}
              >
                <Typography variant="body" textColor="main">
                  {user?.name || "Anonymous"}
                </Typography>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RecipeMainInfo;
