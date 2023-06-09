import Head from "next/head";

import { Col, Grid } from "@tremor/react";

import ProjectsTable from "@/components/pages/create-project/projects/projects-table";
import CreateProjectButton from "@/components/buttons/create-project-button";
import FAQ from "@/components/pages/create-project/new/faq";

export default function ProjectsPage() {
  return (
    <>
      <Head>
        <title>Projects - Carbon Sarhat</title>
      </Head>
      <section className={"space-y-10"}>
        <div>
          <h1>Your Projects</h1>
        </div>

        <Grid numColsMd={3} className={"gap-6"}>
          <Col>
            <CreateProjectButton />
          </Col>
          <Col numColSpanMd={2}>
            <FAQ />
          </Col>

          <Col numColSpanMd={3}>
            <ProjectsTable />
          </Col>
        </Grid>
      </section>
    </>
  );
}
