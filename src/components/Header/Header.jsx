import { useState } from "react";
import { NavLink, useLocation } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import clx from "clsx";

import Auth from "../Auth/Auth";
import HeaderNav from "./HeaderNav/HeaderNav";
import Container from "../UI/Container/Container";
import { HeaderProfile } from "./HeaderProfile";
import { useBreakpoint } from "../../hooks/useBreakpoint";
import { openSignIn, selectIsLoggedIn } from "../../store/auth";

import css from "./Header.module.css";

import BurgerMenuIcon from "../../assets/icons/burger-menu.svg?react";

export default function Header() {
  const dispatch = useDispatch();
  const breakpoint = useBreakpoint();
  const isMobile = ["mobile", "small-mobile"].includes(breakpoint);
  const [_, setIsOpenMenu] = useState(false);

  const { pathname } = useLocation();

  const isLoggedIn = useSelector(selectIsLoggedIn);

  const isHome = pathname === "/" || pathname.split("/")[1] === "category";

  return (
    <header className={css.header}>
      <Container className={css.container}>
        <NavLink
          className={clx(css.logo, isHome && css.whiteLogo)}
          to="/"
          aria-label="Logo Foodies"
        >
          Foodies
        </NavLink>

        {isLoggedIn && (
          <HeaderNav
            isHome={isHome}
            notAutorizedClick={() => dispatch(openSignIn())}
          />
        )}

        <div className={css.profileContainer}>
          {isLoggedIn ? <HeaderProfile /> : <Auth />}

          {isMobile && isLoggedIn && (
            <button
              type="button"
              className={clx(css.menuBtn, isHome && css.whiteMenuBtn)}
              onClick={() => setIsOpenMenu(true)}
            >
              <BurgerMenuIcon className={css.menuIcon} />
            </button>
          )}
        </div>
      </Container>
    </header>
  );
}
