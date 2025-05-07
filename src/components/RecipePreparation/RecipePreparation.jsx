import { useEffect, useState } from "react";
import { Typography } from "../Typography/Typography";
import styles from "./RecipePreparation.module.css";

const RecipePreparation = ({
  preparation,
  recipeId,
  isFavorite: initialIsFavorite = false,
}) => {
  const [isRecipeFavorite, setIsRecipeFavorite] = useState(initialIsFavorite);

  const handleToggleFavorite = () => {
    // тут реалізувати dispatch або openModal згодом
    setIsRecipeFavorite((prev) => !prev);
  };

  const paragraphs = preparation.split("\n\n");

  return (
    <div className={styles.wrapper}>
      <Typography variant="h3" textColor="black" className={styles.title}>
        Recipe Preparation
      </Typography>

      {paragraphs.map((para, index) => (
        <Typography
          key={index}
          variant="body"
          textColor="gray"
          className={styles.text}
        >
          {para}
        </Typography>
      ))}

      <button onClick={handleToggleFavorite} className={styles.favoriteBtn}>
        <Typography variant="body" textColor="gray">
          {isRecipeFavorite ? "Remove from favorites" : "Add to favorites"}
        </Typography>
      </button>
    </div>
  );
};

export default RecipePreparation;
