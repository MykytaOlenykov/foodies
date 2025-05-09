import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

import { Typography } from "../Typography/Typography";
import { openSignIn, selectIsLoggedIn, selectUser } from "../../store/auth";

import css from "./RecipeCard.module.css";
import ArrowUpIcon from "../../assets/icons/arrow-up-right.svg?react";
import HeartIcon from "../../assets/icons/heart.svg?react";
import { BACKEND_URL, DEFAULT_ERROR_MESSAGE } from "../../constants/common";
import { normalizeHttpError } from "../../utils";
import { appClearSessionAction } from "../../store/utils";
import {
  addFavoriteRecipe,
  removeFavoriteRecipe,
} from "../../services/recipes";

export const RecipeCard = ({
  recipeId,
  title,
  image,
  description,
  owner,
  isFavorite: favorite,
}) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const { id } = useSelector(selectUser);
  const [isFavorite, setIsFavorite] = useState(favorite);
  const [updating, setUpdating] = useState(false);

  const showFavoriteBtn = id !== owner.id;

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
        setIsFavorite(false);
      } else {
        const data = await addFavoriteRecipe(recipeId);
        message = data.message;
        setIsFavorite(true);
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

  const navigateToAuthor = () => {
    if (!isLoggedIn) {
      dispatch(openSignIn());
      return;
    }

    navigate(`/user/${owner.id}`);
  };

  const navigateToRecipe = () => {
    navigate(`/recipe/${recipeId}`);
  };

  // TODO: add util
  const imageURL = image?.startsWith("http")
    ? image
    : `${BACKEND_URL}static${image}`;

  return (
    <div className={css.recipeCard}>
      <div className={css.thumb}>
        <img
          src={imageURL}
          alt={title}
          className={css.recipeImage}
          loading="lazy"
        />
      </div>

      <div className={css.cardInfo}>
        <Typography lineClamp={1} truncate variant="h4">
          {title}
        </Typography>
        <Typography
          lineClamp={3}
          truncate
          className={css.cardDescription}
          variant="p"
        >
          {description}
        </Typography>

        <div className={css.cardActions}>
          <div className={css.cardAuthorInfo}>
            <button
              type="button"
              className={css.cardAuthorButton}
              onClick={navigateToAuthor}
            >
              {owner.avatarURL ? (
                <img
                  // TODO: add util
                  src={`${BACKEND_URL}static${owner.avatarURL}`}
                  alt={owner.name}
                  className={css.avatar}
                  loading="lazy"
                />
              ) : (
                <div className={css.initials}>
                  {owner.name ? owner.name[0] : "U"}
                </div>
              )}
            </button>
            <span className={css.cardAuthorName}>{owner.name}</span>
          </div>

          <div className={css.recipeIcons}>
            {showFavoriteBtn && (
              <button
                type="button"
                className={`${css.receiptButtons} ${
                  isFavorite ? css.isFavorite : ""
                }`}
                onClick={handleFavoriteClick}
                disabled={updating}
              >
                {isFavorite ? (
                  <HeartIcon className={`${css.fillFavorite} ${css.svgIcon}`} />
                ) : (
                  <HeartIcon className={css.svgIcon} />
                )}
              </button>
            )}
            <button
              type="button"
              className={css.receiptButtons}
              onClick={navigateToRecipe}
            >
              <ArrowUpIcon className={css.svgIcon} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
