import Head from "next/head";
import Link from "next/link";
import Breadcrumb from "../../components/Breadcrumb";
import Footer from "../Footer";

export default function evaluacion(props: any) {
  return (
    <>
      <Head>
        <title>
          ePauta - Plan Común / Programación / {props.tipoEvaluacion}
        </title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="">
        <div className="container mx-auto">
          <Breadcrumb
            enlaceCarrera={props.enlaceCarrera}
            enlaceRamo={props.enlaceRamo}
            enlaceEvaluacion={props.enlaceEvaluacion}
            carrera={props.nombreCarrera}
            ramo={props.nombreRamo}
            evaluacion={props.tipoEvaluacion}
          />

          <div className="grid grid-cols-3 gap-4 mt-4">
            {Object.keys(props.Files || {}).map((key: any) => {
              return (
                <>
                  <div className="bg-white p-4 rounded">
                    <Link href={props.Files[key].enlace} className="hover:text-red-500 " target="_blank">
                      <div className="flex">
                        <div className="mr-3">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="w-6 h-6"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3"
                            />
                          </svg>
                        </div>
                        <div className="">
                          {props.Files[key].nombre +
                            ": " +
                            props.Files[key].ramo +
                            " - " +
                            props.Files[key].año +
                            "-" +
                            props.Files[key].semestre}
                        </div>
                      </div>
                    </Link>
                  </div>
                </>
              );
            })}
          </div>
        </div>
        <Footer />
      </main>
    </>
  );
}
