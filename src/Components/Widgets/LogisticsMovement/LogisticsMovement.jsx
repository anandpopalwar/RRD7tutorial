import React from "react";
import { Outlet, useNavigate } from "react-router";
import Linx from "../../Linx";
export const LogisticsMovementWidgets = [
  "coal_journey",
  "coal_statement",
  "dclr",
];
const LogisticsMovement = () => {
  const navigate = useNavigate();
  return (
    <div>
      <h4>LogisticsMovement</h4>
      <div className="widgetLinkscontainer">
        {LogisticsMovementWidgets.map((item) => (
          <Linx to={item} className={"chips"}>
            {item}
          </Linx>
        ))}
      </div>
      <div className="widgetContainer">
        <Outlet />
      </div>
    </div>
  );
};

export default LogisticsMovement;
