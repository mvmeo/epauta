import Ramo from "../../../components/layout/Ramo";
import axios from "axios";
import React from "react";

const controlesURL =
  "https://mvmeo.github.io/apipautas/carreras/plan-comun/edo/controles.json";
const solemnesURL =
  "https://mvmeo.github.io/apipautas/carreras/plan-comun/edo/solemnes.json";
const examenesURL =
  "https://mvmeo.github.io/apipautas/carreras/plan-comun/edo/examenes.json";

export default function Edo() {
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
      nombreRamo="Ecuaciones diferenciales"
      enlaceRamo="edo"
        Controles={null}
        Solemnes={null}
        Examenes={null}
      />
    );

  return (
    <Ramo
      nombreCarrera="Ingeniería informática"
      enlaceCarrera="eit"
      nombreRamo="Ecuaciones diferenciales"
      enlaceRamo="edo"
      Controles={Controles}
      Solemnes={Solemnes}
      Examenes={Examenes}
    />
  );
}
