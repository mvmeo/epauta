import Evaluacion from "../../../../components/layout/Evaluacion";

import axios from "axios";
import React from "react";

const baseURL =
  "https://mvmeo.github.io/apipautas/carreras/eit/proba/examenes.json";

export default function Examenes() {
  const [Examenes, setExamenes] = React.useState(null);

  React.useEffect(() => {
    axios.get(baseURL).then((response) => {
      setExamenes(response.data);
    });
  }, []);

  return (
    <Evaluacion
      nombreCarrera="Ingeniería en obras civiles"
      enlaceCarrera="eoc"
      nombreRamo="Probabilidad y estadística"
      enlaceRamo="proba"
      tipoEvaluacion="Examenes"
      enlaceEvaluacion="examenes"
      Files={Examenes}
    />
  );
}
