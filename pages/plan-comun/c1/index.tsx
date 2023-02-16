import Ramo from "../../../components/layout/Ramo";
import axios from "axios";
import React from "react";

const controlesURL =
  "https://mvmeo.github.io/apipautas/carreras/plan-comun/c1/controles.json";
const solemnesURL =
  "https://mvmeo.github.io/apipautas/carreras/plan-comun/c1/solemnes.json";
const examenesURL =
  "https://mvmeo.github.io/apipautas/carreras/plan-comun/c1/examenes.json";

export default function CalculoUno() {
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

  if (!Controles)
    return (
      <Ramo
        nombreCarrera="Plan común"
        enlaceCarrera="plan-comun"
        nombreRamo="Cálculo I"
        enlaceRamo="c1"
        Controles={null}
        Solemnes={Solemnes}
        Examenes={Examenes}
      />
    );

  if (!Solemnes)
    return (
      <Ramo
        nombreCarrera="Plan común"
        enlaceCarrera="plan-comun"
        nombreRamo="Cálculo I"
        enlaceRamo="c1"
        Controles={Controles}
        Solemnes={null}
        Examenes={Examenes}
      />
    );

  if (!Examenes)
    return (
      <Ramo
        nombreCarrera="Plan común"
        enlaceCarrera="plan-comun"
        nombreRamo="Cálculo I"
        enlaceRamo="c1"
        Controles={Controles}
        Solemnes={Solemnes}
        Examenes={null}
      />
    );

  return (
    <Ramo
      nombreCarrera="Plan común"
      enlaceCarrera="plan-comun"
      nombreRamo="Cálculo I"
      enlaceRamo="c1"
      Controles={Controles}
      Solemnes={Solemnes}
      Examenes={Examenes}
    />
  );
}
