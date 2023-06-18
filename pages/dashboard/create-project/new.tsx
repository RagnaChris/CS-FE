import { type ReactElement } from "react";
import Head from "next/head";
import NextLink from "next/link";

import Layout from "@/components/pages/dashboard/layout";

import { Col, Grid } from "@tremor/react";

import CreateProjectForm from "@/components/pages/dashboard/create-project/new/create-project-form";
import FAQ from "@/components/pages/dashboard/create-project/new/faq";
import Info from "@/components/pages/dashboard/create-project/new/info";

export default function CreateProjectPage() {
  return (
    <>
      <Head>
        <title>Create Project - Carbon Sarhat</title>
      </Head>
      <section className={"space-y-10"}>
        <div>
          <h1>Create Project</h1>
          <h2>
            <NextLink href={"/dashboard/create-project"}>Back</NextLink>
          </h2>
        </div>

        <Grid numItemsMd={2} className={"gap-6"}>
          <Col>
            <CreateProjectForm />
          </Col>

          <Col>
            <div className={"space-y-6"}>
              <FAQ />
              <Info />
            </div>
          </Col>
        </Grid>
      </section>
    </>
  );
}

CreateProjectPage.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};
