import React from "react";
import { Outlet, useNavigate } from "react-router";
import Linx from "../../../Linx";
export const CoalJourneysTabs = ["road", "rail", "rcr"];
const CoalJourneys = () => {
  const navigate = useNavigate();

  return (
    <div>
      <div>CoalJourneys</div>
      <div className="tabslinksContainer">
        {CoalJourneysTabs.map((item) => (
          <Linx to={item} className="chips">
            {item}
          </Linx>
        ))}
      </div>
      <div className="tabscontainer">
        <Outlet />
      </div>
    </div>
  );
};

export default CoalJourneys;
