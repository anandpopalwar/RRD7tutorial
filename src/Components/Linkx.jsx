import React from "react";
import { Link, NavLink } from "react-router";
import "./Links.scss";

const Linkx = ({ to, children }) => {
  return (
    <NavLink
      to={to}
      className={({ isActive }) => (isActive ? "active" : "not_active")}
    >
      {children}
    </NavLink>
  );
};

export default Linkx;
