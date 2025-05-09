import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { Pagination } from "../Pagination/Pagination.jsx";
import SearchSelect from "../SearchSelect/SearchSelect.jsx";
import { RecipeCard } from "../RecipeCard";
import { fetchRecipesByCategory } from "../../store/recipes/operations.js";
import { selectAreas } from "../../store/areas";
import { selectIngredients } from "../../store/ingredients";
import { useBreakpoint } from "../../hooks/useBreakpoint.js";

import css from "./RecipeList.module.css";

export const RecipeList = ({ categoryId }) => {
  const dispatch = useDispatch();
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedRecipes, setSelectedRecipes] = useState([]);
  const [selectedIngredient, setSelectedIngredient] = useState(null);
  const [selectedArea, setSelectedArea] = useState(null);
  const areas = useSelector(selectAreas);
  const ingredients = useSelector(selectIngredients);

  let recipesPerPage = 12; // Default for Desktop and Tablet

  const breakpoint = useBreakpoint();

  const isMobile = ["mobile", "small-mobile"].includes(breakpoint);

  if (isMobile) {
    recipesPerPage = 8;
  }

  useEffect(() => {
    dispatch(
      fetchRecipesByCategory({
        ingredient: selectedIngredient?.id,
        area: selectedArea?.id,
        page: currentPage,
        limit: recipesPerPage,
        ...(categoryId ? { categoryId } : {}),
      }),
    )
      .unwrap()
      .then((recipes) => {
        setSelectedRecipes(recipes);
      })
      .catch((err) => {
        console.error("Error fetching recipes:", err);
      });
  }, [
    dispatch,
    categoryId,
    currentPage,
    recipesPerPage,
    selectedIngredient,
    selectedArea,
  ]);

  if (!selectedRecipes || selectedRecipes.length === 0) {
    return <p>No recipes available.</p>;
  }

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const handleIngredientChange = (ingredient) => {
    setSelectedIngredient(ingredient);
  };

  const handleAreaChange = (area) => {
    setSelectedArea(area);
  };

  const totalPages = Math.ceil(selectedRecipes.total / recipesPerPage);
  return (
    <div className={css.recipesBlock}>
      <div className={css.recipesFiltersBlock}>
        <SearchSelect
          items={ingredients}
          placeholder="Ingredients"
          onSelect={handleIngredientChange}
        />
        <SearchSelect
          items={areas}
          placeholder="Areas"
          onSelect={handleAreaChange}
        />
      </div>

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
              isFavorite={recipe.isFavorite}
            />
          ))}
        </div>
        <Pagination
          totalPages={totalPages}
          activePage={currentPage}
          onPageChange={handlePageChange}
        />
      </div>
    </div>
  );
};
