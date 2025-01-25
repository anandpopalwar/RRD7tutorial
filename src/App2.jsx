import React from "react";
import Home from "./Components/Pages/Home";
import About, { Setting } from "./Components/Pages/About";
import {
  BrowserRouter,
  Navigate,
  Route,
  Routes,
  useLocation,
} from "react-router";
import LogisticsMovement from "./Components/Widgets/LogisticsMovement/LogisticsMovement";
import PnM from "./Components/Widgets/PnM/PnM";
import CoalJourneys from "./Components/Widgets/LogisticsMovement/CoalJourneys/CoalJourneys";
import CoalStatement from "./Components/Widgets/LogisticsMovement/CoalStatement/CoalStatement";
import DCLR from "./Components/Widgets/LogisticsMovement/DCLR/DCLR";
import { Rail } from "./Components/Widgets/LogisticsMovement/CoalJourneys/Rail";
import Road from "./Components/Widgets/LogisticsMovement/CoalJourneys/Road";
import RCR from "./Components/Widgets/LogisticsMovement/CoalJourneys/RCR";
import Linx from "./Components/Linx";
import Railform from "./Components/Pages/Railform";

const App2 = () => {
  // const Location = useLocation();
  return (
    <div
      onClick={() => {
        // console.log(Location);
      }}
    >
      <RouteConfig />
    </div>
  );
};

export default App2;

const RouteConfig = () => (
  <BrowserRouter>
    <div className="navbar">
      <Linx to="/home">Home</Linx> | <Linx to="/about">About</Linx> |{" "}
      <Linx to="/setting">Setting</Linx>
    </div>
    <Routes>
      <Route path="/" index element={<Navigate to="home" replace />} />
      <Route path="home" element={<Home />}>
        <Route index element={<Navigate to="logistics_movement" replace />} />
        <Route path="logistics_movement" element={<LogisticsMovement />}>
          <Route index element={<Navigate to="coal_journey" replace />} />
          <Route path="coal_journey" element={<CoalJourneys />}>
            <Route index element={<Navigate to="road" replace />} />
            <Route path="road" element={<Road />} />
            <Route path="rail" element={<Rail />} />
            <Route path="rcr" element={<RCR />} />
          </Route>
          <Route path="coal_statement" element={<CoalStatement />} />
          <Route path="dclr" element={<DCLR />} />
        </Route>
        <Route path="performance_and_monitoring" element={<PnM />} />
      </Route>
      <Route path="/railform/:id" element={<Railform />}/>
      <Route path="/about" element={<About />} />
      <Route path="/setting" element={<Setting />} />
    </Routes>
  </BrowserRouter>
);

export const RR_no = [63, 68, 9, 15, 100]



//<Navigate to"path" /> event used for redirective the navigation to perticular path 