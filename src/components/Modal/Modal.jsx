import style from "./Modal.module.css";
import { useEffect } from "react";
import MyIcon from '../../assets/icons/x.svg?react';



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
          <MyIcon width={12} height={12} className={style.closeIcon}/>
        </button>

        {children}
      </div>
    </div>
  );
};

export default Modal;
