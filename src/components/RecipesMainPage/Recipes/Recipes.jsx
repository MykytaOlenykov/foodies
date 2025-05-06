import React, { useState, useEffect, useCallback } from "react";
import ArrowLefttIcon from "../../../assets/icons/arrow-left.svg?react";
import { useDispatch } from "react-redux";
import { fetchTestimonials } from "../../../store/recipes/operations.js";
import Container from "../../UI/Container/Container.jsx";
import Categories from "../../Categories/Categories.jsx";
import RecipeList from "../RecipeList/RecipeList.jsx";
import { Testimonials } from "../../Testimonials/Testimonials.jsx";
import css from "./Recipes.module.css";

const Recipes = (category) => {
  const dispatch = useDispatch();
  const [showCategories, setShowCategories] = useState(false);
  const [testimonials, setTestimonials] = useState([]);

  localStorage.setItem(
    "token",
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTAsImlhdCI6MTc0NjUyNzUxMSwiZXhwIjoxNzQ2NTU5OTExfQ.URK9aqLeFWu0Y_QGi07w1OOh0uubTZFfV44JCdHUnxc",
  );

  // Мемоізована функція для отримання відгуків
  const fetchTestimonialsData = useCallback(() => {
    dispatch(fetchTestimonials())
      .unwrap()
      .then((testimonials) => {
        setTestimonials(testimonials.data.testimonials);
      })
      .catch((err) => {
        console.error("Error fetching testimonials:", err);
      });
  }, [dispatch]);

  // Викликаємо функцію один раз при першому рендері
  useEffect(() => {
    fetchTestimonialsData();
  }, [fetchTestimonialsData]);

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
