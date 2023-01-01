import Head from "next/head";
import Link from "next/link";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <Head>
        <title>ePauta</title>
        <meta
          name="description"
          content="La herramienta con la que salvas el semestre."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="">
        <div className="bg-red-500 md:h-screen h-full">
          <div className="mx-auto container">
            <div className="p-4">
              <h1 className="text-white font-bold text-[30px] font-serif">
                ePAUTA 2.0
              </h1>
              <h2 className="text-white font-mono">
                La herramienta con la que salvas el semestre.
              </h2>
            </div>

            <div className="container mx-auto">
              <div className="grid md:grid-cols-5 m-4 gap-4 text-white font-bold">
                <Link
                  href="/plan-comun"
                  className="bg-white text-red-500 rounded-lg p-8"
                >
                  PLAN COMÚN
                </Link>
                <div className="md:col-span-4 grid grid-cols-1 gap-4">
                  <Link
                    href="/eii"
                    className="bg-white text-red-500 rounded-lg p-8"
                  >
                    INGENIERÍA CIVIL INDUSTRIAL
                  </Link>
                  <Link
                    href="/eit"
                    className="bg-white text-red-500 rounded-lg p-8"
                  >
                    INGENIERÍA CIVIL INFORMÁTICA Y TELECOMUNICACIONES
                  </Link>
                  <Link
                    href="/eoc"
                    className="bg-white text-red-500 rounded-lg p-8"
                  >
                    INGENIERÍA CIVIL EN OBRAS CIVILES
                  </Link>
                </div>
              </div>
            </div>
            <Footer />
          </div>
        </div>
      </main>
    </>
  );
}
