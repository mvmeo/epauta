import Carrera from "../../components/layout/Carrera";
import axios from "axios";
import React from "react";

const baseURL = "https://mvmeo.github.io/apipautas/carreras/eoc/malla.json"

export default function Eoc() {
  const [malla, setMalla] = React.useState(null);

  React.useEffect(() => {
    axios.get(baseURL).then((response) => {
      setMalla(response.data);
    });
  }, []);

  if (!malla) return null;

  return (
    <Carrera
      nombreCarrera="Ingeniería en obras civiles"
      enlaceCarrera="eoc"
      Malla={malla}
    />
  );
}
