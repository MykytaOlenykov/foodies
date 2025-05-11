import { useEffect, useState } from "react";
import toast from "react-hot-toast";

import Container from "../../components/UI/Container/Container";
import { RecipeInfo } from "../../components/RecipeInfo";
import { PopularRecipes } from "../../components/PopularRecipes/PopularRecipes";
import { getPopularRecipes } from "../../services/recipes";
import { DEFAULT_ERROR_MESSAGE } from "../../constants/common";
import { normalizeHttpError } from "../../utils";

import css from "./Recipe.module.css";

const RecipePage = () => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const { popularRecipes } = await getPopularRecipes();
        setRecipes(popularRecipes);
      } catch (error) {
        const { message } = normalizeHttpError(error);
        toast.error(message ?? DEFAULT_ERROR_MESSAGE);
      }
    })();
  }, []);

  return (
    <main>
      <Container className={css.container}>
        <RecipeInfo />

        <PopularRecipes recipes={recipes} />
      </Container>
    </main>
  );
};

export default RecipePage;
