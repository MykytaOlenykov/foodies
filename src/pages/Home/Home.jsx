import styles from "./Home.module.css";
import Categories from "../../components/Categories/Categories";

export default function Home() {
  return (
    <section className={styles.home}>
      <div className={styles.container}>
        <h1 className={styles.title}>Home Page</h1>
        <p className={styles.description}>
          This is a temporary stub for Home Page.
        </p>
        <Categories />
      </div>
    </section>
  );
}
