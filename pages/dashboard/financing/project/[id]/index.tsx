import { type ReactElement } from "react";
import Head from "next/head";
import NextLink from "next/link";

import Layout from "@/components/pages/dashboard/layout";

import { Col, Grid } from "@tremor/react";
import Profile from "@/components/pages/dashboard/create-project/profile";
import ProjectDetailsCard from "@/components/pages/dashboard/project/project-details-card";

export default function ProjectPage() {
  return (
    <>
      <Head>
        <title>Project - Carbon Sarhat</title>
      </Head>
      <section className={"space-y-10"}>
        <div>
          <h1>Project</h1>
          <h2>
            <NextLink href={"/dashboard/financing"}>← Back</NextLink>
          </h2>
        </div>

        <Grid numItemsMd={3} className={"gap-6"}>
          <Col numColSpanMd={2}>
            <ProjectDetailsCard />
          </Col>
          <Col className={"self-center"}>
            <Profile />
          </Col>
        </Grid>
      </section>
    </>
  );
}

ProjectPage.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};
