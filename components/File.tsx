import React from "react";

const File = (props:any) => {
  return (
    <div className={`${props.className} flex p-4`}>
      <a href={props.enlace} className="hover:text-red-500 text-md">
        {props.nombre}
      </a>
      
    </div>
  );
};

export default File;
