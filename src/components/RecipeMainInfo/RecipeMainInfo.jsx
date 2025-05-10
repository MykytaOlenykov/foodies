import { useNavigate } from "react-router-dom";

import { Typography } from "../Typography/Typography";
import { Image } from "../Image/Image";
import { RecipeIngredients } from "../RecipeIngredients";
import { Avatar } from "../Avatar/Avatar";
import { normalizeImagePath } from "../../utils";
import { useBreakpoint } from "../../hooks/useBreakpoint";

import css from "./RecipeMainInfo.module.css";

export const RecipeMainInfo = ({
  imgURL,
  title,
  category,
  description,
  time,
  owner,
  ingredients,
}) => {
  const breakpoint = useBreakpoint();
  const navigate = useNavigate();

  const textColor = ["small-mobile", "mobile"].includes(breakpoint)
    ? "gray"
    : "black";

  const navigateToAuthor = () => {
    navigate(`/user/${owner?.id}`);
  };

  const avatarUrl = owner?.avatarURL && normalizeImagePath(owner.avatarURL);

  return (
    <div className={css.container}>
      <div className={css.thumb}>
        <Image
          src={normalizeImagePath(imgURL)}
          alt={title}
          className={css.img}
        />
      </div>

      <div className={css.info}>
        <div>
          <Typography variant="h3">{title}</Typography>

          <div className={css.category}>
            <span>{category?.name}</span>
            <span>{time} min</span>
          </div>

          <Typography
            variant="body"
            textColor={textColor}
            className={css.description}
          >
            {description}
          </Typography>

          <button
            className={css.authorBlock}
            type="button"
            onClick={navigateToAuthor}
          >
            <Avatar src={avatarUrl} size={32} alt={owner?.name} />
            <div className={css.authorText}>
              <Typography variant="body" textColor="gray">
                Created by:
              </Typography>

              <Typography variant="body" textColor="main">
                {owner?.name}
              </Typography>
            </div>
          </button>
        </div>

        <RecipeIngredients ingredients={ingredients} />
      </div>
    </div>
  );
};
