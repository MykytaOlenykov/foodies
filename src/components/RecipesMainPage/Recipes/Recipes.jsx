import React, { useState, useEffect } from "react";
import axios from "axios";
import RecipeList from "../RecipeList/RecipeList.jsx";
import arrowLefttIcon from "../../../assets/icons/arrow-left.svg";
import Categories from "../../Categories/Categories.jsx";
import { Testimonials } from "../../Testimonials/Testimonials.jsx";
import Container from "../../UI/Container/Container.jsx";
import css from "./Recipes.module.css";

const Recipes = (category) => {
  const [showCategories, setShowCategories] = useState(false);
  const [testimonials, setTestimonials] = useState([]);

  localStorage.setItem(
    "token",
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTAsImlhdCI6MTc0NjQ0MTg5MiwiZXhwIjoxNzQ2NDc0MjkyfQ.O1QGMync13PFKdPeZaQKIZRarz6v5Qvd400C6Uip46Y",
  );

  useEffect(() => {
    const fetchTestimonials = async () => {
      try {
        const response = await axios.get(
          "https://mykytaolenykov.com/foodies/api/testimonials",
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          },
        );
        setTestimonials(response.data.data.testimonials);
      } catch (error) {
        console.error("Error fetching testimonials:", error);
      }
    };

    fetchTestimonials();
  }, []);

  if (showCategories) {
    return <Categories />;
  }

  const handleBackClick = () => {
    setShowCategories(true);
  };

  return (
    <Container>
      <div className={css.mainBlock}>
        <div className={css.titleBlock}>
          <button
            className={css.backButton}
            type="button"
            onClick={handleBackClick}
          >
            <img src={arrowLefttIcon} alt="Back" />
            Back
          </button>
          <h1 className={css.category}>{category.categoryName}</h1>
          <p className={css.description}>
            Go on a taste journey, where every sip is a sophisticated creative
            chord, and every dessert is an expression of the most refined
            gastronomic desires.
          </p>
        </div>
        <div className={css.recipesBlock}>
          <div className={css.filtersBlock}>
            <input type="search" placeholder="Search" />
            <input type="search" placeholder="Sort by" />
          </div>
          <RecipeList category={category} />
        </div>
        <Testimonials data={testimonials} />
      </div>
    </Container>
  );
};

export default Recipes;
