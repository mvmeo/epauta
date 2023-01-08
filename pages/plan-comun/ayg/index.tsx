import Ramo from "../../../components/layout/Ramo";
import axios from "axios";
import React from "react";

const controlesURL =
  "https://mvmeo.github.io/apipautas/carreras/plan-comun/ayg/controles.json";
const solemnesURL =
  "https://mvmeo.github.io/apipautas/carreras/plan-comun/ayg/solemnes.json";
const examenesURL =
  "https://mvmeo.github.io/apipautas/carreras/plan-comun/ayg/examenes.json";

export default function Ayg() {
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
        nombreCarrera="Plan común"
        enlaceCarrera="plan-comun"
        nombreRamo="Álgebra y geometría"
        Controles={null}
        Solemnes={null}
        Examenes={null}
      />
    );

  return (
    <Ramo
      nombreCarrera="Plan común"
      enlaceCarrera="plan-comun"
      nombreRamo="Álgebra y geometría"
      Controles={Controles}
      Solemnes={Solemnes}
      Examenes={Examenes}
    />
  );
}
