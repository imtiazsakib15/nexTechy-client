import { Navigate, useLocation } from "react-router-dom";
import { RotatingLines } from "react-loader-spinner";
import PropTypes from "prop-types";
import useAuth from "../hooks/useAuth";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useAuth();
  const location = useLocation();
  if (loading)
    return (
      <div className="h-screen grid place-items-center">
        <RotatingLines
          strokeColor="blue"
          strokeWidth="5"
          animationDuration="0.75"
          width="96"
          visible={true}
        />
      </div>
    );

  if (user?.email) return children;

  return <Navigate state={location.pathname} to={"/login"} />;
};
PrivateRoute.propTypes = {
  children: PropTypes.node,
};

export default PrivateRoute;
