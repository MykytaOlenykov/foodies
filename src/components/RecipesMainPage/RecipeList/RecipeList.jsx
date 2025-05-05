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

  const recipesPerPage = 8;

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
        />
      ))}
      <Pagination
        totalPages={totalPages}
        activePage={currentPage}
        onPageChange={handlePageChange}
      />
    </div>
  );
};

export default RecipeList;
