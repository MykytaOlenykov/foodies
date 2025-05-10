import { IngredientBadge } from "../IngredientBadge/IngredientBadge";
import { Typography } from "../Typography/Typography";

import css from "./RecipeIngredients.module.css";

export const RecipeIngredients = ({ ingredients }) => {
  return (
    <div>
      <Typography className={css.title} variant="h3">
        Ingredients
      </Typography>

      <ul className={css.list}>
        {ingredients.map((ingredient) => (
          <li key={ingredient.id}>
            <IngredientBadge
              imgURL={ingredient.imgURL}
              name={ingredient.name}
              measure={ingredient.measure}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};
