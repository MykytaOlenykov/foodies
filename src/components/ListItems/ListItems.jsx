import {
  emptyTabMessagesForOwner,
  emptyTabMessagesForUser,
} from "../../constants/common";
import { Typography } from "../Typography/Typography";
import styles from "./ListItems.module.css";

/**
 * @param {object} props
 * @param {Array} props.items
 * @param {string} props.tab
 * @param {boolean} props.isMyProfile
 */
export const ListItems = ({ items, tab, isMyProfile }) => {
  if (!items || items.length === 0) {
    const messages = isMyProfile
      ? emptyTabMessagesForOwner
      : emptyTabMessagesForUser;
    const message = messages[tab] || "No data found.";

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
            {`RecipePreview Component: ${item.id} ${item.title} ${item.thumb} ${item.description}`}
          </div>
        ) : (
          <div key={item.id} {...item}>
            {`UserCard Compnent: ${item.id} ${item.name} ${item.avatarURL} ${item.recipesCount}`}
          </div>
        ),
      )}
    </div>
  );
};
