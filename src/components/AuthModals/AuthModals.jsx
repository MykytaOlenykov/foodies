import { useDispatch, useSelector } from "react-redux";

import { SignUpModal } from "../SignUpModal";
import { SignInModal } from "../SignInModal";
import Modal from "../Modal/Modal";
import {
  openSignUp,
  closeSignUp,
  openSignIn,
  closeSignIn,
  selectIsOpenSignIn,
  selectIsOpenSignUp,
} from "../../store/auth";

export const AuthModals = () => {
  const dispatch = useDispatch();

  const isOpenSignUp = useSelector(selectIsOpenSignUp);
  const isOpenSignIn = useSelector(selectIsOpenSignIn);

  const handleRedirectToSignIn = () => {
    dispatch(closeSignUp());
    dispatch(openSignIn());
  };

  const handleRedirectToSignUp = () => {
    dispatch(closeSignIn());
    dispatch(openSignUp());
  };

  return (
    <>
      {isOpenSignUp && (
        <Modal isOpen closeModal={() => dispatch(closeSignUp())}>
          <SignUpModal onRedirectToSignIn={handleRedirectToSignIn} />
        </Modal>
      )}

      {isOpenSignIn && (
        <Modal isOpen closeModal={() => dispatch(closeSignIn())}>
          <SignInModal onRedirectToSignUp={handleRedirectToSignUp} />
        </Modal>
      )}
    </>
  );
};
