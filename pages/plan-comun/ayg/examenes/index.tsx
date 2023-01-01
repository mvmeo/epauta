import Evaluacion from "../../../../components/layout/Evaluacion";

import axios from "axios";
import React from "react";

const baseURL =
  "https://mvmeo.github.io/apipautas/carreras/plan-comun/ayg/examenes.json";

export default function Examenes() {
  const [Examenes, setExamenes] = React.useState(null);

  React.useEffect(() => {
    axios.get(baseURL).then((response) => {
      setExamenes(response.data);
    });
  }, []);

  return (
    <Evaluacion
      nombreCarrera="Plan común"
      enlaceCarrera="plan-comun"
      nombreRamo="Álgebra y geometría"
      enlaceRamo="ayg"
      tipoEvaluacion="Examenes"
      enlaceEvaluacion="examenes"
      Files={Examenes}
    />
  );
}
