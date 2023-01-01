import Link from "next/link";
import React from "react";

const Breadcrumb = (props: any) => {
  return (
    <nav className="md:flex p-4 ">
      <Link href="/" className="">
        <div className="text-white font-bold text-[30px] font-serif">
          ePAUTA 2.0
        </div>
      </Link>
      <div className="p-2 text-white font-semibold font-serif text-[20px] ">
        {/* create a breadcrumb */}
        <Link href={`/${props.enlaceCarrera}`}>
          {props.carrera ? "/ " + props.carrera : ""}
        </Link>
        <Link href={`/${props.enlaceCarrera}/${props.enlaceRamo}`}>
          {props.ramo ? " / " + props.ramo : ""}
        </Link>
        <Link href={`/${props.enlaceCarrera}/${props.enlaceRamo}/${props.enlaceEvaluacion}`}>
          {props.evaluacion ? " / " + props.evaluacion : ""}
        </Link>
      </div>
    </nav>
  );
};

export default Breadcrumb;
