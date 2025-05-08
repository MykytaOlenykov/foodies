import { useEffect, useState } from "react";
import { getPopularRecipes } from "../../services/recipes";
import styles from "./PopularRecipes.module.css";
import RecipeCardContainer from "../RecipeCardContainer/RecipeCardContainer";
import { Typography } from "../Typography/Typography";

const PopularRecipes = () => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    const fetchPopular = async () => {
      try {
        const res = await getPopularRecipes();
        const popularData = res.data.data.popularRecipes || [];

        const adapted = popularData.map((item) => ({
          ...item,
          preview: item.thumb,
          user: {
            id: item.owner?.id,
            name: item.owner?.name,
            avatar: item.owner?.avatarURL?.startsWith("http")
              ? item.owner.avatarURL
              : item.owner?.avatarURL
              ? `https://your-domain.com${item.owner.avatarURL}`
              : "/assets/images/empty/no-avatar.jpg",
          },
        }));

        setRecipes(adapted);
      } catch (err) {
        console.error("Failed to fetch popular recipes:", err);
      }
    };

    fetchPopular();
  }, []);

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
