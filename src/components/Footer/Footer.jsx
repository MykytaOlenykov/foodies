import { NavLink } from "react-router";
import { Button } from "../Button/Button";

import Container from "../UI/Container/Container";
import Logo from "../Logo/Logo";

import styles from "./Footer.module.css";
import SocialNetworks from "../SocialNetworks/SocialNetworks";
import Copyright from "../Copyright/Copyright";

export default function Footer() {
  return (
    <footer>
      <Container>
        <div className={styles.wrapper}>
          <Logo />
          <SocialNetworks />
        </div>
      </Container>
      <hr className={styles.separator} />
      <Container>
        <Copyright />
      </Container>
    </footer>
  );
}
