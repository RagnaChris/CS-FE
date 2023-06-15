import { type ReactElement } from "react";
import Head from "next/head";
import NextLink from "next/link";

import Layout from "@/components/pages/dashboard/layout";

import { Col, Grid } from "@tremor/react";

import OffsetApplicationForm from "@/components/pages/dashboard/offset/offset-application-form";
import FAQ from "@/components/pages/dashboard/create-project/new/faq";

export default function OffsetApplicationPage() {
  return (
    <>
      <Head>
        <title>Offset Emissions Application - Carbon Sarhat</title>
      </Head>
      <section className={"space-y-10"}>
        <div>
          <h1>Offset Emissions Application</h1>
          <h2>
            <NextLink href={"/dashboard/offset"}>Back</NextLink>
          </h2>
        </div>

        <Grid numItemsMd={2} className={"gap-6"}>
          <Col>
            <OffsetApplicationForm />
          </Col>

          <Col>
            <div className={"space-y-6"}>
              <FAQ />
            </div>
          </Col>
        </Grid>
      </section>
    </>
  );
}

OffsetApplicationPage.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};
