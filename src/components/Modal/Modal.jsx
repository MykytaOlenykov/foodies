import style from "./Modal.module.css";
import { useEffect } from "react";

const Modal = ({ isOpen, closeModal, children }) => {
  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      closeModal();
    }
  };

  useEffect(() => {
    const handleEsc = (event) => {
      if (event.key === "Escape") {
        closeModal(); 
      }
    };

    document.addEventListener("keydown", handleEsc);

    return () => {
      document.removeEventListener("keydown", handleEsc);
    };
  }, [closeModal]);

  return (
    <div
      className={`${style.backdrop} ${isOpen ? style.open : ""}`} 
      onClick={handleBackdropClick}
    >
      <div className={`${style.content} ${isOpen ? style.open : ""}`}>
        <button onClick={closeModal} className={style.close}>
          X
        </button>
        {children}
      </div>
    </div>
  );
};

export default Modal;
