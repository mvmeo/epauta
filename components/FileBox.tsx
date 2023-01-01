import React from "react";
import FileList from "./FileList";

const FileBox = (props: any) => {
  return (
    <div className="bg-white rounded relative">
      <div className="bg-gray-300 rounded-t">
        <h2 className="p-4 text-xl uppercase">{props.evaluacion}</h2>
      </div>
      <FileList Files={props.Files}/>
      <div className="bg-gray-300 mt-10">
        <a
          href={`/${props.carrera}/${props.ramo}/${props.evaluacion}`}
          className=" p-4 pl-8 hover:text-red-500 absolute bottom-0 right-0"
        >
          Ver más...
        </a>
      </div>
    </div>
  );
};

export default FileBox;
