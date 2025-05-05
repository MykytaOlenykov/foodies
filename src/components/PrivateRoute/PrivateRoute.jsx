import { Navigate } from "react-router";
import { useSelector } from "react-redux";

const PrivateRoute = ({ element }) => {
  const isAuth = useSelector(() => true);
  return isAuth ? element : <Navigate to="/" />;
};

export default PrivateRoute;