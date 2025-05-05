import React from "react";
import RecipeCard from "../RecipesMainPage/RecipeCard/RecipeCard";
import css from "./RecipeList.module.css";

const RecipeList = ({ recipes }) => {
  return (
    <div className={css.recipeList}>
      {recipes.map((recipe) => (
        <RecipeCard
          key={recipe.id}
          recipeId={recipe.id}
          title={recipe.title}
          image={recipe.thumb}
          description={recipe.description}
          owner={recipe.owner}
          favorited={recipe.isFavorite}
        />
      ))}
    </div>
  );
};

export default RecipeList;
