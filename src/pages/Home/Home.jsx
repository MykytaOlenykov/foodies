import styles from "./Home.module.css";
import Hero from "../../components/Hero/Hero";
import Categories from "../../components/Categories/Categories";

export default function Home() {
  return (
    <section className={styles.home}>
      <div className={styles.container}>
        <h1 className={styles.title}>Home Page</h1>
        <p className={styles.description}>
          This is a temporary stub for Home Page.
        </p>
        <div>
          <Hero
            title="Welcome to the Recipe App"
            subtitle="Discover delicious recipes from around the world"
            buttonText="Get Started"
            onButtonClick={() => console.log("Button clicked!")}
          />
          <Categories />
        </div>
      </div>
    </section>
  );
}
