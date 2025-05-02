import style from "./Modal.module.css";
import { useEffect } from "react";
import CloseIcon from '../../assets/icons/x.svg?react';

/**
 * @param {object} props
 * @param {boolean} props.isOpen - Whether the modal is open or not.
 * @param {() => void} props.closeModal - Function to close the modal.
 * @param {React.ReactNode} props.children - Modal content to display inside.
 *
 * Features:
 * - Closes on backdrop click
 * - Closes on Escape key press
 * - Disables body scroll when open
 */

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


  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"; 
    } else {
      document.body.style.overflow = "auto";
    }
    
    return () => {
      document.body.style.overflow = "auto"; 
    };
  }, [isOpen]); 

  return (
    <div
      className={`${style.backdrop} ${isOpen ? style.open : ""}`} 
      onClick={handleBackdropClick}
    >
      <div className={`${style.content} ${isOpen ? style.open : ""}`}>
        <button onClick={closeModal} className={style.close} aria-label="Close modal">
          <CloseIcon width={12} height={12} className={style.closeIcon}/>
        </button>

        {children}
      </div>
    </div>
  );
};

export default Modal;
