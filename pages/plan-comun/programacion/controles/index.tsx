import Evaluacion from "../../../../components/layout/Evaluacion";

import axios from "axios";
import React from "react";

const baseURL =
  "https://mvmeo.github.io/apipautas/carreras/plan-comun/programacion/controles.json";

export default function Controles() {
  const [Controles, setControles] = React.useState(null);

  React.useEffect(() => {
    axios.get(baseURL).then((response) => {
      setControles(response.data);
    });
  }, []);

  return (
    <Evaluacion
      nombreCarrera="Plan común"
      enlaceCarrera="plan-comun"
      nombreRamo="Programación"
      enlaceRamo="programacion"
      tipoEvaluacion="Controles"
      enlaceEvaluacion="controles"
      Files={Controles}
    />
  );
}
