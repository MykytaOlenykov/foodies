import Modal from "react-modal";
import clx from "clsx";

import styles from "./ModalBox.module.css";
import CloseIcon from "../../assets/icons/x.svg?react";

export const ModalBox = ({
  isOpen,
  onClose,
  children,
  customStyles = "",
  btnStyle = "",
  width = "24",
  height = "24",
  stroke = "#000",
}) => {
  return (
    <Modal
      isOpen={isOpen}
      className={clx(styles.content, customStyles)}
      overlayClassName={styles.overlay}
      ariaHideApp={false}
      closeTimeoutMS={250}
      onRequestClose={onClose}
      bodyOpenClassName={styles.block_scroll}
    >
      <button
        className={clx(styles.button, btnStyle)}
        type="button"
        onClick={onClose}
        aria-label="Close modal"
      >
        <CloseIcon
          width={width}
          height={height}
          stroke={stroke}
        />
      </button>

      {children}
    </Modal>
  );
};

export default ModalBox;
