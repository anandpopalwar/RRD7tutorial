import React, { lazy, Suspense } from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router";

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

const RouteConfig = () => (
  <BrowserRouter>
    <div
      className="navbar"
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Suspense fallback={renderLoader()}>
        <Linx to="/home" className="mainlinks">
          Home
        </Linx>{" "}
        |{" "}
        <Linx className="mainlinks" to="/about">
          About
        </Linx>{" "}
        |{" "}
        <Linx to="/setting" className="mainlinks">
          Setting
        </Linx>
      </Suspense>
    </div>
    <Routes>
      <Route path="/" index element={<Navigate to="home" replace />} />
      <Route
        path="home"
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
    </Routes>
  </BrowserRouter>
);

export const RR_no = [63, 68, 9, 15, 100];

const renderLoader = () => <div>Loading...</div>;
