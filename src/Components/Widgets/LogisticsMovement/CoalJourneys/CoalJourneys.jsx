import React from "react";
import { Outlet, useNavigate } from "react-router";
import Linkx from "../../../Linkx";
export const CoalJourneysTabs = ["road", "rail", "rcr"];
const CoalJourneys = () => {
  const navigate = useNavigate();

  return (
    <div>
      <h4>CoalJourneys</h4>
      <div className="tabslinksContainer">
        {CoalJourneysTabs.map((item) => (
          <div className="chips">
            <Linkx to={item}>{item}</Linkx>
          </div>
        ))}
      </div>
      <div className="tabscontainer">
        <Outlet />
      </div>
    </div>
  );
};

export default CoalJourneys;
