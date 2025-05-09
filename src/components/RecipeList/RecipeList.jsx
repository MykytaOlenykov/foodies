import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import toast from "react-hot-toast";

import { Pagination } from "../Pagination/Pagination.jsx";
import SearchSelect from "../SearchSelect/SearchSelect.jsx";
import { RecipeCard } from "../RecipeCard";
import { selectAreas } from "../../store/areas";
import { selectIngredients } from "../../store/ingredients";
import { useBreakpoint } from "../../hooks/useBreakpoint.js";
import { getRecipes } from "../../services/recipes.js";
import { normalizeHttpError } from "../../utils/normalizeHttpError.js";
import { DEFAULT_ERROR_MESSAGE } from "../../constants/common.js";

import css from "./RecipeList.module.css";
import { isCancel } from "axios";

const getCountOfRecipes = (breakpoint) => {
  if (["desktop", "tablet"].includes(breakpoint)) return 12;
  return 8;
};

export const RecipeList = ({ categoryId }) => {
  const areas = useSelector(selectAreas);
  const ingredients = useSelector(selectIngredients);
  const breakpoint = useBreakpoint({ tablet: 540 });

  const [recipes, setRecipes] = useState([]);
  const [areaId, setAreaId] = useState(null);
  const [ingredientId, setIngredientId] = useState(null);
  const [total, setTotal] = useState(0);

  const [currentPage, setCurrentPage] = useState(1);
  const recipesPerPage = getCountOfRecipes(breakpoint);

  useEffect(() => {
    const abortController = new AbortController();

    (async () => {
      try {
        const { total, recipes } = await getRecipes(
          {
            categoryId,
            areaId,
            ingredientId,
            limit: recipesPerPage,
            page: currentPage,
          },
          { signal: abortController.signal },
        );
        setRecipes(recipes);
        setTotal(total);
      } catch (error) {
        if (!isCancel(error)) {
          setRecipes([]);
          setTotal(0);
          const { message } = normalizeHttpError(error);
          toast.error(message ?? DEFAULT_ERROR_MESSAGE);
        }
      }
    })();

    return () => {
      abortController.abort();
    };
  }, [categoryId, areaId, ingredientId, currentPage, recipesPerPage]);

  const handleIngredientChange = (ingredient) => {
    setIngredientId(ingredient?.id);
  };

  const handleAreaChange = (area) => {
    setAreaId(area?.id);
  };

  const totalPages = Math.ceil(total / recipesPerPage);

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
          {recipes.map((recipe) => (
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
          onPageChange={(page) => setCurrentPage(page)}
        />
      </div>
    </div>
  );
};
