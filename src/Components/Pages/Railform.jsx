import { useState } from "react";
import { Outlet, useParams } from "react-router";

const Railform = () => {
  return (
    <div
      style={{
        width: "100%",
        textAlign: "center",
      }}
    >
      <h1>Railform</h1>
      <Outlet />
    </div>
  );
};

export default Railform;

export const ID = () => {
  const { id } = useParams();

  return (
    <p
      style={{
        fontWeight: "600",
      }}
    >
      RR No : {id}
    </p>
  );
};

export const CreateID = () => {
  const [getId, setId] = useState("");
  return (
    <input
      style={{
        fontWeight: "600",
      }}
      value={getId}
      onChange={(e) => {
        setId(e.target.value);
      }}
    />
  );
};
