import { useState } from "react";
import { NavLink, useLocation } from "react-router";
import { useSelector } from "react-redux";
import clx from "clsx";

import Auth from "../Auth/Auth";
import HeaderNav from "./HeaderNav/HeaderNav";
import HeaderProfile from "./HeaderProfile/HeaderProfile";

import styles from "./Header.module.css";

// Temp stub instead of Redux-selector
// TODO: Temp stub for Modal
const selectAuthIsSignedIn = () => false;

// TODO: Temp stub for Modal
const Modal = () => {
  return null;
};

export default function Header() {
  const { pathname } = useLocation();

  const isSignedIn = useSelector(selectAuthIsSignedIn);

  const [modalSignInOpen, setModalSignInOpen] = useState(false);
  const [modalSignUpOpen, setModalSignUpOpen] = useState(false);
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
            openSignUp={() => setModalSignUpOpen(true)}
          />
        </div>
      )}

      {/* // TODO: FIX */}
      <Modal
        isOpen={!isSignedIn && modalSignInOpen}
        onClose={() => setModalSignInOpen(false)}
      >
        {/* // TODO: FIX */}
        {/* <SignInForm variant="sign-in" /> */}
      </Modal>
      <Modal isOpen={modalSignUpOpen} onClose={() => setModalSignUpOpen(false)}>
        {/* // TODO: FIX */}
        {/* <SignInForm variant="sign-up" /> */}
      </Modal>
      <Modal isOpen={modalLogoutOpen} onClose={() => setModalLogoutOpen(false)}>
        {/* // TODO: FIX */}
        {/* <Logout setModalLogoutOpen={setModalLogoutOpen} /> */}
      </Modal>
    </header>
  );
}
