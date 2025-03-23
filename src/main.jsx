import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App2.jsx";
import UserContextWrapper from "./Components/Context/Context.jsx";
// import App from "./App3WithoutLazy.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <UserContextWrapper>
      <App />
    </UserContextWrapper>
  </StrictMode>
);
