import { useState } from "react";
import { NavLink, useLocation } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import clx from "clsx";

import Auth from "../Auth/Auth";
import HeaderNav from "./HeaderNav/HeaderNav";
import HeaderProfile from "./HeaderProfile/HeaderProfile";
import Modal from "../Modal/Modal";

import styles from "./Header.module.css";
import { openSignUp } from "../../store/auth";

// Temp stub instead of Redux-selector
// TODO: Temp stub for Modal
const selectAuthIsSignedIn = () => false;

export default function Header() {
  const dispatch = useDispatch();

  const { pathname } = useLocation();

  const isSignedIn = useSelector(selectAuthIsSignedIn);

  // TODO: FIX
  const [modalSignInOpen, setModalSignInOpen] = useState(false);
  const [modalLogoutOpen, setModalLogoutOpen] = useState(false);

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
        notAutorizedClick={() => setModalSignInOpen(true)}
      />

      {isSignedIn ? (
        <HeaderProfile
          onClick={() => setModalLogoutOpen(true)}
          isHome={isHome}
        />
      ) : (
        <div className={styles.authWrap}>
          <Auth
            isHomepage={isHome}
            openSignIn={() => setModalSignInOpen(true)}
            openSignUp={() => dispatch(openSignUp())}
          />
        </div>
      )}

      {/* // TODO: FIX */}
      <Modal isOpen={modalSignInOpen} onClose={() => setModalSignInOpen(false)}>
        {/* // TODO: FIX */}
        {/* <SignInForm variant="sign-in" /> */}
      </Modal>
      <Modal isOpen={modalLogoutOpen} onClose={() => setModalLogoutOpen(false)}>
        {/* // TODO: FIX */}
        {/* <Logout setModalLogoutOpen={setModalLogoutOpen} /> */}
      </Modal>
    </header>
  );
}
