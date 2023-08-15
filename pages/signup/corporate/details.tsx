import { type ReactElement } from "react";
import Head from "next/head";

import Layout from "@/components/layout";
import CorporateDetailsForm from "@/components/pages/signup/corporate-details-form";

export default function CorporateDetailsPage() {
  return (
    <>
      <Head>
        <title>Corporate Sign Up - Carbon Sarhat</title>
      </Head>
      <CorporateDetailsForm />
    </>
  );
}

CorporateDetailsPage.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};
