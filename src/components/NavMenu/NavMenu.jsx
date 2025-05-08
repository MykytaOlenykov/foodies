import { Link, useNavigate } from "react-router";
import clsx from "clsx";

import css from "./NavMenu.module.css";
import CloseIcon from "../../assets/icons/x.svg?react";
import { useEffect, useState } from "react";

export const NavMenu = ({ onClose }) => {
  const navigate = useNavigate();
  // for animation
  const [isOpen, setIsOpen] = useState(true);

  const handleClose = () => {
    setIsOpen(false);
    setTimeout(() => onClose(), 420);
  };

  useEffect(() => {
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  return (
    <div className={clsx(css.container, isOpen && css.open)}>
      <div className={css.bar}>
        <Link className={clsx(css.logo)} to="/" aria-label="Logo Foodies">
          Foodies
        </Link>

        <button onClick={handleClose} className={css.close}>
          <CloseIcon className={clsx(css.closeIcon)} />
        </button>
      </div>

      <nav className={css.nav}>
        <ul className={css.list}>
          <li>
            <button
              className={clsx(css.link)}
              onClick={() => {
                handleClose();
                navigate("/");
              }}
            >
              Home
            </button>
          </li>
          <li>
            <button
              className={clsx(css.link)}
              onClick={() => {
                handleClose();
                navigate("/recipe/add");
              }}
            >
              Add recipe
            </button>
          </li>
        </ul>
      </nav>
    </div>
  );
};
