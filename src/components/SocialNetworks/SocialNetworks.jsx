import { ButtonIcon } from "../ButtonIcon/ButtonIcon";
import styles from "./SocialNetworks.module.css";

import FacebookSVG from "../../assets/icons/facebook.svg?react";
import InstagramSVG from "../../assets/icons/instagram.svg?react";
import YoutubeSVG from "../../assets/icons/youtube.svg?react";

const socialLinks = [
  {
    href: "https://www.facebook.com/goITclub/",
    id: "facebook",
    label: "Facebook",
    Icon: FacebookSVG,
  },
  {
    href: "https://www.instagram.com/goitclub/",
    id: "instagram",
    label: "Instagram",
    Icon: InstagramSVG,
  },
  {
    href: "https://www.youtube.com/c/GoIT",
    id: "youtube",
    label: "YouTube",
    Icon: YoutubeSVG,
  },
];

const SocialNetworks = () => {
  return (
    <ul className={styles.list}>
      {socialLinks.map((link) => {
        const { href, id, label, Icon } = link;

        return (
          <li key={id}>
            <a
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className={styles.link}
            >
              <ButtonIcon variant="light" size="small" icon={<Icon />} />
            </a>
          </li>
        );
      })}
    </ul>
  );
};

export default SocialNetworks;
