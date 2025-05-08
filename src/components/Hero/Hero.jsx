import styles from "./Hero.module.css";
import { HeroImageSet } from "./HeroImageSet";
import { Typography } from "../Typography/Typography";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.heroSection}>
        <div className={styles.heroTextWrapper}>
          <Typography className={styles.heroTitle} variant="h1">
            Improve Your Culinary Talents
          </Typography>
          <Typography className={styles.heroSubtitle} variant="p">
            Amazing recipes for beginners in the world of cooking, enveloping
            you in the aromas and tastes of various cuisines.
          </Typography>
          <button className={styles.heroButton}>ADD RECIPE</button>
        </div>
        <HeroImageSet />
      </div>
    </section>
  );
};
