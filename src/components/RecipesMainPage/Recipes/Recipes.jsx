import React, { useState } from "react";
import ArrowLefttIcon from "../../../assets/icons/arrow-left.svg?react";
import Container from "../../UI/Container/Container.jsx";
import Categories from "../../Categories/Categories.jsx";
import RecipeList from "../RecipeList/RecipeList.jsx";
import { Testimonials } from "../../Testimonials/Testimonials.jsx";
import css from "./Recipes.module.css";
import { Typography } from "../../Typography/Typography.jsx";

const Recipes = (category) => {
  const [showCategories, setShowCategories] = useState(false);

  if (showCategories) {
    return <Categories />;
  }

  const handleBackClick = () => {
    setShowCategories(true);
  };

  return (
    <Container>
      <div className={css.recipesMainBlock}>
        <div className={css.recipesTitleBlock}>
          <button
            className={css.recipesBackButton}
            type="button"
            onClick={handleBackClick}
          >
            <ArrowLefttIcon className={css.recipesBackIcon} />
            Back
          </button>
          <Typography className={css.recipesCategory} variant="h1">
            {category.categoryName}{" "}
          </Typography>
          <Typography className={css.recipesDescription} variant="p">
            Go on a taste journey, where every sip is a sophisticated creative
            chord, and every dessert is an expression of the most refined
            gastronomic desires.
          </Typography>
        </div>
        <RecipeList category={category} />
      </div>
    </Container>
  );
};

export default Recipes;
