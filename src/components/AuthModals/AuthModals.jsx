import { useDispatch, useSelector } from "react-redux";

import { SignUpModal } from "../SignUpModal";
import Modal from "../Modal/Modal";
import { closeSignUp, selectIsOpenSignUp } from "../../store/auth";

export const AuthModals = () => {
  const dispatch = useDispatch();

  const isOpenSignUp = useSelector(selectIsOpenSignUp);

  return (
    <>
      {isOpenSignUp && (
        <Modal isOpen closeModal={() => dispatch(closeSignUp())}>
          <SignUpModal />
        </Modal>
      )}
    </>
  );
};
