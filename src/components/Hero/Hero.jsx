import styles from "./Hero.module.css";

import MobileLarge from "../../assets/images/hero/mobile_big_meat.webp@1x.webp";
import MobileSmall from "../../assets/images/hero/mobile_small_dessert.webp@1x.webp";

import TabletLarge from "../../assets/images/hero/tablet_big_meat.webp@1x.webp";
import TabletSmall from "../../assets/images/hero/tablet_small_dessert.webp@1x.webp";

import DesktopLarge from "../../assets/images/hero/desktop_big_meat.webp@1x.webp";
import DesktopSmall from "../../assets/images/hero/desktop_small_dessert.webp@1x.webp";

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

        <div className={styles.heroImageWrapper}>
          {/* Mobile */}
          <img
            src={MobileSmall}
            alt="Dish small mobile"
            className={`${styles.heroImageSmall} ${styles.mobile}`}
          />
          <img
            src={MobileLarge}
            alt="Dish large mobile"
            className={`${styles.heroImageLarge} ${styles.mobile}`}
          />

          {/* Tablet */}
          <img
            src={TabletSmall}
            alt="Dish small tablet"
            className={`${styles.heroImageSmall} ${styles.tablet}`}
          />
          <img
            src={TabletLarge}
            alt="Dish large tablet"
            className={`${styles.heroImageLarge} ${styles.tablet}`}
          />

          {/* Desktop */}
          <img
            src={DesktopSmall}
            alt="Dish small desktop"
            className={`${styles.heroImageSmall} ${styles.desktop}`}
          />
          <img
            src={DesktopLarge}
            alt="Dish large desktop"
            className={`${styles.heroImageLarge} ${styles.desktop}`}
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
