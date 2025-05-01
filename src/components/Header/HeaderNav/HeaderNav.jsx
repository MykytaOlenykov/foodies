import cx from "classnames";
import { NavLink } from "react-router";
import styles from "./HeaderNav.module.css";
import { Button } from "../../Button/Button";
import { useSelector } from "react-redux";

// Temp stub instead of Redux-selector
const selectAuthIsSignedIn = () => false;

const HeaderNav = ({ isHome, notAutorizedClick }) => {
  const isSignedIn = useSelector(selectAuthIsSignedIn);

  return (
    <nav className={styles.navigation}>
      <ul className={cx(!isHome && styles.headerAll)}>
        <li>
          <NavLink to="/">
            <Button
              variant="light"
              size="small"
              className={cx(
                styles.navigationButton,
                !isHome && styles.navigationButton_inactive,
              )}
            >
              Home
            </Button>
          </NavLink>
        </li>
        <li>
          {isSignedIn ? (
            <NavLink to="/recipe/add">
              <Button
                variant="light"
                size="small"
                className={cx(
                  styles.navigationButton,
                  isHome && styles.navigationButton_inactive,
                )}
              >
                Add recipe
              </Button>
            </NavLink>
          ) : (
            <Button
              variant="light"
              size="small"
              onClick={notAutorizedClick}
              className={cx(
                styles.navigationButton,
                isHome && styles.navigationButton_inactive,
              )}
            >
              Add recipe
            </Button>
          )}
        </li>
      </ul>
    </nav>
  );
};

export default HeaderNav;
