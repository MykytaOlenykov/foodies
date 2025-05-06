import React from "react";
import css from "./CategoryList.module.css";
import { Button } from "../Button/Button.jsx";

const categories = [
  {
    id: 1,
    name: "Italian",
    image: "/src/assets/images/categories/Desserts.webp@1x.webp",
  },
  {
    id: "all",
    name: "Asian",
    image: "/src/assets/images/categories/Desserts.webp@1x.webp",
  },
  {
    id: 6,
    name: "Desserts",
    image: "/src/assets/images/categories/Desserts.webp@1x.webp",
  },
];

const CategoryList = ({ onCategoryClick }) => {
  return (
    <div className={css.categoryList}>
      {categories.map((category) => (
        <div key={category.id} className={css.categoryCard}>
          <img src={category.image} alt={category.name} className={css.image} />
          <Button
            type="button"
            className={css.buttonOnImage}
            variant="light"
            size="medium"
            bordered={true}
            onClick={() => onCategoryClick(category.id, category.name)}
          >
            {category.name}
            <img src="/src/assets/icons/arrow-up-right.svg" alt="Select" />
          </Button>
        </div>
      ))}
    </div>
  );
};

export default CategoryList;
