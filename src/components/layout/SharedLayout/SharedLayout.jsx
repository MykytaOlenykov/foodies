import { Outlet } from "react-router";
import styles from "./SharedLayout.module.css";
import { Header, Hero, Footer, Loader } from "../../../components";
import { Suspense } from "react";

const SharedLayout = () => {
  return (
    <div className={styles.container}>
      <Header />
      <Hero />
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
      <Footer />
    </div>
  );
};

export default SharedLayout;
