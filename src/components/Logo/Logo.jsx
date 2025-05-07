import { NavLink } from "react-router";
import clx from "clsx";
import styles from "./Logo.module.css";

export const Logo = () => {
  return (
    <NavLink
      className={clx(styles.navLink, styles.logo, styles.logoWhite)}
      to="/"
      aria-label="Logo Foodies"
    >
      Foodies
    </NavLink>
  );
};
