import React, { useState } from "react";

const PnM = () => {
  return (
    <div>
      <h3>Performace and monitering</h3>
    </div>
  );
};

export default PnM;
export const Card = ({ data, name, onClick, isChecked, userPermission }) => {
  console.log(name, data);
  return (
    <div className="folder">
      <div className="check">
        {name}
        <input
          type="checkbox"
          defaultChecked={isChecked}
          onClick={() => {
            let _d = { ...data };
            _d[name]["permissions"]["view"] = true;
            onClick(_d, name);
          }}
        />
      </div>
      <div>
        {Object.keys(data).length > 1 &&
          Object.keys(data).map((key) => {
            return (
              key !== "permissions" && (
                <Card
                  data={data[key]}
                  name={key}
                  isChecked={userPermission?.[key]?.["permissions"]["view"]}
                  userPermission={userPermission?.[key]}
                  onClick={onClick}
                />
              )
            );
          })}
      </div>
    </div>
  );
};
