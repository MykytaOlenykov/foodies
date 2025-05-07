import styles from "./PopularRecipes.module.css";
import { Typography } from "../Typography/Typography";
import RecipeCardContainer from "../RecipeCardContainer/RecipeCardContainer";

const PopularRecipes = ({ recipes = [] }) => {
  if (!recipes.length) {
    return (
      <Typography variant="body" textColor="gray" className={styles.message}>
        No popular recipes available.
      </Typography>
    );
  }

  return (
    <section className={styles.popular}>
      <Typography variant="h3" textColor="black" className={styles.title}>
        Popular Recipes
      </Typography>
      <ul className={styles.list}>
        {recipes.slice(0, 4).map((recipe) => (
          <li key={recipe._id?.$oid || recipe.id}>
            <RecipeCardContainer recipe={recipe} />
          </li>
        ))}
      </ul>
    </section>
  );
};

export default PopularRecipes;
