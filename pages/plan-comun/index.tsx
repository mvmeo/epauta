import Carrera from "../../components/layout/Carrera";
import axios from "axios";
import React from "react";

const baseURL = "https://mvmeo.github.io/apipautas/carreras/plan-comun/malla.json"

export default function PlanComun() {
  const [malla, setMalla] = React.useState(null);

  React.useEffect(() => {
    axios.get(baseURL).then((response) => {
      setMalla(response.data);
    });
  }, []);

  if (!malla) return null;

  return (
    <Carrera
      nombreCarrera="Plan común"
      enlaceCarrera="plan-comun"
      Malla={malla}
    />
  );
}
