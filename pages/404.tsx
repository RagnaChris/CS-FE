import Head from "next/head";

export default function _404Page() {
  return (
    <>
      <Head>
        <title>404 Page Not Found - Carbon Sarhat</title>
      </Head>

      <section className={"-mt-20 flex h-screen items-center justify-center"}>
        <h1>404 Error - Page Not Found</h1>
      </section>
    </>
  );
}
