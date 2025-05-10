import { useEffect, useState } from "react";
import { Link, useMatch } from "react-router";
import { useSelector } from "react-redux";
import clx from "clsx";

import { AuthBar } from "../AuthBar";
import Container from "../UI/Container/Container";
import { Nav } from "../Nav";
import { UserBar } from "../UserBar";
import { NavMenu } from "../NavMenu";
import { useBreakpoint } from "../../hooks/useBreakpoint";
import { selectIsLoggedIn } from "../../store/auth";

import css from "./Header.module.css";

import BurgerMenuIcon from "../../assets/icons/burger-menu.svg?react";
import clsx from "clsx";

export default function Header() {
  const homePath = useMatch("/");
  const isHome = !!homePath;
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const breakpoint = useBreakpoint();
  const isMobile = ["mobile", "small-mobile"].includes(breakpoint);

  const [isOpenMenu, setIsOpenMenu] = useState(false);

  useEffect(() => {
    if (!isMobile) setIsOpenMenu(false);
  }, [isMobile]);

  return (
    <>
      <header className={css.header}>
        <Container className={clsx(css.container, isHome && css.homeContainer)}>
          <Link
            className={clsx(css.logo, isHome && css.whiteLogo)}
            to="/"
            aria-label="Logo Foodies"
          >
            Foodies
          </Link>

          {isLoggedIn && !isMobile && <Nav />}

          <div className={css.profileContainer}>
            {isLoggedIn ? <UserBar /> : <AuthBar />}

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

      {isOpenMenu && (
        <NavMenu isHomePage={isHome} onClose={() => setIsOpenMenu(false)} />
      )}
    </>
  );
}
