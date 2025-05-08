import styles from "./Hero.module.css";

export const HeroImageSet = () => {
  return (
    <div className={styles.heroImageWrapper}>
      <img alt="Dish small" className={styles.heroImageSmall} />
      <img alt="Dish large" className={styles.heroImageLarge} />
    </div>
  );
};
