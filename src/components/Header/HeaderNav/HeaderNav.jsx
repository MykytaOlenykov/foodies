import clx from "clsx";
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
      <ul className={clx(!isHome && styles.headerAll)}>
        <li>
          <NavLink to="/">
            <Button variant="light" size="small" bordered={isHome}>
              Home
            </Button>
          </NavLink>
        </li>
        <li>
          {isSignedIn ? (
            <NavLink to="/recipe/add">
              <Button variant="light" size="small" bordered={isHome}>
                Add recipe
              </Button>
            </NavLink>
          ) : (
            <Button
              variant="light"
              size="small"
              bordered={isHome}
              onClick={notAutorizedClick}
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
