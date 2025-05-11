import styles from "./Copyright.module.css";
import { Typography } from "../Typography/Typography.jsx";
import { useBreakpoint } from "../../hooks/index.js";

export const Copyright = () => {
  const year = new Date().getFullYear();
  const breakpoint = useBreakpoint()
  return (
    <Typography variant={breakpoint === "mobile" ? "bodyS" : "body"} className={styles.wrapper}>
      &copy; {year}, Foodies. All rights reserved
    </Typography>
  );
};
