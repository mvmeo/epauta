import Ramo from "../../../components/layout/Ramo";
import axios from "axios";
import React from "react";

const controlesURL =
  "https://mvmeo.github.io/apipautas/carreras/plan-comun/calor/controles.json";
const solemnesURL =
  "https://mvmeo.github.io/apipautas/carreras/plan-comun/calor/solemnes.json";
const examenesURL =
  "https://mvmeo.github.io/apipautas/carreras/plan-comun/calor/examenes.json";

export default function CalculoTres() {
  const [Controles, setControles] = React.useState(null);
  const [Solemnes, setSolemnes] = React.useState(null);
  const [Examenes, setExamenes] = React.useState(null);

  React.useEffect(() => {
    axios.get(controlesURL).then((response) => {
      setControles(response.data);
    });
  }, []);

  React.useEffect(() => {
    axios.get(solemnesURL).then((response) => {
      setSolemnes(response.data);
    });
  }, []);

  React.useEffect(() => {
    axios.get(examenesURL).then((response) => {
      setExamenes(response.data);
    });
  }, []);

  if (!Controles && !Solemnes && !Examenes)
    return (
      <Ramo
        nombreCarrera="Informática"
        enlaceCarrera="eit"
        nombreRamo="Calor y ondas"
        enlaceRamo="calor"
        Controles={null}
        Solemnes={null}
        Examenes={null}
      />
    );

  return (
    <Ramo
      nombreCarrera="Ingeniería informática"
      enlaceCarrera="eit"
      nombreRamo="Calor y ondas"
      enlaceRamo="calor"
      Controles={Controles}
      Solemnes={Solemnes}
      Examenes={Examenes}
    />
  );
}
