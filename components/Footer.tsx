import React from "react";

const Footer = () => {
  return (
    <div className="mt-10 container mx-auto">
      <hr className="mx-4"/>
      <div className="grid grid-cols-1 md:grid-cols-2 text-white p-8 gap-8">
      <div className="">
        <p className="mb-4">
          Envía tu pauta para colaborar a{" "}
          <a href="mailto:epauta.submit@gmail.com" className="hover:underline">
            epauta.submit@gmail.com
          </a>{" "}
          de la siguiente forma:
        </p>
        <div className="bg-white text-black p-3 rounded">
          <p className="bg-gray-200 border border-slate-900 rounded p-4 m-2">
            Asunto: Pauta - [Carrera]
          </p>
          <div className="p-2">
            <div className="flex mt-2 text-gray-500">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-4 h-4 mt-1 mr-1"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M18.375 12.739l-7.693 7.693a4.5 4.5 0 01-6.364-6.364l10.94-10.94A3 3 0 1119.5 7.372L8.552 18.32m.009-.01l-.01.01m5.699-9.941l-7.81 7.81a1.5 1.5 0 002.112 2.13"
                />
              </svg>

              <p>Adjuntar archivo PDF.</p>
            </div>
            <div className="mt-2 ">
              <p>Ejemplo de formato del nombre del archivo: </p>
            </div>
            <div className="mt-3 bg-gray-500 rounded text-white p-3">
              <p>Examen_1_Ecuaciones-Diferenciales_2022_1.pdf</p>
            </div>
          </div>
        </div>
      </div>
      <div>
        <h2 className="font-bold">Otras herramientas útiles:</h2>
        <ul>
          <li>
            <a
              href="http://horariosxdxd.surge.sh/horarios"
              className="hover:underline"
            >
              Generador de horarios.
            </a>
          </li>
          <li>
            <a
              href="https://malla-fic.surge.sh/?m=INF"
              className="hover:underline"
            >
              Malla interactiva - Informática
            </a>
          </li>
        </ul>
      </div>
    </div>
    </div>
  );
};

export default Footer;
