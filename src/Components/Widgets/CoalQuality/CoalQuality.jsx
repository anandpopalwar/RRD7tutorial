import React from "react";
import Linx from "../../Linx";
import { Outlet } from "react-router";
export const LogisticsMovementWidgets = ["RQA", "BQA", "CA", "GCVCA"];
const CoalQuality = () => {
  return (
    <div>
      <div>CoalQuality</div>
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

export default CoalQuality;
