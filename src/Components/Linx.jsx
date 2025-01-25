import React from "react";
import { NavLink } from "react-router";
import "./Links.scss";

const Linx = ({ to, children, className }) => (
  <NavLink
    to={to}
    className={({ isActive }) =>
      isActive ? className + " active" : className + " not_active"
    }
  >
    {children}
  </NavLink>
);

export default Linx;
