import { type ReactElement } from "react";
import Head from "next/head";

import Layout from "@/components/layout";
import RetailDetailsForm from "@/components/pages/signup/retail-details-form";

export default function RetailDetailsPage() {
  return (
    <>
      <Head>
        <title>Retail Sign Up - Carbon Sarhat</title>
      </Head>
      <RetailDetailsForm />
    </>
  );
}

RetailDetailsPage.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};
