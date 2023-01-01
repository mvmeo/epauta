import React from "react";

const Breadcrumb = (props: any) => {
  return (
    <nav className="md:flex p-4 ">
      <a href="/" className="">
        <div className="text-white font-bold text-[30px] font-serif">
          ePAUTA 2.0
        </div>
      </a>
      <div className="p-2 text-white font-semibold font-serif text-[20px] ">
        {/* create a breadcrumb */}
        <a href={`/${props.enlaceCarrera}`}>
          {props.carrera ? "/ " + props.carrera : ""}
        </a>
        <a href={`/${props.enlaceCarrera}/${props.enlaceRamo}`}>
          {props.ramo ? " / " + props.ramo : ""}
        </a>
        <a href={`/${props.enlaceCarrera}/${props.enlaceRamo}/${props.enlaceEvaluacion}`}>
          {props.evaluacion ? " / " + props.evaluacion : ""}
        </a>
      </div>
    </nav>
  );
};

export default Breadcrumb;
