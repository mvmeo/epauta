import Evaluacion from "../../../../components/layout/Evaluacion";

import axios from "axios";
import React from "react";

const baseURL = "https://mvmeo.github.io/apipautas/carreras/plan-comun/programacion/solemnes.json";



export default function solemnes() {
  const [Solemnes, setSolemnes] = React.useState(null);

  React.useEffect(() => {
    axios.get(baseURL).then((response) => {
      setSolemnes(response.data);
    });
  }, []);

  if (!Solemnes) return null;

  return (
    <Evaluacion
      nombreCarrera="Plan común"
      enlaceCarrera="plan-comun"
      nombreRamo="Programación"
      enlaceRamo="programacion"
      tipoEvaluacion="Solemnes"
      enlaceEvaluacion="solemnes"
      Files={Solemnes}
    />
  );
}
