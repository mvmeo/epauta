import Ramo from "../../../components/layout/Ramo";
import axios from "axios";
import React from "react";

const controlesURL =
  "https://mvmeo.github.io/apipautas/carreras/plan-comun/calor/controles.json";
const solemnesURL =
  "https://mvmeo.github.io/apipautas/carreras/plan-comun/calor/solemnes.json";
const examenesURL =
  "https://mvmeo.github.io/apipautas/carreras/plan-comun/calor/examenes.json";

export default function Electro() {
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
        nombreCarrera="Ingeniería en obras civiles"
        enlaceCarrera="eoc"
        nombreRamo="Calor y ondas"
        enlaceRamo="calor"
        Controles={null}
        Solemnes={Solemnes}
        Examenes={Examenes}
      />
    );

  if (!Solemnes)
    return (
      <Ramo
        nombreCarrera="Ingeniería en obras civiles"
        enlaceCarrera="eoc"
        nombreRamo="Calor y ondas"
        enlaceRamo="calor"
        Controles={Controles}
        Solemnes={null}
        Examenes={Examenes}
      />
    );

  if (!Examenes)
    return (
      <Ramo
        nombreCarrera="Ingeniería en obras civiles"
        enlaceCarrera="eoc"
        nombreRamo="Calor y ondas"
        enlaceRamo="calor"
        Controles={Controles}
        Solemnes={Solemnes}
        Examenes={null}
      />
    );

  return (
    <Ramo
      nombreCarrera="Ingeniería en obras civiles"
      enlaceCarrera="eoc"
      nombreRamo="Calor y ondas"
      enlaceRamo="calor"
      Controles={Controles}
      Solemnes={Solemnes}
      Examenes={Examenes}
    />
  );
}
