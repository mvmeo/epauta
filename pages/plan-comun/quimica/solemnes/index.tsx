import Evaluacion from "../../../../components/layout/Evaluacion";

  import axios from "axios";
  import React from "react";
  
  const baseURL = "https://mvmeo.github.io/apipautas/carreras/plan-comun/quimica/solemnes.json";
  
  
  
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
        nombreRamo="Química"
        enlaceRamo="quimica"
        tipoEvaluacion="Solemnes"
        enlaceEvaluacion="solemnes"
        Files={Solemnes}
      />
    );
  }
