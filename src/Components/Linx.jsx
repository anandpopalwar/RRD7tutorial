import React from "react";
import { NavLink, useLocation } from "react-router";
import "./Links.scss";

const Linx = ({ to, children, className = "" }) => {
  const location = useLocation();
  return (
    <NavLink
      // to={({ isActive }) => !isActive && to}
      to={to}
      className={({ isActive }) =>
        isActive ? className + " active" : className + " not_active"
      }
      // onClick={() => {
      //   console.log(location, "location");
      //   console.log(to, "Link path");
      // }}
    >
      {children}
    </NavLink>
  );
};

export default Linx;
