import styles from "./Home.module.css";
import { Hero } from "../../components/Hero/Hero.jsx";

export default function Home() {
  return (
    <>
      <Hero />
      <section className={styles.home}>
        <div className={styles.container}>
          <h1 className={styles.title}>Home Page</h1>
          <p className={styles.description}>
            This is a temporary stub for Home Page.
          </p>
        </div>
      </section>
    </>
  );
}
