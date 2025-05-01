import { useState } from "react";
import { useSelector } from "react-redux";
import cx from "classnames";
import emptyImages from "../../../assets/images/empty";

import { ButtonIcon } from "../../ButtonIcon/ButtonIcon";
import Icon from "../../Icon/Icon";
import styles from "./HeaderProfile.module.css";
import HeaderProfileMenu from "./HeaderProfileMenu";
import ModalBox from "../../ModalBox/ModalBox";
import HeaderModal from "../HeaderModal/HeaderModal";
import styleModal from "../HeaderModal/HeaderModal.module.css";

// Temp stub instead of Redux-selector
const selectAuthUserData = () => false;

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
        <ButtonIcon
          icon={
            <Icon
              iconId="icon-chevron-down"
              width="18"
              height="18"
              stroke="#fff"
            />
          }
          className={cx(styles.btn_arrow, toogleOpen && styles.btn_arrow_open)}
          variant="dark"
          size="small"
        />
      </div>

      {toogleOpen && (
        <HeaderProfileMenu onClick={onClick} onClose={handlerOpenProfile} />
      )}

      <ButtonIcon
        icon={
          <Icon
            iconId="icon-mobile-menu"
            width="28"
            height="28"
            stroke={isHome ? "#fff" : "#000"}
          />
        }
        className={styles.btn_menu}
        variant="dark"
        size="medium"
        onClick={handlerToogleModal}
      />

      {toogleModal && (
        <ModalBox
          isOpen={toogleModal}
          onClose={handlerToogleModal}
          customeStyles={styleModal.wrap_modal}
          btnStyle={styleModal.btn_close}
          width="28"
          height="28"
          stroke="#fff"
        >
          <HeaderModal handlerToogleModal={handlerToogleModal} />
        </ModalBox>
      )}
    </div>
  );
};

export default HeaderProfile;
