import Link from "next/link";
import React from "react";

const File = (props:any) => {
  return (
    <div className={`${props.className} flex p-4`}>
      <Link href={props.enlace} className="hover:text-red-500 text-md" target="_blank" rel="noopener">
        {props.nombre}
      </Link>
      
    </div>
  );
};

export default File;
