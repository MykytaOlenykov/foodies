import { useNavigate } from "react-router-dom";
import { useState } from "react";
import RecipeCard from "../RecipeCardOld/RecipeCard";

const RecipeCardContainer = ({ recipe }) => {
  const navigate = useNavigate();
  const [isFavorite, setIsFavorite] = useState(false);

  if (!recipe || (!recipe.id && !recipe._id)) return null;

  const recipeId = recipe._id?.$oid || recipe.id;

  const handleFavoriteToggle = () => {
    setIsFavorite((prev) => !prev);
  };

  const handleAuthorClick = () => {
    if (recipe.user?.id) {
      navigate(`/user/${recipe.user.id}`);
    }
  };

  const handleViewRecipe = () => {
    navigate(`/recipe/${recipeId}`);
  };

  return (
    <RecipeCard
      recipe={recipe}
      isFavorite={isFavorite}
      onFavoriteToggle={handleFavoriteToggle}
      onAuthorClick={handleAuthorClick}
      onViewRecipe={handleViewRecipe}
    />
  );
};

export default RecipeCardContainer;
