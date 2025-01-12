import React from "react";
import "./Home.scss";
import { Link, Outlet, useNavigate } from "react-router";
import Linkx from "../Linkx";
const sidebaritemList = ["logistics_movement", "performance_and_monitoring"];
const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="HomeParentContainer">
      <div className="sidebar">
        {sidebaritemList.map((page) => (
          <p>
            <Linkx to={page}> {page.replaceAll("_", " ")}</Linkx>
          </p>
        ))}
      </div>
      <div className="mainbodycontainer">
        <Outlet />
      </div>
    </div>
  );
};

export default Home;

// let permissionList = {
//   logistics_movement: [
//     "road_coal_journey_widget",
//     "rail_coal_journey_widget",
//     "r_c_r_coal_journey_widget",
//     "coal_statement_widget",
//     "daily_coal_logistic_report_widget",
//   ],
//   performance_and_monitoring: [
//     "weigh_bridge_analysis_widget",
//     "coal_consumption/generation_analysis_widget",
//     "r_c_f_losses_widget",
//     "tracking_widget",
//   ],
//   coal_handling: ["inventory_widget"],
//   coal_quality: [
//     "receipt_quality_analysis_widget",
//     "bunker_quality_analysis_widget",
//     "coal_analysis_widget",
//     "coal_gcv_analysis_widget",
//   ],
//   weighbridge: [
//     "old_weigh_bridge_a_widget",
//     "old_weigh_bridge_b_widget",
//     "old_weigh_bridge_store_widget",
//     "old_weigh_bridge_ash_widget",
//   ],
//   new_weighbridge: [
//     "weigh_bridge_a_widget",
//     "weigh_bridge_b_widget",
//     "weigh_bridge_store_widget",
//     "weigh_bridge_ash_widget",
//   ],
//   gate_portals: ["old_gate_portal_dfc_widget", "old_gate_portal_main_widget"],
//   new_gate_portals: ["gate_portal_dfc_widget", "gate_portal_main_widget"],
//   registration: [
//     "register_driver_face_widget",
//     "truck_registration_ft_dfc_widget",
//     "truck_registration_ft_main_widget",
//   ],
//   transporter_portal: [
//     "old_transporter_portal_dfc_widget",
//     "old_transporter_portal_main_widget",
//   ],
//   new_transporter_portal: [
//     "transporter_portal_dfc_widget",
//     "transporter_portal_main_widget",
//   ],
//   form_15: ["form_15_widget"],
//   grn_portal: ["grn_portal_widget", "grn_approval_widget"],
//   summary: [
//     "logistics_widget",
//     "quality_widget",
//     "operations_widget",
//     "finance_widget",
//   ],
//   // aop: ["aop_widget"],
// };
