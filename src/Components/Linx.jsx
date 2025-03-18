import React from "react";
import { NavLink, useLocation, useNavigation } from "react-router";
import "./Links.scss";
import { Spinner } from "../App2";

const Linx = ({ to, children, className = "" }) => {
  // const location = useLocation();
  // const navigation = useNavigation(); // Get navigation state
  // const isPending = navigation.state === "loading";
  return (
    <NavLink
      to={to}
      className={(obj) => {
        let { isActive, isPending } = obj;

        let classsstring = className;
        classsstring += isActive ? " active" : " not_active ";
        if (isPending) {
          classsstring += " loading ";
          console.log(to, "isPending");
        }
        return classsstring;
      }}
      style={({ isPending }) => {
        return { color: isPending && "salmon" };
      }}
    >
      {({ isPending }) => (isPending ? <Spinner /> : children)}
      {/* {children} */}
    </NavLink>
  );
};

export default Linx;
