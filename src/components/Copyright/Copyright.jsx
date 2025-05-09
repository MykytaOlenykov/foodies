import styles from "./Copyright.module.css";

export const Copyright = () => {
  const year = new Date().getFullYear();
  return (
    <div className={styles.wrapper}>
      &copy; {year}, Foodies. All rights reserved
    </div>
  );
};
