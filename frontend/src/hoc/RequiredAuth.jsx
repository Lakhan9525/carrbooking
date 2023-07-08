import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
const RequiredAuth = ({ children }) => {
  const { isAuth } = useSelector((state) => state.user);
  const location = useLocation();
  const from = {
    pathname: location.pathname,
  };

  if (isAuth) return children;
  return <Navigate to="/login" state={from} replace />;
};

export default RequiredAuth;
