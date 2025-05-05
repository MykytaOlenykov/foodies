import { NavLink, useLocation } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import clx from "clsx";

import Auth from "../Auth/Auth";
import HeaderNav from "./HeaderNav/HeaderNav";
import HeaderProfile from "./HeaderProfile/HeaderProfile";
import Modal from "../Modal/Modal";
import { openLogOut, openSignIn, openSignUp } from "../../store/auth";

import styles from "./Header.module.css";

// Temp stub instead of Redux-selector
// TODO: Temp stub for Modal
const selectAuthIsSignedIn = () => false;

export default function Header() {
  const dispatch = useDispatch();

  const { pathname } = useLocation();

  const isSignedIn = useSelector(selectAuthIsSignedIn);

  const isHome = pathname === "/" || pathname.split("/")[1] === "category";

  return (
    <header className={clx(isHome ? styles.header : styles.headerAll)}>
      <NavLink
        className={clx(styles.logo, !isHome && styles.logo_white)}
        to="/"
        aria-label="Logo Foodies"
      >
        Foodies
      </NavLink>

      <HeaderNav
        isHome={isHome}
        notAutorizedClick={() => dispatch(openSignIn())}
      />

      {isSignedIn ? (
        <HeaderProfile onClick={() => dispatch(openLogOut())} isHome={isHome} />
      ) : (
        <div className={styles.authWrap}>
          <Auth
            isHomepage={isHome}
            openSignIn={() => dispatch(openSignIn())}
            openSignUp={() => dispatch(openSignUp())}
          />
        </div>
      )}
    </header>
  );
}
