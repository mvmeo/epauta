import Head from "next/head";
import Link from "next/link";

export default function NotFound() {
  return (
    <>
      <Head>
        <title>ePauta - 404</title>
        <meta
          name="description"
          content="La herramienta con la que salvas el semestre."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="">
        <div className="bg-red-500 h-screen">
          <div className="mx-auto container">

            <div className="container mx-auto">
              <div className="flex justify-center pt-40">
                <div className="text-white space-y-8 font-mono">
                  <div>
                    <h2 className="text-[100px] font-mono font-bold">404</h2>
                    <h3 className="">Página no encontrada</h3>
                  </div>
                  <div>
                    <Link href="/" className="text-red-500 bg-white p-4 rounded">
                      Volver al inicio.
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
