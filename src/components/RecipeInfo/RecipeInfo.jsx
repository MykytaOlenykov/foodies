import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getRecipeById } from "../../services/recipes";
import PathInfo from "../PathInfo/PathInfo";
import styles from "./RecipeInfo.module.css";

import RecipeMainInfo from "../RecipeMainInfo/RecipeMainInfo";
import RecipeIngredients from "../RecipeIngredients/RecipeIngredients";
import RecipePreparation from "../RecipePreparation/RecipePreparation";

const RecipeInfo = () => {
  const { recipeId } = useParams();
  const [recipe, setRecipe] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchRecipe = async () => {
      try {
        const res = await getRecipeById(recipeId);
        const data = res.data.data.recipe;

        const adapted = {
          ...data,
          preview: data.thumb,
          author: {
            name: data.owner?.name,
            id: data.owner?.id,
            avatar: data.owner?.avatarURL,
          },
        };

        setRecipe(adapted);
      } catch (err) {
        console.error("Failed to fetch recipe:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchRecipe();
  }, [recipeId]);

  if (loading) return <p>Loading recipe...</p>;
  if (!recipe) return <p>Recipe not found.</p>;

  return (
    <>
      <PathInfo current={recipe.title} />
      <div className={styles.recipeInfo}>
        <div className={styles.imageBlock}>
          <img
            src={recipe.preview}
            alt={recipe.title}
            className={styles.image}
          />
        </div>
        <div className={styles.detailsBlock}>
          <RecipeMainInfo
            title={recipe.title}
            category={recipe.category?.name}
            time={recipe.time}
            description={recipe.description}
            user={recipe.author}
          />
          <RecipeIngredients ingredients={recipe.ingredients} />
          <RecipePreparation
            preparation={recipe.instructions}
            recipeId={recipe.id}
            isFavorite={false}
          />
        </div>
      </div>
    </>
  );
};

export default RecipeInfo;
