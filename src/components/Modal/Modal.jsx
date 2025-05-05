import { useCallback, useEffect } from "react";
import style from "./Modal.module.css";
import CloseIcon from "../../assets/icons/x.svg?react";

export const Modal = ({ isOpen, closeModal, children }) => {
  const handleBackdropClick = useCallback((e) => {
    if (e.target === e.currentTarget) closeModal();
  }, [closeModal]);

  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") closeModal();
    };

    if (isOpen) {
      document.addEventListener("keydown", handleEsc);
    }

    return () => {
      document.removeEventListener("keydown", handleEsc);
    };
  }, [isOpen, closeModal]);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  return (
    <div
      className={`${style.backdrop} ${isOpen ? style.open : ""}`}
      onClick={handleBackdropClick}
      role="dialog"
      aria-modal="true"
      style={{ display: isOpen ? "flex" : "none" }}
    >
      <div className={`${style.content} ${isOpen ? style.open : ""}`}>
        <button onClick={closeModal} className={style.close} aria-label="Close modal">
          <CloseIcon className={style.closeIcon} />
        </button>
        {children}
      </div>
    </div>
  );
};
