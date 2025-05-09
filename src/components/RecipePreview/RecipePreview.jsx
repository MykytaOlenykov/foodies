import { useNavigate } from "react-router-dom";
import styles from "./RecipePreview.module.css";
import ArrowUpRightIcon from "../../assets/icons/arrow-up-right.svg?react";
import TrashIcon from "../../assets/icons/trash.svg?react";
import { TabKey } from "../../constants/common";
import { normalizeHttpError } from "../../utils";
import { Typography } from "../Typography/Typography";
import { ButtonIcon } from "../ButtonIcon/ButtonIcon";
import toast from "react-hot-toast";
import { normalizeImagePath } from "../../utils/normalizeImagePath";
import { deleteRecipeById, removeFavoriteRecipe } from "../../services/recipes";

/**
 * @param {object} props
 * @param {object} props.recipe
 * @param {string} props.tab — TabKey.RECIPES | TabKey.FAVORITES
 * @param {boolean} props.isMyProfile
 * @param {Function} props.onDelete — callback to remove the item from UI after deletion
 */
export const RecipePreview = ({ recipe, tab, isMyProfile, onDelete }) => {
  const navigate = useNavigate();

  const handleDelete = async () => {
    try {
      let msg = "";
      if (tab === TabKey.RECIPES) {
        const data = await deleteRecipeById(recipe.id);
        msg = data?.message ?? "Recipe removed successfully";
      } else {
        const data = await removeFavoriteRecipe(recipe.id);
        msg = data?.message ?? "Recipe removed from favorites successfully";
      }

      if (msg) {
        toast.success(msg);
      }
      onDelete();
    } catch (err) {
      const error = normalizeHttpError(err);
      toast.error(error.message);
    }
  };

  return (
    <div className={styles.card}>
      <img
        src={normalizeImagePath(recipe.thumb)}
        alt={recipe.title}
        className={styles.image}
      />
      <div className={styles.content}>
        <Typography
          variant="h4"
          textColor="black"
          truncate="true"
          lineClamp={1}
        >
          {recipe.title}
        </Typography>
        <Typography
          className={styles.description}
          variant="body"
          textColor="gray"
          truncate="true"
          lineClamp={2}
        >
          {recipe.description}
        </Typography>
      </div>
      <div className={styles.actions}>
        <ButtonIcon
          variant="light"
          size="medium"
          icon={<ArrowUpRightIcon width={18} height={18} />}
          onClick={() => navigate(`/recipes/${recipe.id}`)}
        />

        {isMyProfile && (
          <ButtonIcon
            variant="light"
            size="medium"
            icon={<TrashIcon width={18} height={18} />}
            onClick={handleDelete}
          />
        )}
      </div>
    </div>
  );
};
