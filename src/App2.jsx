import React, { lazy, Suspense, useState } from "react";
import { BrowserRouter, Navigate, NavLink, Route, Routes } from "react-router";
import { Card } from "./Components/Widgets/PnM/PnM";

const LogisticsMovement = lazy(() =>
  import("./Components/Widgets/LogisticsMovement/LogisticsMovement")
);
const PnM = lazy(() => import("./Components/Widgets/PnM/PnM"));
const CoalJourneys = lazy(() =>
  import("./Components/Widgets/LogisticsMovement/CoalJourneys/CoalJourneys")
);
const CoalStatement = lazy(() =>
  import("./Components/Widgets/LogisticsMovement/CoalStatement/CoalStatement")
);
const DCLR = lazy(() =>
  import("./Components/Widgets/LogisticsMovement/DCLR/DCLR")
);
const Rail = lazy(() =>
  import("./Components/Widgets/LogisticsMovement/CoalJourneys/Rail")
);
const Road = lazy(() =>
  import("./Components/Widgets/LogisticsMovement/CoalJourneys/Road")
);
const RCR = lazy(() =>
  import("./Components/Widgets/LogisticsMovement/CoalJourneys/RCR")
);
const Linx = lazy(() => import("./Components/Linx"));
const Railform = lazy(() => import("./Components/Pages/Railform"));
const CreateID = lazy(() =>
  import("./Components/Pages/Railform").then((module) => ({
    default: module.CreateID,
  }))
);
const ID = lazy(() =>
  import("./Components/Pages/Railform").then((module) => ({
    default: module.ID,
  }))
);
const About = lazy(() => import("./Components/Pages/About"));

const Setting = lazy(() =>
  import("./Components/Pages/About").then((module) => ({
    default: module.Setting,
  }))
);

const Home = lazy(() => import("./Components/Pages/Home"));

const App2 = () => (
  <div>
    <RouteConfig />
  </div>
);

export default App2;

const RouteConfig = () => {
  const [show, setshow] = useState(false);

  return (
    <BrowserRouter>
      <div
        className="navbar"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          position: "relative",
        }}
      >
        <ChangePermissionModal
          {...{
            show,
            setshow,
          }}
        />
        <Suspense fallback={renderLoader()}>
          <Linx to="/home" className="mainlinks">
            Home
          </Linx>{" "}
          |{" "}
          <Linx to="/about" className="mainlinks">
            About
          </Linx>{" "}
          |{" "}
          <Linx to="/setting" className="mainlinks">
            Setting
          </Linx>
          <div className="mainlinks" onClick={() => setshow((p) => !p)}>
            Permissions
          </div>
        </Suspense>
      </div>
      <Routes>
        <Route path="/" index element={<Navigate to="/home" replace />} />
        <Route
          path="/home"
          element={
            <Suspense fallback={renderLoader()}>
              <Home />
            </Suspense>
          }
        >
          <Route index element={<Navigate to="logistics_movement" replace />} />

          <Route
            path="logistics_movement"
            element={
              <Suspense fallback={renderLoader()}>
                <LogisticsMovement />
              </Suspense>
            }
          >
            <Route index element={<Navigate to="coal_journey" replace />} />

            <Route
              path="coal_journey"
              element={
                <Suspense fallback={renderLoader()}>
                  <CoalJourneys />
                </Suspense>
              }
            >
              <Route index element={<Navigate to="road" replace />} />

              <Route
                path="road"
                element={
                  <Suspense fallback={renderLoader()}>
                    <Road />
                  </Suspense>
                }
              />
              <Route
                path="rail"
                element={
                  <Suspense fallback={renderLoader()}>
                    <Rail />
                  </Suspense>
                }
              />
              <Route
                path="rcr"
                element={
                  <Suspense fallback={renderLoader()}>
                    <RCR />
                  </Suspense>
                }
              />
            </Route>

            <Route
              path="coal_statement"
              element={
                <Suspense fallback={renderLoader()}>
                  <CoalStatement />
                </Suspense>
              }
            />
            <Route
              path="dclr"
              element={
                <Suspense fallback={renderLoader()}>
                  <DCLR />
                </Suspense>
              }
            />
          </Route>

          <Route
            path="performance_and_monitoring"
            element={
              <Suspense fallback={renderLoader()}>
                <PnM />
              </Suspense>
            }
          />
        </Route>
        <Route
          path="/about"
          element={
            <Suspense fallback={renderLoader()}>
              <About />
            </Suspense>
          }
        />
        <Route
          path="/setting"
          element={
            <Suspense fallback={renderLoader()}>
              <Setting />
            </Suspense>
          }
        />

        <Route
          path="*"
          element={
            <Suspense fallback={renderLoader()}>
              <div onClick={() => {}}>
                <NavLink to={"/home"}>Go to Home page</NavLink>
              </div>
            </Suspense>
          }
        />
        <Route
          path="/railform"
          element={
            <Suspense fallback={renderLoader()}>
              <Railform />
            </Suspense>
          }
        >
          <Route
            index
            element={
              <Suspense fallback={renderLoader()}>
                <CreateID />
              </Suspense>
            }
          />
          <Route
            path=":id"
            element={
              <Suspense fallback={renderLoader()}>
                <ID />
              </Suspense>
            }
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export const RR_no = [63, 68, 9, 15, 100];

const renderLoader = () => (
  <div style={{ fontSize: "5vw", color: "white" }}>Loading...</div>
);

const ChangePermissionModal = ({ show, setshow }) => {
  const [permission, setPermission] = useState(permission_obj);

  const [userPermission, setUserPermission] = useState({
    home: {
      permissions: { view: true, create: false, edit: false, delete: false },
      logistics_movement: {
        permissions: { view: true, create: false, edit: false, delete: false },

        coal_journey: {
          permissions: { view: true, create: false, edit: true, delete: false },

          road: {
            permissions: {
              view: true,
              create: false,
              edit: true,
              delete: false,
            },
          },
        },

        dclr: {
          permissions: { view: true, create: true, edit: false, delete: false },
        },
      },
    },
  });

  console.log(userPermission, "userPermission");

  return (
    <div
      className="stickytopparent"
      onClick={(e) => {
        e.preventDefault();
        e.stopPropagation();
      }}
    >
      {show && (
        <div className="stickytop">
          {Object.keys(permission).map((key) => (
            <Card
              data={permission[key]}
              name={key}
              isChecked={userPermission?.[key]?.["permissions"]?.["view"]}
              userPermission={userPermission?.[key]}
              onClick={(d, n) => {
                let _data = { ...d };
                console.log(_data, "_data");
                setUserPermission({ ..._data });
              }}
            />
          ))}
        </div>
      )}
    </div>
  );
};
const permission_obj = {
  home: {
    permissions: { view: true, create: false, edit: false, delete: false },
    logistics_movement: {
      permissions: { view: true, create: false, edit: false, delete: false },
      coal_journey: {
        permissions: { view: true, create: false, edit: true, delete: false },
        road: {
          permissions: { view: true, create: false, edit: true, delete: false },
        },
        rail: {
          permissions: { view: true, create: false, edit: true, delete: false },
        },
        rcr: {
          permissions: { view: true, create: false, edit: true, delete: false },
        },
      },
      coal_statement: {
        permissions: { view: true, create: false, edit: true, delete: false },
      },
      dclr: {
        permissions: { view: true, create: true, edit: false, delete: false },
      },
    },
    performance_and_monitoring: {
      permissions: { view: true, create: false, edit: false, delete: false },
    },
  },
  about: {
    permissions: { view: true, create: false, edit: false, delete: false },
  },
  setting: {
    permissions: { view: true, create: true, edit: true, delete: true },
  },
};

// const ReturnRoutes = ({ path }) => {
//   return;
//   <>

//     {
//       permission_obj["home"] &&
// permission_obj["home"]["permissions"]["view"]
// &&   Object.keys(permission_obj["home"]).map((page)=>{
// return page !== "permissions" &&

// })
//     }
//   </>;
// };
//           {/* {permission_obj["home"] &&
// permission_obj["home"]["permissions"]["view"]
// &&   Object.keys(permission_obj["home"]).map((page)=>{
// return page !== "permissions" &&

// }) */
