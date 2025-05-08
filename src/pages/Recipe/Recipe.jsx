import Container from "../../components/UI/Container/Container";
import RecipeInfo from "../../components/RecipeInfo/RecipeInfo";
import PopularRecipes from "../../components/PopularRecipes/PopularRecipes";

const RecipePage = () => {
  return (
    <Container>
      <RecipeInfo />
      <PopularRecipes />
    </Container>
  );
};

export default RecipePage;
