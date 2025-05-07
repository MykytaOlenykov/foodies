import styles from "./Home.module.css";
import Hero from "../../components/Hero/Hero";

export default function Home() {
  return (
    <section className={styles.home}>
      <div className={styles.container}>
        <div>
          <Hero
            title="Improve Your Culinary Talents"
            subtitle="Amazing recipes for beginners in the world of cooking, enveloping you in the aromas and tastes of various cuisines."
            buttonText="Add Recipe"
            onButtonClick={() => console.log("Button clicked!")}
          />
          <Categories />
        </div>
      </div>
    </section>
  );
}
