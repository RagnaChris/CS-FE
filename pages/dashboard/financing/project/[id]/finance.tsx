import { type ReactElement } from "react";
import Head from "next/head";
import NextLink from "next/link";
import { useRouter } from "next/router";

import Layout from "@/components/pages/dashboard/layout";

import { Col, Grid } from "@tremor/react";

import FinanceProjectForm from "@/components/pages/dashboard/project/finance-project-form";
import FAQ from "@/components/pages/dashboard/create-project/new/faq";

export default function FinanceProjectPage() {
  const {
    query: { id },
  } = useRouter();

  return (
    <>
      <Head>
        <title>Finance Project - Carbon Sarhat</title>
      </Head>
      <section className={"space-y-10"}>
        <div>
          <h1>Finance Project</h1>
          <h2>
            <NextLink href={`/dashboard/financing/project/${id}`}>
              Back
            </NextLink>
          </h2>
        </div>

        <Grid numItemsMd={2} className={"gap-6"}>
          <Col>
            <FinanceProjectForm />
          </Col>

          <Col>
            <FAQ />
          </Col>
        </Grid>
      </section>
    </>
  );
}

FinanceProjectPage.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};
