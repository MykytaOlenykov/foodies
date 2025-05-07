import React, { useState } from "react";
import { useSelector } from "react-redux";
import ArrowLefttIcon from "../../../assets/icons/arrow-left.svg?react";
import Container from "../../UI/Container/Container.jsx";
import Categories from "../../Categories/Categories.jsx";
import RecipeList from "../RecipeList/RecipeList.jsx";
import { Testimonials } from "../../Testimonials/Testimonials.jsx";
import css from "./Recipes.module.css";

const Recipes = (category) => {
  const [showCategories, setShowCategories] = useState(false);
  const testimonials = useSelector((state) => state.testimonials.items);

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
          <h1 className={css.recipesCategory}>{category.categoryName}</h1>
          <p className={css.recipesDescription}>
            Go on a taste journey, where every sip is a sophisticated creative
            chord, and every dessert is an expression of the most refined
            gastronomic desires.
          </p>
        </div>
        <RecipeList category={category} />
        <Testimonials data={testimonials} />
      </div>
    </Container>
  );
};

export default Recipes;
