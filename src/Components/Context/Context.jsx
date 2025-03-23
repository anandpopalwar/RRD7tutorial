import React, { createContext, useContext, useEffect, useState } from "react";

const UserContext = createContext(null);

const UserContextWrapper = ({ children }) => {
  const [isUserLoggedIn, setUserLoggedIn] = useState(
    localStorage.getItem("isUserLoggedIn") || false
  );

  const logoutUser = () => {
    localStorage.removeItem("isUserLoggedIn");
    setUserLoggedIn(false);
  };
  const loginUser = () => {
    localStorage.setItem("isUserLoggedIn", true);
    setUserLoggedIn(true);
  };

  useEffect(() => {
    setUserLoggedIn(localStorage.getItem("isUserLoggedIn") ?? false);
  }, []);

  return (
    <UserContext.Provider value={{ loginUser, logoutUser, isUserLoggedIn }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserContextWrapper;

export const getUserContext = () => useContext(UserContext);
