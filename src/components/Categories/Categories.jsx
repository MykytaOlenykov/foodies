import React, { useState } from "react";
import { useSelector } from "react-redux";
import CategoryList from "../CategoryList/CategoryList";
import Recipes from "../RecipesMainPage/Recipes/recipes.jsx"; // Імпортуємо компонент Recipes

const Categories = () => {
  // Стан для збереження рецептів
  const [selectedCategory, setSelectedCategory] = useState({
    categoryId: "",
    categoryName: "",
  }); // Стан для збереження вибраної категорії

  const isLoading = useSelector((state) => state.recipes.isLoading);
  const error = useSelector((state) => state.recipes.error);

  const handleCategoryClick = (categoryId, categoryName) => {
    setSelectedCategory({ categoryId: categoryId, categoryName: categoryName }); // Зберігаємо вибрану категорію
  };

  if (selectedCategory.categoryId) {
    return (
      <Recipes
        categoryId={selectedCategory.categoryId}
        categoryName={selectedCategory.categoryName}
      />
    );
  }

  return (
    <div>
      {isLoading && <p>Loading...</p>}
      {error && <div className="notification">{error}</div>}
      <CategoryList onCategoryClick={handleCategoryClick} />
    </div>
  );
};

export default Categories;
