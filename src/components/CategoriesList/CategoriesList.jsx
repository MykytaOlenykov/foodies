import { Link } from "react-router";
import CategoryItem from "../CategoryItem/CategoryItem";
import css from "./CategoriesList.module.css";
import { Typography } from "../Typography/Typography";

export function CategoryList({ categories }) {
  return (
    <ul className={css.ulCategoryList}>
      {categories.map((category) => (
        <li className={css.liCatlist} key={category.id}>
          <CategoryItem data={category} />
        </li>
      ))}
      <li>
        <Link to={"/?category=all"} className={css.liLoadMore}>
          <Typography
            variant="h4"
            textColor="white"
            className={css.allCategories}
          >
            All Categories
          </Typography>
        </Link>
      </li>
    </ul>
  );
}
