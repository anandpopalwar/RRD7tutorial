import React from "react";
import { Outlet, useNavigate } from "react-router";
import Linkx from "../../Linkx";
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
          <div className="chips">
            <Linkx to={item}>{item}</Linkx>
          </div>
        ))}
      </div>
      <div className="widgetContainer">
        <Outlet />
      </div>
    </div>
  );
};

export default LogisticsMovement;
