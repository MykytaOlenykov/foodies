import React, { useState } from "react";
import CategoryList from "../CategoryList/CategoryList";
import Recipes from "../RecipesMainPage/Recipes/recipes.jsx";

const Categories = () => {
  const [selectedCategory, setSelectedCategory] = useState({
    categoryId: "",
    categoryName: "",
  });

  const handleCategoryClick = (categoryId, categoryName) => {
    setSelectedCategory({ categoryId: categoryId, categoryName: categoryName });
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
      <CategoryList onCategoryClick={handleCategoryClick} />
    </div>
  );
};

export default Categories;
