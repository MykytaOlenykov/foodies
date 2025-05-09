import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { openSignIn } from "../../../store/auth";
import { toggleFavorite } from "../../../store/recipes";

import NoImage from "../../../assets/images/no-image.svg?react";
import HeartIcon from "../../../assets/icons/heart.svg?react";
import ArrowUpIcon from "../../../assets/icons/arrow-up-right.svg?react";
import css from "./RecipeCard.module.css";
import { Typography } from "../../Typography/Typography";

const RecipeCard = ({
  recipeId,
  title,
  image,
  description,
  owner,
  favorited,
  mediaMode,
}) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const [isFavorite, setIsFavorite] = useState(favorited);

  let truncatedDescription = null;
  let truncatedCardTitle = null;

  if (mediaMode === "desktop") {
    truncatedDescription =
      description.length > 70 ? description.slice(0, 67) + "..." : description;
    truncatedCardTitle = title.length > 18 ? title.slice(0, 20) + "..." : title;
  } else if (mediaMode === "tablet") {
    truncatedDescription =
      description.length > 70 ? description.slice(0, 83) + "..." : description;
    truncatedCardTitle = title.length > 25 ? title.slice(0, 24) + "..." : title;
  } else {
    truncatedDescription =
      description.length > 100 ? description.slice(0, 97) + "..." : description;
    truncatedCardTitle = title;
  }

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
        <Typography className={css.cardTitle} variant="h3">
          {truncatedCardTitle}{" "}
        </Typography>
        <Typography className={css.cardDescription} variant="p">
          {truncatedDescription}{" "}
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

export default RecipeCard;
