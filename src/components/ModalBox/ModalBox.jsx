import Modal from "react-modal";
import styles from "./ModalBox.module.css";
import Icon from "../Icon/Icon";
import cx from "classnames";

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
      className={cx(styles.content, customStyles)}
      overlayClassName={styles.overlay}
      ariaHideApp={false}
      closeTimeoutMS={250}
      onRequestClose={() => onClose()}
      bodyOpenClassName={styles.block_scroll}
    >
      <button
        className={cx(styles.button, btnStyle)}
        type="button"
        onClick={() => onClose()}
      >
        <Icon
          iconId={"icon-close-btn"}
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
