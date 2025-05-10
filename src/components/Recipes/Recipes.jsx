import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router";

import Container from "../UI/Container/Container.jsx";
import { Typography } from "../Typography/Typography.jsx";
import { RecipeList } from "../RecipeList";
import { selectCategories } from "../../store/categories/selectors.js";

import css from "./Recipes.module.css";
import ArrowLeftIcon from "../../assets/icons/arrow-left.svg?react";

export const Recipes = ({ categoryId }) => {
  const navigate = useNavigate();
  const categories = useSelector(selectCategories);

  const handleBackClick = () => {
    navigate("/");
  };

  const currentCategory = categories.find(({ id }) => id === categoryId) ?? {};

  return (
    <Container className={css.container}>
      <div className={css.recipesTitleBlock}>
        <button
          className={css.recipesBackButton}
          type="button"
          onClick={handleBackClick}
        >
          <ArrowLeftIcon className={css.recipesBackIcon} />
          Back
        </button>
        <Typography className={css.recipesCategory} variant="h1">
          {currentCategory.name}
        </Typography>
        <Typography className={css.recipesDescription} variant="body">
          Go on a taste journey, where every sip is a sophisticated creative
          chord, and every dessert is an expression of the most refined
          gastronomic desires.
        </Typography>
      </div>

      <RecipeList categoryId={categoryId} />
    </Container>
  );
};
