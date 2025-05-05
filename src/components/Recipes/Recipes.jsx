import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import RecipeList from "../RecipeList/RecipeList";
import arrowLefttIcon from "../../assets/icons/arrow-left.svg";
import css from "./Recipes.module.css";
import Categories from "../Categories/Categories";
import { fetchRecipesByCategory } from "../../redux/recipes/operations";
import { Pagination } from "../Pagination/Pagination";
import { Testimonials } from "../Testimonials/Testimonials.jsx";
import axios from "axios";
import Container from "../UI/Container/Container.jsx";

const Recipes = (category) => {
  const dispatch = useDispatch();
  const [showCategories, setShowCategories] = useState(false);
  const [selectedRecipes, setSelectedRecipes] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [testimonials, setTestimonials] = useState([]);

  localStorage.setItem(
    "token",
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTAsImlhdCI6MTc0NjQ0MTg5MiwiZXhwIjoxNzQ2NDc0MjkyfQ.O1QGMync13PFKdPeZaQKIZRarz6v5Qvd400C6Uip46Y",
  );
  const handleBackClick = () => {
    setShowCategories(true);
  };

  const recipesPerPage = 8;
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

  useEffect(() => {
    dispatch(
      fetchRecipesByCategory({
        category: category.categoryId,
        page: currentPage,
        limit: recipesPerPage,
      }),
    )
      .unwrap()
      .then((recipes) => {
        setSelectedRecipes(recipes.data);
      })
      .catch((err) => {
        console.error("Error fetching recipes:", err);
      });
  }, [dispatch, category.categoryId, currentPage, recipesPerPage]);

  const totalPages = Math.ceil(selectedRecipes.total / recipesPerPage);

  if (showCategories) {
    return <Categories />;
  }

  if (!selectedRecipes || selectedRecipes.length === 0) {
    return <p>No recipes available.</p>;
  }

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <Container>
      <div className={css.recipes}>
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
        <RecipeList recipes={selectedRecipes.recipes} />
        <Pagination
          totalPages={totalPages}
          activePage={currentPage}
          onPageChange={handlePageChange}
        />
        {/* <Testimonials data={testimonials} /> */}
      </div>
    </Container>
  );
};

export default Recipes;
