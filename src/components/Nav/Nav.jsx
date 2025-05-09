import clx from "clsx";
import { useMatch, useNavigate } from "react-router";
import { Button } from "../Button/Button";

import css from "./Nav.module.css";

export const Nav = () => {
  const homePath = useMatch("/");
  const recipePath = useMatch("/recipe/add");
  const navigate = useNavigate();

  const isHomePage = !!homePath;

  return (
    <nav className={css.container}>
      <ul className={clx(css.list, !isHomePage && css.headerAll)}>
        <li>
          <Button
            className={clx(isHomePage && css.activeBtn)}
            variant={isHomePage ? "dark" : "light"}
            size="small"
            bordered={isHomePage}
            onClick={() => navigate("/")}
          >
            Home
          </Button>
        </li>

        <li>
          <Button
            className={clx(!!recipePath && css.activeBtn)}
            variant={isHomePage ? "dark" : "light"}
            size="small"
            bordered={!!recipePath}
            onClick={() => navigate("/recipe/add")}
          >
            Add recipe
          </Button>
        </li>
      </ul>
    </nav>
  );
};
