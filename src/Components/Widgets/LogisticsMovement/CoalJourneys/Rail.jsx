import React from "react";
import { RR_no } from "../../../../App2";
import Linx from "../../../Linx";

const Rail = () => {
  return (
    <div>
      <div
        className="header"
        style={{
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <div className="leftTop">
          <h4>Rail</h4>
        </div>
        <div className="righjTop">
          <button>
            <Linx to={"/railform"}>create</Linx>
          </button>
        </div>
      </div>
      <div
        style={{
          display: "flex",
          gap: "1vw",
        }}
        className="body"
      >
        {RR_no.map((ele) => (
          <p>
            <Linx to={"/railform/" + ele}>{ele}</Linx>
          </p>
        ))}
      </div>
    </div>
  );
};

export default Rail;
