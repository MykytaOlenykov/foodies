import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import toast from "react-hot-toast";

import { Typography } from "../Typography/Typography";
import { Button } from "../Button/Button";
import { openSignIn, selectIsLoggedIn } from "../../store/auth";
import { DEFAULT_ERROR_MESSAGE } from "../../constants/common";
import { appClearSessionAction } from "../../store/utils";
import { normalizeHttpError } from "../../utils";
import {
  addFavoriteRecipe,
  removeFavoriteRecipe,
} from "../../services/recipes";

import styles from "./RecipePreparation.module.css";

export const RecipePreparation = ({
  recipeId,
  textColor,
  instructions,
  isFavorite,
  updateFavoriteStatus,
}) => {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const [updating, setUpdating] = useState(false);

  const handleFavoriteClick = async () => {
    if (!isLoggedIn) {
      dispatch(openSignIn());
      return;
    }

    try {
      setUpdating(true);
      let message;

      if (isFavorite) {
        const data = await removeFavoriteRecipe(recipeId);
        message = data.message;
        updateFavoriteStatus(false);
      } else {
        const data = await addFavoriteRecipe(recipeId);
        message = data.message;
        updateFavoriteStatus(true);
      }

      toast.success(message);
    } catch (error) {
      const { message, status } = normalizeHttpError(error);
      toast.error(message ?? DEFAULT_ERROR_MESSAGE);
      if (status === 401) dispatch(appClearSessionAction());
    } finally {
      setUpdating(false);
    }
  };

  return (
    <div>
      <Typography variant="h3" textColor="black" className={styles.title}>
        Recipe Preparation
      </Typography>

      <Typography variant="body" textColor={textColor} className={styles.text}>
        {instructions}
      </Typography>

      <Button
        onClick={handleFavoriteClick}
        type="button"
        variant="light"
        size="medium"
        bordered
        disabled={updating}
      >
        {isFavorite ? "Remove from favorites" : "Add to favorites"}
      </Button>
    </div>
  );
};
