import { useState } from "react";

const RecipePreparation = ({ instructions }) => {
  const [isFavorite, setIsFavorite] = useState(false);

  const toggleFavorite = () => {
    // TODO: реалізувати реальні запити
    setIsFavorite((prev) => !prev);
  };

  return (
    <section>
      <h2>Recipe Preparation</h2>
      <p style={{ whiteSpace: "pre-line" }}>{instructions}</p>

      <button onClick={toggleFavorite}>
        {isFavorite ? "Remove from favorites" : "Add to favorites"}
      </button>
    </section>
  );
};

export default RecipePreparation;
