import clsx from "clsx";
import { Button } from "../Button/Button";
import styles from "./TabsList.module.css";
import { tabsForOwner, tabsForUser } from "../../constants/common";

/**
 * @param {object} props
 * @param {boolean} props.isMyProfile
 * @param {string} props.activeTab
 * @param {(tabKey: string) => void} props.onTabChange
 */
export const TabsList = ({ isMyProfile, activeTab, onTabChange }) => {
  const tabs = isMyProfile ? tabsForOwner : tabsForUser;

  return (
    <div className={styles.tabs}>
      {tabs.map(({ key, label }) => (
        <Button
          key={key}
          onClick={() => onTabChange(key)}
          className={clsx(styles.tab, {
            [styles.active]: activeTab === key,
          })}
        >
          {label}
        </Button>
      ))}
    </div>
  );
};
