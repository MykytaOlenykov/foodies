import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import RecipeCard from "../RecipeCard/RecipeCard.jsx";
import { Pagination } from "../../Pagination/Pagination.jsx";
import { fetchRecipesByCategory } from "../../../store/recipes/operations.js";
import { fetchIngredients } from "../../../store/recipes/operations.js";
import { fetchAreas } from "../../../store/recipes/operations.js";
import { useBreakpoint } from "../../../hooks/useBreakpoint.js"; // Імпорт кастомного хуку
import SearchSelect from "../../SearchSelect/SearchSelect.jsx";
import css from "./RecipeList.module.css";

const RecipeList = ({ category }) => {
  const dispatch = useDispatch();
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedRecipes, setSelectedRecipes] = useState([]);
  const [selectedIngredients, setSelectedIngredients] = useState([]);
  const [selectedIngredient, setSelectedIngredient] = useState(null); // Додано для зберігання вибраного інгредієнта
  const [selectedAreas, setSelectedAreas] = useState([]);
  const [selectedArea, setSelectedArea] = useState(null); // Додано для зберігання вибраної області
  const mediaMode = useBreakpoint();

  let recipesPerPage = 12; // Default for Desktop and Tablet

  if (mediaMode === "mobile" || mediaMode === "small-mobile") {
    recipesPerPage = 8;
  }

  useEffect(() => {
    dispatch(
      fetchRecipesByCategory({
        category: category.categoryId,
        ingredient: selectedIngredient?.id,
        area: selectedArea?.id,
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
  }, [
    dispatch,
    category.categoryId,
    currentPage,
    recipesPerPage,
    selectedIngredient,
    selectedArea,
  ]);

  useEffect(() => {
    dispatch(fetchIngredients())
      .unwrap()
      .then((ingredients) => {
        setSelectedIngredients(ingredients.data.ingredients);
      })
      .catch((err) => {
        console.error("Error fetching ingredients:", err);
      });
  }, [dispatch]);

  useEffect(() => {
    dispatch(fetchAreas())
      .unwrap()
      .then((areas) => {
        setSelectedAreas(areas.data.areas);
      })
      .catch((err) => {
        console.error("Error fetching areas:", err);
      });
  }, [dispatch]);

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
          items={selectedIngredients}
          placeholder="Ingredients"
          onSelect={handleIngredientChange}
        />
        <SearchSelect
          items={selectedAreas}
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
    </div>
  );
};

export default RecipeList;
