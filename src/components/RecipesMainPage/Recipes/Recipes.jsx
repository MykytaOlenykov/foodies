import React, { useState, useEffect, useCallback } from "react";
import RecipeList from "../RecipeList/RecipeList.jsx";
import arrowLefttIcon from "../../../assets/icons/arrow-left.svg";
import Categories from "../../Categories/Categories.jsx";
import { Testimonials } from "../../Testimonials/Testimonials.jsx";
import Container from "../../UI/Container/Container.jsx";
import { useDispatch } from "react-redux";
import { fetchTestimonials } from "../../../redux/recipes/operations.js";
import css from "./Recipes.module.css";

const Recipes = (category) => {
  const dispatch = useDispatch();
  const [showCategories, setShowCategories] = useState(false);
  const [testimonials, setTestimonials] = useState([]);

  localStorage.setItem(
    "token",
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTAsImlhdCI6MTc0NjQ0MTg5MiwiZXhwIjoxNzQ2NDc0MjkyfQ.O1QGMync13PFKdPeZaQKIZRarz6v5Qvd400C6Uip46Y",
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
            <img src={arrowLefttIcon} alt="Back" />
            Back
          </button>
          <h1 className={css.recipesCategory}>{category.categoryName}</h1>
          <p className={css.recipesDescription}>
            Go on a taste journey, where every sip is a sophisticated creative
            chord, and every dessert is an expression of the most refined
            gastronomic desires.
          </p>
        </div>
        <div className={css.recipesBlock}>
          <div className={css.recipesFiltersBlock}>
            <input type="search" placeholder="Search" className={css.search} />
            <input type="search" placeholder="Sort by" className={css.search} />
          </div>
          <RecipeList category={category} />
        </div>
        <Testimonials data={testimonials} />
      </div>
    </Container>
  );
};

export default Recipes;
