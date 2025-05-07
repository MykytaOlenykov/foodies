import styles from "./Copyright.module.css";

const Copyright = () => {
  const year = new Date().getFullYear();
  return (
    <div className={styles.wrapper}>
      &copy; {year}, Foodies. All rights reserved
    </div>
  );
};

export default Copyright;
