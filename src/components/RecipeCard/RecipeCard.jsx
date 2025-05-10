import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useLocation, useNavigate } from "react-router";
import toast from "react-hot-toast";

import { Typography } from "../Typography/Typography";
import { Image } from "../Image/Image";
import { openSignIn, selectIsLoggedIn } from "../../store/auth";

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
import { ButtonIcon } from "../ButtonIcon/ButtonIcon";
import { Avatar } from "../Avatar/Avatar.jsx";

export const RecipeCard = ({
  recipeId,
  title,
  image,
  description,
  owner,
  isFavorite: favorite,
  isMobile,
}) => {
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const [isFavorite, setIsFavorite] = useState(favorite);
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

    navigate(`/user/${owner.id}`, { state: { from: location } });
  };

  const navigateToRecipe = () => {
    navigate(`/recipe/${recipeId}`, { state: { from: location } });
  };

  // TODO: add util
  const imageURL = image?.startsWith("http")
    ? image
    : `${BACKEND_URL}static${image}`;

  return (
    <div className={css.recipeCard}>
      <div className={css.thumb}>
        <Image
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
          variant="body"
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
              <Avatar
                src={owner.avatarURL}
                alt={owner.name}
                name={owner.name}
                size={isMobile ? 32 : 40}
              />
            </button>
            <span className={css.cardAuthorName}>{owner.name}</span>
          </div>

          <div className={css.recipeIcons}>
            <ButtonIcon
              variant={isFavorite ? "dark" : "light"}
              size={isMobile ? "small" : "medium"}
              onClick={handleFavoriteClick}
              disabled={updating}
              icon={isFavorite ? <HeartIcon /> : <HeartIcon />}
            />

            <ButtonIcon
              variant="light"
              size={isMobile ? "small" : "medium"}
              onClick={navigateToRecipe}
              icon={<ArrowUpIcon />}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
