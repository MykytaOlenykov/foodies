import styles from "./Loader.module.css";

export default function Loader() {
  return (
    <div className={styles.loaderWrapper}>
      <span class={styles.loader}></span>
    </div>
  );
}
