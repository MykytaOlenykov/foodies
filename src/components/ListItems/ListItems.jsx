import {
  emptyTabMessagesForOwner,
  emptyTabMessagesForUser,
  TabKey,
} from "../../constants/common";
import { RecipePreview } from "../RecipePreview/RecipePreview";
import { Typography } from "../Typography/Typography";
import styles from "./ListItems.module.css";
import { UserCard } from "../UserCard/UserCard.jsx";

/**
 * @param {object} props
 * @param {Array} props.items
 * @param {string} props.tab
 * @param {boolean} props.isMyProfile
 * @param {Function} props.onDelete — optional, callback to remove the item from UI after deletion
 */
export const ListItems = ({
  items,
  tab,
  isMyProfile,
  onDelete,
  onFollow,
  onUnFollow,
}) => {
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

  const isRecipeTab = [TabKey.RECIPES, TabKey.FAVORITES].includes(tab);

  return (
    <div className={styles.listContainer}>
      {items.map((item) =>
        isRecipeTab ? (
          <RecipePreview
            key={item.id}
            recipe={item}
            tab={tab}
            isMyProfile={isMyProfile}
            onDelete={onDelete}
          />
        ) : (
          <UserCard
            key={item.id}
            user={item}
            tabType={tab}
            onFollow={onFollow}
            onUnfollow={onUnFollow}
          />
        ),
      )}
    </div>
  );
};
