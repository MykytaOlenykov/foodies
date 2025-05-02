import { useSelector } from "react-redux";
import clx from "clsx";

import { Button } from "../Button/Button";
import styles from "./Auth.module.css";
import Loader from "../Loader/Loader";

// Temp stub instead of Redux-selector
const selectAuthIsLoading = () => false;

const Auth = ({
  isHomepage = true,
  openSignIn = () => {},
  openSignUp = () => {},
}) => {
  const isAuthLoading = useSelector(selectAuthIsLoading);

  return isAuthLoading ? (
    <Loader
      className={clx(
        styles["auth-loader"],
        isHomepage ? styles["loader-light"] : styles["loader-dark"],
      )}
    />
  ) : (
    <div className={styles.authContainer}>
      <Button
        variant="light"
        size="small"
        className={clx(
          styles.authButton,
          isHomepage ? styles.homeSignIn : styles.allSighIn,
        )}
        onClick={openSignIn}
      >
        SIGN IN
      </Button>
      <Button
        variant="dark"
        size="small"
        className={clx(
          styles.authButton,
          isHomepage ? styles.homeSignUp : styles.allSighUp,
        )}
        onClick={openSignUp}
      >
        SIGN UP
      </Button>
    </div>
  );
};

export default Auth;
