import clx from "clsx";
import { useState } from "react";
import { NavLink, useLocation } from "react-router";
import { useSelector } from "react-redux";

import Auth from "../Auth/Auth";
import HeaderNav from "./HeaderNav/HeaderNav";
import HeaderProfile from "./HeaderProfile/HeaderProfile";
import ModalBox from "../ModalBox/ModalBox";
import SignInForm from "../SignInForm/SignInForm";
import Logout from "../Logout/Logout";

import styles from "./Header.module.css";

// Temp stub instead of Redux-selector
const selectAuthIsSignedIn = () => true;

export default function Header() {
  const { pathname } = useLocation();

  const isSignedIn = useSelector(selectAuthIsSignedIn);

  const [modalSignInOpen, setModalSignInOpen] = useState(false);
  const [modalSignUpOpen, setModalSignUpOpen] = useState(false);
  const [modalLogoutOpen, setModalLogoutOpen] = useState(false);

  const isHome = pathname === "/" || pathname.split("/")[1] === "category";

  return (
    <header className={clx(styles.header, !isHome && styles.headerAll)}>
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

      <ModalBox
        isOpen={!isSignedIn && modalSignInOpen}
        onClose={() => setModalSignInOpen(false)}
      >
        <SignInForm variant="sign-in" />
      </ModalBox>
      <ModalBox
        isOpen={modalSignUpOpen}
        onClose={() => setModalSignUpOpen(false)}
      >
        <SignInForm variant="sign-up" />
      </ModalBox>
      <ModalBox
        isOpen={modalLogoutOpen}
        onClose={() => setModalLogoutOpen(false)}
      >
        <Logout setModalLogoutOpen={setModalLogoutOpen} />
      </ModalBox>
    </header>
  );
}