import React from "react";
import { Navigate } from "react-router";
import { useSelector } from "react-redux";
import { selectIsLoadingStatus, selectIsLoggedIn } from "../../store/auth";

export const PrivateRoute = ({ redirectTo = "/", children }) => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const isLoadingStatus = useSelector(selectIsLoadingStatus);

  const shouldRedirect = !isLoadingStatus && !isLoggedIn;

  return shouldRedirect ? <Navigate to={redirectTo} /> : <>{children}</>;
};
