import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import { Typography } from "../Typography/Typography";
import { openSignIn } from "../../store/auth";
import { toggleFavorite } from "../../store/recipes";

import css from "./RecipeCard.module.css";
import ArrowUpIcon from "../../assets/icons/arrow-up-right.svg?react";
import HeartIcon from "../../assets/icons/heart.svg?react";
import NoImage from "../../assets/images/no-image.svg?react";

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
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const [isFavorite, setIsFavorite] = useState(favorite);

  const handleFavoriteClick = async () => {
    if (!isLoggedIn) {
      dispatch(openSignIn());
    }

    dispatch(toggleFavorite({ recipeId, isFavorite }));
    setIsFavorite((prev) => !prev);
  };

  const handleAuthorClick = () => {
    if (!isLoggedIn) {
      dispatch(openSignIn());
    } else {
      navigate(`/user/${owner.id}`);
    }
  };

  const handleRecipeClick = () => {
    navigate(`/recipe/${recipeId}`);
  };

  const getInitials = (name) => {
    if (!name) return "NN";
    const words = name.split(" ");
    const firstInitial = words[0]?.[0]?.toUpperCase() || "";
    const secondInitial = words[1]?.[0]?.toUpperCase() || "";
    return `${firstInitial}${secondInitial}`;
  };

  return (
    <div className={css.recipeCard}>
      <div className={css.thumb}>
        <img src={image || NoImage} alt={title} className={css.recipeImage} />
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
              onClick={handleAuthorClick}
            >
              {owner.avatarURL ? (
                <img
                  src={
                    "https://mykytaolenykov.com/foodies/api/static" +
                    owner.avatarURL
                  }
                  alt={owner.name}
                  className={css.avatar}
                />
              ) : (
                <div className={css.initials}>{getInitials(owner.name)}</div>
              )}
            </button>
            <span className={css.cardAuthorName}>{owner.name}</span>
          </div>

          <div className={css.recipeIcons}>
            <button
              type="button"
              className={`${css.receiptButtons} ${
                isFavorite ? css.isFavorite : ""
              }`}
              onClick={handleFavoriteClick}
            >
              {isFavorite ? (
                <HeartIcon className={`${css.fillFavorite} ${css.svgIcon}`} />
              ) : (
                <HeartIcon className={css.svgIcon} />
              )}
            </button>
            <button
              type="button"
              className={css.receiptButtons}
              onClick={handleRecipeClick}
            >
              <ArrowUpIcon className={css.svgIcon} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
