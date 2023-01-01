import React from "react";

const RamoBox = (props:any) => {
  return (
    <div>
      <a href={"/" + props.carreraEnlace + "/" + props.ramoEnlace}>
        <div className="bg-white p-4 rounded">
          <h2 className="">{props.ramoNombre}</h2>
        </div>
      </a>
    </div>
  );
};

export default RamoBox;
