import { emptyTabMessages } from "../../constants/common";
import { Typography } from "../Typography/Typography";
import styles from "./ListItems.module.css";

/**
 * @param {object} props
 * @param {Array} props.items
 * @param {string} props.tab
 */
export const ListItems = ({ items, tab }) => {
  if (!items || items.length === 0) {
    const message = emptyTabMessages[tab] || "No data found.";
    return (
      <Typography textColor="black" className={styles.notFoundMsg}>
        {message}
      </Typography>
    );
  }

  const isRecipeTab = ["recipes", "favorites"].includes(tab);

  return (
    <div className={styles.listContainer}>
      {items.map((item) =>
        isRecipeTab ? (
          <div key={item.id} {...item}>
            Here RecipePreview Component
          </div>
        ) : (
          <div key={item.id} {...item}>
            Here UserCard Compnent
          </div>
        ),
      )}
    </div>
  );
};
