import { useState } from "react";
import { useSelector } from "react-redux";
import clx from "clsx";
import emptyImages from "../../../assets/images/empty";

import ChevronDownIcon from "../../../assets/icons/chevron-down.svg?react";
import BurgerMenuIcon from "../../../assets/icons/burger-menu.svg?react";

import styles from "./HeaderProfile.module.css";
import HeaderProfileMenu from "./HeaderProfileMenu";
import HeaderModal from "../HeaderModal/HeaderModal";
import styleModal from "../HeaderModal/HeaderModal.module.css";

// Temp stub instead of Redux-selector
const selectAuthUserData = () => false;

// Temp stub for Modal
const Modal = () => {
  return null;
};

const HeaderProfile = ({ isHome, onClick }) => {
  const userData = useSelector(selectAuthUserData);

  const [toogleOpen, setToogleOpen] = useState(false);
  const [toogleModal, setToogleModal] = useState(false);

  const avatarURL = userData?.avatar ? userData.avatar : emptyImages.noAvatar;
  const name = userData?.name || "User";

  const handlerOpenProfile = () => {
    setToogleOpen(!toogleOpen);
  };

  const handlerToogleModal = () => {
    setToogleModal(!toogleModal);
  };

  return (
    <div className={styles.wrap}>
      <div className={styles.profile} onClick={handlerOpenProfile}>
        <img className={styles.profileImg} src={avatarURL} alt={name} />
        <p className={styles.profileName}>{name}</p>
        <button
          type="button"
          className={clx(styles.btn_arrow, toogleOpen && styles.btn_arrow_open)}
        >
          <ChevronDownIcon className={styles.icon_arrow} />
        </button>
      </div>

      {toogleOpen && (
        <HeaderProfileMenu onClick={onClick} onClose={handlerOpenProfile} />
      )}

      <button
        type="button"
        className={styles.btn_menu}
        onClick={handlerToogleModal}
      >
        <BurgerMenuIcon
          className={styles.icon_menu}
          stroke={isHome ? "#fff" : "#000"}
        />
      </button>

      {toogleModal && (
        <Modal
          isOpen={toogleModal}
          onClose={handlerToogleModal}
          customeStyles={styleModal.wrap_modal}
          btnStyle={styleModal.btn_close}
          width="28"
          height="28"
          stroke="#fff"
        >
          <HeaderModal handlerToogleModal={handlerToogleModal} />
        </Modal>
      )}
    </div>
  );
};

export default HeaderProfile;