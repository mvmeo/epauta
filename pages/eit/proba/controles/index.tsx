import Evaluacion from "../../../../components/layout/Evaluacion";

import axios from "axios";
import React from "react";

const baseURL =
  "https://mvmeo.github.io/apipautas/carreras/eit/proba/controles.json";

export default function Controles() {
  const [Controles, setControles] = React.useState(null);

  React.useEffect(() => {
    axios.get(baseURL).then((response) => {
      setControles(response.data);
    });
  }, []);

  return (
    <Evaluacion
      nombreCarrera="Ingeniería informática"
      enlaceCarrera="eit"
      nombreRamo="Probabilidad y estadística"
      enlaceRamo="proba"
      tipoEvaluacion="Controles"
      enlaceEvaluacion="controles"
      Files={Controles}
    />
  );
}
