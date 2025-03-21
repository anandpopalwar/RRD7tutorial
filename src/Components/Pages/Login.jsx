import React, { useEffect } from "react";
import { useNavigate } from "react-router";

const Login = () => {
  const navigate = useNavigate();

  const loginuser = () => {
    localStorage.setItem("isUserLoggedIn", true);
    navigate("/home");
  };

  useEffect(() => {
    localStorage.getItem("isUserLoggedIn") && navigate("/home");
  }, []);

  return (
    <div>
      <h4>Login</h4>
      <button onClick={loginuser}>Login</button>
    </div>
  );
};

export default Login;
