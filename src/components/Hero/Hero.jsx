import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import { Typography } from "../Typography/Typography";
import { Button } from "../Button/Button";
import { openSignIn, selectIsLoggedIn } from "../../store/auth";

import styles from "./Hero.module.css";

export const Hero = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isLoggedIn = useSelector(selectIsLoggedIn);

  const handleClick = () => {
    if (isLoggedIn) {
      navigate("/recipe/add");
    } else {
      dispatch(openSignIn());
    }
  };

  return (
    <section className={styles.container}>
      <div className={styles.heroSection}>
        <div className={styles.heroTextWrapper}>
          <Typography className={styles.heroTitle} variant="h1">
            Improve Your Culinary Talents
          </Typography>
          <Typography className={styles.heroSubtitle} variant="p">
            Amazing recipes for beginners in the world of cooking, enveloping
            you in the aromas and tastes of various cuisines.
          </Typography>
          <Button
            bordered
            variant="transparent"
            size="medium"
            onClick={handleClick}
          >
            Add recipe
          </Button>
        </div>
      </div>
    </section>
  );
};
