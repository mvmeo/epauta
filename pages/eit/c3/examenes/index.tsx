import Evaluacion from "../../../../components/layout/Evaluacion";

import axios from "axios";
import React from "react";

const baseURL =
  "https://mvmeo.github.io/apipautas/carreras/plan-comun/c3/examenes.json";

export default function Examenes() {
  const [Examenes, setExamenes] = React.useState(null);

  React.useEffect(() => {
    axios.get(baseURL).then((response) => {
      setExamenes(response.data);
    });
  }, []);

  return (
    <Evaluacion
      nombreCarrera="Ingeniería informática"
      enlaceCarrera="eit"
      nombreRamo="Cálculo 3"
      enlaceRamo="c3"
      tipoEvaluacion="Exámenes"
      enlaceEvaluacion="examenes"
      Files={Examenes}
    />
  );
}
