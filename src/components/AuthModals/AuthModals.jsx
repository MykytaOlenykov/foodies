import { useDispatch, useSelector } from "react-redux";

import { SignUpModal } from "../SignUpModal";
import { SignInModal } from "../SignInModal";
import { LogOutModal } from "../LogOutModal";
import { Modal } from "../Modal/Modal";
import {
  openSignUp,
  closeSignUp,
  openSignIn,
  closeSignIn,
  selectIsOpenSignIn,
  selectIsOpenSignUp,
  closeLogOut,
  selectIsOpenLogOut,
} from "../../store/auth";

export const AuthModals = () => {
  const dispatch = useDispatch();

  const isOpenSignUp = useSelector(selectIsOpenSignUp);
  const isOpenSignIn = useSelector(selectIsOpenSignIn);
  const isOpenLogOut = useSelector(selectIsOpenLogOut);

  const handleRedirectToSignIn = () => {
    dispatch(closeSignUp());
    dispatch(openSignIn());
  };

  const handleRedirectToSignUp = () => {
    dispatch(closeSignIn());
    dispatch(openSignUp());
  };

  const handleCloseLogOut = () => {
    dispatch(closeLogOut());
  };

  return (
    <>
      <Modal isOpen={isOpenSignUp} closeModal={() => dispatch(closeSignUp())}>
        <SignUpModal onRedirectToSignIn={handleRedirectToSignIn} />
      </Modal>

      <Modal isOpen={isOpenSignIn} closeModal={() => dispatch(closeSignIn())}>
        <SignInModal onRedirectToSignUp={handleRedirectToSignUp} />
      </Modal>

      <Modal isOpen={isOpenLogOut} closeModal={handleCloseLogOut}>
        <LogOutModal onClose={handleCloseLogOut} />
      </Modal>
    </>
  );
};
