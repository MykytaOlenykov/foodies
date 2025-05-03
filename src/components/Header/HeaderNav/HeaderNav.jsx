import clx from "clsx";
import { NavLink } from "react-router";
import styles from "./HeaderNav.module.css";
import { Button } from "../../Button/Button";
import { useSelector } from "react-redux";

// Temp stub instead of Redux-selector
const selectAuthIsSignedIn = () => false;
const selectAuthHasSession = () => false;

const HeaderNav = ({ isHome, notAutorizedClick }) => {
  const isSignedIn = useSelector(selectAuthIsSignedIn);
  const hasSession = useSelector(selectAuthHasSession);

  if (!hasSession) return <nav className={styles.navigation} />;

  return (
    <nav className={styles.navigation}>
      <ul className={clx(styles.wrap_navigation, !isHome && styles.headerAll)}>
        <li>
          <NavLink to="/">
            <Button variant="dark" size="small" bordered={isHome}>
              Home
            </Button>
          </NavLink>
        </li>
        <li>
          {isSignedIn ? (
            <NavLink to="/recipe/add">
              <Button variant="dark" size="small" bordered={isHome}>
                Add recipe
              </Button>
            </NavLink>
          ) : (
            <Button
              variant="dark"
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