import Evaluacion from "../../../../components/layout/Evaluacion";

  import axios from "axios";
  import React from "react";
  
  const baseURL = "https://mvmeo.github.io/apipautas/carreras/plan-comun/c2/solemnes.json";
  
  
  
  export default function Solemnes() {
    const [Solemnes, setSolemnes] = React.useState(null);
  
    React.useEffect(() => {
      axios.get(baseURL).then((response) => {
        setSolemnes(response.data);
      });
    }, []);
 
    return (
      <Evaluacion
        nombreCarrera="Plan común"
        enlaceCarrera="plan-comun"
        nombreRamo="Cálculo 2"
        enlaceRamo="c2"
        tipoEvaluacion="Solemnes"
        enlaceEvaluacion="solemnes"
        Files={Solemnes}
      />
    );
  }
