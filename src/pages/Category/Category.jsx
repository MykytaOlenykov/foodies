import { useEffect, useState } from "react";
import { CategoryList } from "../../components/CategoriesList/CategoriesList";
import allCategories from "./categorieList.json";
import Container from "../../components/UI/Container/Container";
import css from "./Category.module.css";
import { Typography } from "../../components/Typography/Typography";

export default function Category() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const limit = window.innerWidth < 768 ? 8 : 11;
    setCategories(allCategories.slice(0, limit));
  }, []);
  return (
    <Container>
      <div className={css.headWrapper}>
        <Typography variant="h2">Categories</Typography>
        <Typography variant="body" className={css.description}>
          Discover a limitless world of culinary possibilities and enjoy
          exquisite recipes that combine taste, style and the warm atmosphere of
          the kitchen.
        </Typography>
      </div>
      {categories.length > 0 && <CategoryList categories={categories} />}
    </Container>
  );
}
