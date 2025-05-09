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
import { useSearchParams } from "react-router";

const getCountOfRecipes = (breakpoint) => {
  if (["desktop", "tablet"].includes(breakpoint)) return 12;
  return 8;
};

export const RecipeList = ({ categoryId }) => {
  const areas = useSelector(selectAreas);
  const ingredients = useSelector(selectIngredients);
  const breakpoint = useBreakpoint({ tablet: 540 });
  const [searchParams, setSearchParams] = useSearchParams();

  const [recipes, setRecipes] = useState([]);
  const [areaId, setAreaId] = useState(() => searchParams.get("area") ?? null);
  const [ingredientId, setIngredientId] = useState(
    () => searchParams.get("ingredient") ?? null,
  );
  const [currentPage, setCurrentPage] = useState(
    () => searchParams.get("page") ?? 1,
  );
  const [total, setTotal] = useState(0);

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

  useEffect(() => {
    setSearchParams((prev) => {
      if (areaId) prev.set("area", areaId);
      else prev.delete("area");

      if (ingredientId) prev.set("ingredient", ingredientId);
      else prev.delete("ingredient");

      if (currentPage) prev.set("page", currentPage);
      else prev.delete("page");

      return prev;
    });
  }, [areaId, ingredientId, currentPage, setSearchParams]);

  const handleIngredientSelect = (ingredient) => {
    setIngredientId(ingredient?.id);
    setCurrentPage(1);
  };

  const handleIngredientChange = (value) => {
    if (value) return;
    setIngredientId(null);
    setCurrentPage(1);
  };

  const handleAreaSelect = (area) => {
    setAreaId(area?.id);
    setCurrentPage(1);
  };

  const handleAreaChange = (value) => {
    if (value) return;
    setAreaId(null);
    setCurrentPage(1);
  };

  const totalPages = Math.ceil(total / recipesPerPage);

  const currentIngredient = ingredientId
    ? ingredients.find(({ id }) => id === Number(ingredientId))
    : {};

  const currentArea = areaId
    ? areas.find(({ id }) => id === Number(areaId))
    : {};

  return (
    <div className={css.recipesBlock}>
      <div className={css.recipesFiltersBlock}>
        <SearchSelect
          items={ingredients}
          placeholder="Ingredients"
          value={currentIngredient?.name ?? ""}
          onSelect={handleIngredientSelect}
          onChange={handleIngredientChange}
        />
        <SearchSelect
          items={areas}
          placeholder="Areas"
          value={currentArea?.name ?? ""}
          onSelect={handleAreaSelect}
          onChange={handleAreaChange}
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
