import RecipeMainInfo from "./RecipeMainInfo";
import RecipeIngredients from "./RecipeIngredients";
import RecipePreparation from "./RecipePreparation";

const RecipeInfo = ({ recipe }) => {
  if (!recipe) return null;

  return (
    <section>
      <RecipeMainInfo recipe={recipe} />
      <RecipeIngredients ingredients={recipe.ingredients} />
      <RecipePreparation description={recipe.instructions} />
    </section>
  );
};

export default RecipeInfo;
