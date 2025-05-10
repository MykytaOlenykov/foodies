import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import { useLocation } from "react-router";
import toast from "react-hot-toast";

import {
  Breadcrumbs,
  BreadcrumbsDivider,
  BreadcrumbsItem,
} from "../../components/Breadcrumbs/Breadcrumbs.jsx";
import { RecipeMainInfo } from "../RecipeMainInfo";
import { normalizeHttpError } from "../../utils/normalizeHttpError.js";
import { getRecipeById } from "../../services/recipes";

import css from "./RecipeInfo.module.css";
import Loader from "../Loader/Loader.jsx";

export const RecipeInfo = () => {
  const navigate = useNavigate();
  const { state } = useLocation();
  const goBackPath = useRef(state.from ?? "/");

  const { recipeId } = useParams();
  const [recipe, setRecipe] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchRecipe = async () => {
      try {
        setLoading(true);
        const recipe = await getRecipeById(recipeId);
        setRecipe(recipe);
      } catch (err) {
        const { message } = normalizeHttpError(err);
        toast.error(message);
      } finally {
        setLoading(false);
      }
    };

    fetchRecipe();
  }, [recipeId]);

  if (loading) return <Loader />;

  return (
    <>
      <Breadcrumbs>
        <BreadcrumbsItem
          onClick={() => {
            navigate(goBackPath.current);
          }}
        >
          Home
        </BreadcrumbsItem>
        <BreadcrumbsDivider />
        <BreadcrumbsItem isActive>{recipe.title}</BreadcrumbsItem>
      </Breadcrumbs>

      <div className={css.detailsBlock}>
        <RecipeMainInfo
          imgURL={recipe.thumb}
          title={recipe.title}
          description={recipe.description}
          category={recipe.category}
          time={recipe.time}
          owner={recipe.owner}
          ingredients={recipe.ingredients}
        />
      </div>
    </>
  );
};
