import style from "./Modal.module.css";
import { useEffect } from "react";

// function which I use for open/close modal
// const toggleModal = () => {
//   setIsModalOpen((prev)=> {
//     return !prev
//   }); 
// };


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
          <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
      </button>

        {children}
      </div>
    </div>
  );
};

export default Modal;
