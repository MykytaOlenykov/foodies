import { Link } from "react-router-dom";
import css from "./RecipeCard.module.css";

const RecipeCard = ({ recipe }) => {
  const { id, title, preview } = recipe;

  return (
    <Link to={`/recipe/${id}`} className={css.card}>
      <img src={preview} alt={title} className={css.image} />
      <div className={css.title}>{title}</div>
    </Link>
  );
};

export default RecipeCard;
