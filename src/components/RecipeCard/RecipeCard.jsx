import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import css from "./RecipeCard.module.css";

const RecipeCard = ({
  recipeId,
  title,
  image,
  description,
  owner,
  isAuthenticated,
  favorited,
}) => {
  const navigate = useNavigate();
  const [isFavorite, setIsFavorite] = useState(favorited); // Локальний стан для улюбленого рецепта
  const [loading, setLoading] = useState(false); // Стан для відстеження запиту

  const truncatedDescription =
    description.length > 100 ? description.slice(0, 97) + "..." : description;

  isAuthenticated = true;

  const handleFavoriteClick = async () => {
    if (!isAuthenticated) {
      alert("Please sign in to manage your favorite recipes."); // Замініть на виклик Modal
      return;
    }

    try {
      setLoading(true);
      const response = await fetch(
        `https://mykytaolenykov.com/foodies/api/recipes/favorites/${recipeId}`,
        {
          method: isFavorite ? "DELETE" : "POST", // DELETE для видалення, POST для додавання
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("token")}`, // Додаємо токен авторизації
          },
        },
      );
      if (!response.ok) {
        throw new Error("Failed to update favorite status");
      }
      setIsFavorite((prev) => !prev); // Змінюємо локальний стан
    } catch (error) {
      console.error("Error updating favorite status:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleAuthorClick = () => {
    if (isAuthenticated) {
      navigate(`/user/${owner.id}`); // Перенаправляємо на сторінку профілю автора
    } else {
      // Відкриваємо модальне вікно для авторизації
      alert("Please sign in to view the author's profile."); // Замініть на виклик Modal
    }
  };

  const handleRecipeClick = () => {
    navigate(`/recipe/${recipeId}`); // Перенаправляємо на сторінку рецепта
  };

  return (
    <div className={css.recipeCard}>
      <div className={css.thumb}>
        <img src={image} alt={title} className={css.recipeImage} />
      </div>
      <div className={css.cardInfo}>
        <h3 className={css.title}>{title}</h3>
        <p className={css.description}>{truncatedDescription}</p>
        <div className={css.actions}>
          <div className={css.authorInfo}>
            <button
              type="button"
              className={css.authorButton}
              onClick={handleAuthorClick}
            >
              <img
                src={owner.avatar || "/src/assets/images/foto.jpg"}
                alt={owner.name}
                className={css.avatar}
              />
            </button>
            <span className={css.authorName}>{owner.name}</span>
          </div>
          <div className={css.recipeIcons}>
            {/* Кнопка для улюблених */}
            <button
              type="button"
              className={`${css.receiptButtons} ${
                isFavorite ? css.isFavorite : ""
              }`}
              onClick={handleFavoriteClick}
              disabled={loading}
            >
              {isFavorite ? (
                <svg width="16" height="16" fill="white">
                  <path d="M14.317 5.667a3.019 3.019 0 0 0-.684-1.915l-.2-.22a3.019 3.019 0 0 0-1.837-.868l-.296-.015a3.019 3.019 0 0 0-1.914.684l-.22.2-.707.707a.65.65 0 0 1-.919 0l-.707-.707A3.017 3.017 0 1 0 2.566 7.8L8 13.234 13.434 7.8l.199-.22a3.02 3.02 0 0 0 .684-1.913Zm1.3 0A4.317 4.317 0 0 1 14.5 8.566l-.147.153-5.893 5.894a.65.65 0 0 1-.919 0L1.646 8.719a4.318 4.318 0 1 1 6.107-6.105l.246.246.248-.246.153-.147a4.317 4.317 0 0 1 2.9-1.119l.212.006a4.316 4.316 0 0 1 2.84 1.26l.147.153a4.319 4.319 0 0 1 1.118 2.9Z" />
                </svg>
              ) : (
                <svg width="16" height="16" fill="black">
                  <path d="M14.317 5.667a3.019 3.019 0 0 0-.684-1.915l-.2-.22a3.019 3.019 0 0 0-1.837-.868l-.296-.015a3.019 3.019 0 0 0-1.914.684l-.22.2-.707.707a.65.65 0 0 1-.919 0l-.707-.707A3.017 3.017 0 1 0 2.566 7.8L8 13.234 13.434 7.8l.199-.22a3.02 3.02 0 0 0 .684-1.913Zm1.3 0A4.317 4.317 0 0 1 14.5 8.566l-.147.153-5.893 5.894a.65.65 0 0 1-.919 0L1.646 8.719a4.318 4.318 0 1 1 6.107-6.105l.246.246.248-.246.153-.147a4.317 4.317 0 0 1 2.9-1.119l.212.006a4.316 4.316 0 0 1 2.84 1.26l.147.153a4.319 4.319 0 0 1 1.118 2.9Z" />
                </svg>
              )}
            </button>
            {/* Кнопка для переходу на сторінку рецепта */}
            <button
              type="button"
              className={css.receiptButtons}
              onClick={handleRecipeClick}
            >
              <img
                src="/src/assets/icons/arrow-up-right.svg"
                alt="Recipe Page"
              />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecipeCard;
