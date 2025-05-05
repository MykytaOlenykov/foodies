import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import RecipeCard from "../RecipeCard/RecipeCard.jsx";
import { Pagination } from "../../Pagination/Pagination.jsx";
import { fetchRecipesByCategory } from "../../../redux/recipes/operations.js";
import css from "./RecipeList.module.css";

const RecipeList = ({ category }) => {
  const dispatch = useDispatch();
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedRecipes, setSelectedRecipes] = useState([]);
  const [mediaMode, setMediaMode] = useState("desktop"); // Стан для медіа-режиму

  let recipesPerPage = null; // Значення за замовчуванням для десктопу

  // Визначення медіа-режиму
  useEffect(() => {
    const updateMediaMode = () => {
      if (window.innerWidth < 768) {
        setMediaMode("mobile");
      } else if (window.innerWidth >= 768 && window.innerWidth < 1440) {
        setMediaMode("tablet");
      } else {
        setMediaMode("desktop");
      }
    };

    updateMediaMode(); // Визначаємо режим при першому рендері
    window.addEventListener("resize", updateMediaMode); // Відстежуємо зміни розміру вікна

    return () => {
      window.removeEventListener("resize", updateMediaMode); // Очищення слухача
    };
  }, []);

  if (mediaMode === "mobile") {
    recipesPerPage = 8;
  } else if (mediaMode === "tablet") {
    recipesPerPage = 12;
  } else if (mediaMode === "desktop") {
    recipesPerPage = 12;
  }

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

  if (!selectedRecipes || selectedRecipes.length === 0) {
    return <p>No recipes available.</p>;
  }

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const totalPages = Math.ceil(selectedRecipes.total / recipesPerPage);

  return (
    <div className={css.recipeListBlock}>
      <div className={css.recipeList}>
        {selectedRecipes.recipes.map((recipe) => (
          <RecipeCard
            key={recipe.id}
            recipeId={recipe.id}
            title={recipe.title}
            image={recipe.thumb}
            description={recipe.description}
            owner={recipe.owner}
            favorited={recipe.isFavorite}
            mediaMode={mediaMode}
          />
        ))}
      </div>
      <Pagination
        totalPages={totalPages}
        activePage={currentPage}
        onPageChange={handlePageChange}
      />
    </div>
  );
};

export default RecipeList;
