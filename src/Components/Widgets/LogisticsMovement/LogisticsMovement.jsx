import React from "react";
import { Outlet } from "react-router";
import Linx from "../../Linx";
export const LogisticsMovementWidgets = [
  "coal_journey",
  "coal_statement",
  "dclr",
];
const LogisticsMovement = () => {
  return (
    <div>
      <div>LogisticsMovement</div>
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
