import styles from "./Hero.module.css";
import HeroImageSet from "./HeroImageSet";

const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.heroSection}>
        <div className={styles.heroTextWrapper}>
          <h1 className={styles.heroTitle}>Improve Your Culinary Talents</h1>
          <p className={styles.heroSubtitle}>
            Amazing recipes for beginners in the world of cooking, enveloping
            you in the aromas and tastes of various cuisines.
          </p>
          <button className={styles.heroButton}>ADD RECIPE</button>
        </div>

        <HeroImageSet />
      </div>
    </section>
  );
};

export default Hero;
