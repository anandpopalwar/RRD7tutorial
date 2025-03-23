import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { getUserContext } from "../Context/Context";

const Login = () => {
  const { isUserLoggedIn, loginUser, logoutUser } = getUserContext();

  const navigate = useNavigate();

  const LogUser = () => {
    loginUser();
    navigate("/home");
  };

  useEffect(() => {
    if (isUserLoggedIn) {
      console.log("user Logged in");
      navigate("/home");
    } else {
      console.log("user logged out");
      logoutUser();
    }
  }, []);

  return (
    <div>
      <h4>Login</h4>
      <button onClick={LogUser}>Login</button>
    </div>
  );
};

export default Login;
