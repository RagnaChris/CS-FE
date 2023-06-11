import Head from "next/head";
import NextLink from "next/link";
import { Col, Grid } from "@tremor/react";

import OffsetApplicationForm from "@/components/pages/offset/offset-application-form";
import FAQ from "@/components/pages/create-project/new/faq";

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
            <NextLink href={"/offset"}>Back</NextLink>
          </h2>
        </div>

        <Grid numColsMd={2} className={"gap-6"}>
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
