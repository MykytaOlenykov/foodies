import { Suspense } from "react";
import { Outlet } from "react-router";
import { Toaster } from "react-hot-toast";

import { Header, Footer, Loader } from "../../../components";
import { AuthModals } from "../../AuthModals";

import styles from "./SharedLayout.module.css";

const SharedLayout = () => {
  return (
    <>
      <div className={styles.container}>
        <Header />
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
        <Footer />
      </div>

      <Toaster position="top-center" reverseOrder={false} />

      <AuthModals />
    </>
  );
};

export default SharedLayout;
