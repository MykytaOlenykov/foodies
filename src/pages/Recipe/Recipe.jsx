import Container from "../../components/UI/Container/Container";
import { RecipeInfo } from "../../components/RecipeInfo";

import css from "./Recipe.module.css";

const RecipePage = () => {
  return (
    <Container className={css.container}>
      <RecipeInfo />
    </Container>
  );
};

export default RecipePage;
