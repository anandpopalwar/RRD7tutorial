import React from "react";
import { RR_no } from "../../../../App2";
import Linx from "../../../Linx";

export const Rail = () => {
  return (
    <div>
      <h4>Rail</h4>
      {RR_no.map((ele) => (
        <p>
          <Linx to={"/railform/" + ele}>{ele}</Linx>
        </p>
      ))}
    </div>
  );
};
