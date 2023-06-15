import { type ReactElement } from "react";
import Head from "next/head";

import Layout from "@/components/pages/dashboard/layout";

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

_404Page.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};
