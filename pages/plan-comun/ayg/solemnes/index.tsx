import Evaluacion from "../../../../components/layout/Evaluacion";

  import axios from "axios";
  import React from "react";
  
  const baseURL = "https://mvmeo.github.io/apipautas/carreras/plan-comun/ayg/solemnes.json";
  
  
  
  export default function Solemnes() {
    const [Solemnes, setSolemnes] = React.useState(null);
  
    React.useEffect(() => {
      axios.get(baseURL).then((response) => {
        setSolemnes(response.data);
      });
    }, []);
  
    if (!Solemnes)
    return (
      <Evaluacion
        nombreCarrera="Plan común"
        enlaceCarrera="plan-comun"
        nombreRamo="Álgebra y geometría"
        enlaceRamo="ayg"
        tipoEvaluacion="Solemnes"
        enlaceEvaluacion="solemnes"
        Files={null}
      />
    );

  return (
    <Evaluacion
      nombreCarrera="Plan común"
      enlaceCarrera="plan-comun"
      nombreRamo="Álgebra y geometría"
      enlaceRamo="ayg"
      tipoEvaluacion="Solemnes"
      enlaceEvaluacion="Solemnes"
      Files={Solemnes}
    />
  );
  }
