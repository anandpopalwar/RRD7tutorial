import React, { lazy, Suspense, useEffect, useState } from "react";

const renderLoader = () => (
  <div style={{ fontSize: "5vw", color: "white" }}>Loading...</div>
);

import {
  BrowserRouter,
  createBrowserRouter,
  createRoutesFromElements,
  Navigate,
  NavLink,
  Outlet,
  Route,
  RouterProvider,
  Routes,
  useNavigate,
} from "react-router";
import Login from "./Components/Pages/login";

const Card = lazy(() =>
  import("./Components/Widgets/PnM/PnM").then((module) => ({
    default: module.Card,
  }))
);
const CoalQuality = lazy(() =>
  import("./Components/Widgets/CoalQuality/CoalQuality")
);
const ReceiptQualityAnalysis = lazy(() =>
  import("./Components/Widgets/CoalQuality/ChildCompo/ReceiptQualityAnalysis")
);
const BunkerQualityAnalysis = lazy(() =>
  import("./Components/Widgets/CoalQuality/ChildCompo/BunkerQualityAnalysis")
);
const CoalAnalysis = lazy(() =>
  import("./Components/Widgets/CoalQuality/ChildCompo/CoalAnalysis")
);
const CoalGCVAnalysis = lazy(() =>
  import("./Components/Widgets/CoalQuality/ChildCompo/CoalGCVAnalysis")
);

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
import About from "./Components/Pages/About";
import { getUserContext } from "./Components/Context/Context";
// const About = lazy(() => import("./Components/Pages/About"));

const Setting = lazy(() =>
  import("./Components/Pages/About").then((module) => ({
    default: module.Setting,
  }))
);

// import Home from "./Components/Pages/Home";
const Home = lazy(() => import("./Components/Pages/Home"));

const App2 = () => (
  <div>
    <RouteConfig />
  </div>
);

export default App2;

const NavBar = () => {
  const [show, setshow] = useState(false);
  const navigate = useNavigate();
  const { logoutUser } = getUserContext();

  return (
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
      <Linx to="/login" className="mainlinks">
        Login
      </Linx>{" "}
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
      <div className="mainlinks" onClick={logoutUser}>
        Log out
      </div>{" "}
      <div className="mainlinks" onClick={() => setshow((p) => !p)}>
        Permissions {show ? "open" : "closed"}
      </div>
    </div>
  );
};

const PrivateRoute = ({ children }) => {
  const { isUserLoggedIn } = getUserContext();
  console.log(children, "children");
  if (!isUserLoggedIn) return <Navigate to="/login" replace />;

  return children;
};

const RouteConfig = () => {
  const { isUserLoggedIn } = getUserContext();

  console.log(isUserLoggedIn, "isUserLoggedIn");

  useEffect(() => {
    console.log(isUserLoggedIn);
  }, [isUserLoggedIn]);

  return (
    <BrowserRouter>
      <Suspense fallback={renderLoader()}>
        <NavBar />

        <Routes>
          <Route path="/" index element={<Navigate to="/login" replace />} />
          <Route
            path="/login"
            element={
              <Suspense fallback={renderLoader()}>
                <Login />
              </Suspense>
            }
          ></Route>
          <Route
            path="/home"
            element={
              <Suspense fallback={renderLoader()}>
                <PrivateRoute>
                  {console.log("HHHHHHHHHHHHHHHHHHH")}
                  <Home />
                </PrivateRoute>
              </Suspense>
            }
          >
            <Route
              index
              element={<Navigate to="logistics_movement" replace />}
            />

            <Route
              path="logistics_movement"
              element={
                <Suspense fallback={renderLoader()}>
                  <PrivateRoute>
                    <LogisticsMovement />
                  </PrivateRoute>
                </Suspense>
              }
            >
              <Route index element={<Navigate to="coal_journey" replace />} />

              <Route
                path="coal_journey"
                element={
                  <Suspense fallback={renderLoader()}>
                    <PrivateRoute>
                      <CoalJourneys />
                    </PrivateRoute>
                  </Suspense>
                }
              >
                <Route index element={<Navigate to="road" replace />} />

                <Route
                  path="road"
                  element={
                    <Suspense fallback={renderLoader()}>
                      <PrivateRoute>
                        <Road />
                      </PrivateRoute>
                    </Suspense>
                  }
                />
                <Route
                  path="rail"
                  element={
                    <Suspense fallback={renderLoader()}>
                      <PrivateRoute>
                        <Rail />
                      </PrivateRoute>
                    </Suspense>
                  }
                />
                <Route
                  path="rcr"
                  element={
                    <Suspense fallback={renderLoader()}>
                      <PrivateRoute>
                        <RCR />
                      </PrivateRoute>
                    </Suspense>
                  }
                />
              </Route>

              <Route
                path="coal_statement"
                element={
                  <PrivateRoute>
                    <Suspense fallback={renderLoader()}>
                      <CoalStatement />
                    </Suspense>
                  </PrivateRoute>
                }
              />
              <Route
                path="dclr"
                element={
                  <PrivateRoute>
                    <Suspense fallback={renderLoader()}>
                      <DCLR />
                    </Suspense>
                  </PrivateRoute>
                }
              />
            </Route>
            <Route
              path="coal_quality"
              element={
                <PrivateRoute>
                  <Suspense fallback={renderLoader()}>
                    <CoalQuality />
                  </Suspense>
                </PrivateRoute>
              }
            >
              <Route index element={<Navigate to="RQA" replace />} />

              <Route
                path="RQA"
                element={
                  <PrivateRoute>
                    <Suspense fallback={renderLoader()}>
                      <ReceiptQualityAnalysis />
                    </Suspense>
                  </PrivateRoute>
                }
              />

              <Route
                path="BQA"
                element={
                  <PrivateRoute>
                    <Suspense fallback={renderLoader()}>
                      <BunkerQualityAnalysis />
                    </Suspense>
                  </PrivateRoute>
                }
              />
              <Route
                path="CA"
                element={
                  <PrivateRoute>
                    <Suspense fallback={renderLoader()}>
                      <CoalAnalysis />
                    </Suspense>
                  </PrivateRoute>
                }
              />
              <Route
                path="GCVCA"
                element={
                  <PrivateRoute>
                    <Suspense fallback={renderLoader()}>
                      <CoalGCVAnalysis />
                    </Suspense>
                  </PrivateRoute>
                }
              />
            </Route>

            <Route
              path="performance_and_monitoring"
              element={
                <PrivateRoute>
                  <Suspense fallback={renderLoader()}>
                    <PnM />
                  </Suspense>
                </PrivateRoute>
              }
            />
          </Route>

          <Route
            path="/about"
            element={
              <PrivateRoute>
                <Suspense fallback={renderLoader()}>
                  <About />
                </Suspense>
              </PrivateRoute>
            }
          />
          <Route
            path="/setting"
            element={
              <PrivateRoute>
                <Suspense fallback={renderLoader()}>
                  <Setting />
                </Suspense>
              </PrivateRoute>
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
              <PrivateRoute>
                <Suspense fallback={renderLoader()}>
                  <Railform />
                </Suspense>
              </PrivateRoute>
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
      </Suspense>
    </BrowserRouter>
  );
};

export const RR_no = [63, 68, 9, 15, 100];

const ChangePermissionModal = ({ show, setshow }) => {
  const [permission] = useState(permission_obj);

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

const _permission_route_config = [
  {
    path: "home",
    element: <Home />,
    children: [
      {
        path: "logistics_movement",
        element: <LogisticsMovement />,
        permissionPath: "logistics_movement",
        children: [
          {
            path: "coal_journey",
            element: <CoalJourneys />,
            permissionPath: "coal_journey",
            children: [
              {
                path: "road",
                element: <Road />,
                permissionPath: "road",
              },
              {
                path: "rail",
                element: <Rail />,
                permissionPath: "rail",
              },
              {
                path: "rcr",
                element: <RCR />,
                permissionPath: "rcr",
              },
            ],
          },
          {
            path: "coal_statement",
            element: <CoalStatement />,
            permissionPath: "coal_statement",
          },
          {
            path: "dclr",
            element: <DCLR />,
            permissionPath: "dclr",
          },
        ],
      },
      {
        path: "performance_and_monitoring",
        element: <PnM />,
        permissionPath: "performance_and_monitering",
      },
    ],
  },
  {
    path: "about",
    element: <About />,
    permissionPath: "about_page",
  },
  {
    path: "setting",
    element: <Setting />,
    permissionPath: "setting_page",
  },
];

const D = (parentarray, parentpath = "") => {
  for (let i = 0; i < parentarray.length; i++) {
    let this_path = parentpath
      ? parentpath + ">" + parentarray[i]["path"]
      : parentarray[i]["path"];

    parentarray[i].children
      ? D(parentarray[i].children, this_path)
      : console.log(this_path);
  }
};
D(_permission_route_config);

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

export const Spinner = (props) => (
  <svg
    id="L2"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    x="0px"
    y="0px"
    viewBox="-10 -10 120 120"
    enableBackground="new 0 0 100 100"
    xmlSpace="preserve"
    width="20px"
    height="20px"
    {...props}
  >
    <circle
      fill="none"
      stroke="#000000"
      strokeWidth={12}
      strokeMiterlimit={10}
      cx={50}
      cy={50}
      r={48}
    />
    <line
      fill="none"
      strokeLinecap="round"
      stroke="#000000"
      strokeWidth={12}
      strokeMiterlimit={10}
      x1={50}
      y1={50}
      x2={85}
      y2={50.5}
    >
      <animateTransform
        attributeName="transform"
        dur="2s"
        type="rotate"
        from="0 50 50"
        to="360 50 50"
        repeatCount="indefinite"
      />
    </line>
    <line
      fill="none"
      strokeLinecap="round"
      stroke="#000000"
      strokeWidth={12}
      strokeMiterlimit={10}
      x1={50}
      y1={50}
      x2={49.5}
      y2={74}
    >
      <animateTransform
        attributeName="transform"
        dur="15s"
        type="rotate"
        from="0 50 50"
        to="360 50 50"
        repeatCount="indefinite"
      />
    </line>
  </svg>
);
