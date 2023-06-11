import Head from "next/head";
import NextLink from "next/link";

import { Col, Grid } from "@tremor/react";
import Profile from "@/components/pages/create-project/profile";
import ProjectDetailsCard from "@/components/pages/project/project-details-card";

export default function Project() {
  return (
    <>
      <Head>
        <title>Project - Carbon Sarhat</title>
      </Head>
      <section className={"space-y-10"}>
        <div>
          <h1>Project</h1>
          <h2>
            <NextLink href={"/financing"}>Back</NextLink>
          </h2>
        </div>

        <Grid numColsMd={3} className={"gap-6"}>
          <Col numColSpanMd={2}>
            <ProjectDetailsCard />
          </Col>
          <Col>
            <Profile />
          </Col>
        </Grid>
      </section>
    </>
  );
}
