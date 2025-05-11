import Container from "../UI/Container/Container";
import { Logo } from "../Logo/Logo";

import styles from "./Footer.module.css";
import { SocialNetworks } from "../SocialNetworks/SocialNetworks";
import { Copyright } from "../Copyright/Copyright";

export function Footer() {
  return (
    <footer>
      <Container>
        <div className={styles.wrapper}>
          <Logo />
          <SocialNetworks />
        </div>
      </Container>
      <div className={styles.separator}></div>
      <Container>
        <Copyright />
      </Container>
    </footer>
  );
}
