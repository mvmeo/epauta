import Evaluacion from "../../../../components/layout/Evaluacion";

import axios from "axios";
import React from "react";

const baseURL =
  "https://mvmeo.github.io/apipautas/carreras/plan-comun/c3/controles.json";

export default function Controles() {
  const [Controles, setControles] = React.useState(null);

  React.useEffect(() => {
    axios.get(baseURL).then((response) => {
      setControles(response.data);
    });
  }, []);

  return (
    <Evaluacion
      nombreCarrera="Ingeniería industrial"
      enlaceCarrera="eii"
      nombreRamo="Cálculo III"
      enlaceRamo="c3"
      tipoEvaluacion="Solemnes"
      enlaceEvaluacion="solemnes"
      Files={Controles}
    />
  );
}
