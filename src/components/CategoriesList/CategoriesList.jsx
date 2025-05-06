import { Link } from "react-router";
import CategoryItem from "../CategoryItem/CategoryItem";
import css from "./CategoriesList.module.css";

export default function CategoryList({ categories }) {
  return (
    <ul className={css.ulCategoryList}>
      {categories.map((category) => (
        <li className={css.liCatlist} key={category.id}>
          <CategoryItem data={category} />
        </li>
      ))}
      <li className={css.liLoadMore}>
        <Link to={`/category/recipes`} className={css.allCategories}>
          All Categories
        </Link>
      </li>
    </ul>
  );
}
