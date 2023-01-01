import Ramo from "../../../components/layout/Ramo";
import axios from "axios";

//files
import React from "react";

const controlesURL =
  "https://mvmeo.github.io/apipautas/carreras/plan-comun/programacion/controles.json";
const solemnesURL =
  "https://mvmeo.github.io/apipautas/carreras/plan-comun/programacion/solemnes.json";
const examenesURL =
  "https://mvmeo.github.io/apipautas/carreras/plan-comun/programacion/examenes.json";



export default function Programacion() {
  const [solemnes, setSolemnes] = React.useState(null);
  const [examenes, setExamenes] = React.useState(null);
  const [controles, setControles] = React.useState(null);

  React.useEffect(() => {
    axios.get(controlesURL).then((response) => {
      setControles(response.data);
    });
    axios.get(solemnesURL).then((response) => {
      setSolemnes(response.data);
    });
    axios.get(examenesURL).then((response) => {
      setExamenes(response.data);
    });
  }, []);

  if (!solemnes) return (
    <Ramo
      nombreCarrera="Plan común"
      enlaceCarrera="plan-comun"
      nombreRamo="Programación"
      enlaceRamo="programacion"
      Controles={controles}
      Solemnes={null}
      Examenes={examenes}
    />
  )

  if (!examenes) return (
    <Ramo
      nombreCarrera="Plan común"
      enlaceCarrera="plan-comun"
      nombreRamo="Programación"
      enlaceRamo="programacion"
      Controles={controles}
      Solemnes={solemnes}
      Examenes={null}
    />
  )

  if (!controles) return (
    <Ramo
      nombreCarrera="Plan común"
      enlaceCarrera="plan-comun"
      nombreRamo="Programación"
      enlaceRamo="programacion"
      Controles={null}
      Solemnes={solemnes}
      Examenes={examenes}
    />
  )

  return (
    <Ramo
      nombreCarrera="Plan común"
      enlaceCarrera="plan-comun"
      nombreRamo="Programación"
      enlaceRamo="programacion"
      Controles={controles}
      Solemnes={solemnes}
      Examenes={examenes}
    />
  )
}