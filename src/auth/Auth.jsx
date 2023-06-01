import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import Login from "./Login";

const Auth = () => {
  if (true) {
    return <Outlet />;
  }
  return <Navigate to='/auth/login' />;
};

export default Auth;
