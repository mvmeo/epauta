import Evaluacion from "../../../../components/layout/Evaluacion";

import axios from "axios";
import React from "react";

const baseURL =
  "https://mvmeo.github.io/apipautas/carreras/plan-comun/proba/solemnes.json";

export default function Solemnes() {
  const [Solemnes, setSolemnes] = React.useState(null);

  React.useEffect(() => {
    axios.get(baseURL).then((response) => {
      setSolemnes(response.data);
    });
  }, []);

  return (
    <Evaluacion
      nombreCarrera="Ingeniería informática"
      enlaceCarrera="eit"
      nombreRamo="Probabilidad y estadística"
      enlaceRamo="proba"
      tipoEvaluacion="Solemnes"
      enlaceEvaluacion="solemnes"
      Files={Solemnes}
    />
  );
}
