export const selectUser = (state) => state.auth.user;

export const selectIsLoggedIn = (state) => state.auth.isLoggedIn;

export const selectIsOpenSignUp = (state) => state.auth.isOpenSignUp;

export const selectIsOpenSignIn = (state) => state.auth.isOpenSignIn;

export const selectIsOpenLogOut = (state) => state.auth.isOpenLogOut;
