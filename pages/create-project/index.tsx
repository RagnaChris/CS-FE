import Head from "next/head";

import { Col, Grid } from "@tremor/react";

import Profile from "@/components/pages/create-project/profile";
import CarbonOffsets from "@/components/pages/create-project/carbon-offsets";
import Totals from "@/components/pages/create-project/totals";
import CreateProjectButton from "@/components/buttons/create-project-button";

export default function CreateProjectPage() {
  return (
    <section className={"space-y-10"}>
      <Head>
        <title>Create Project - Carbon Sarhat</title>
      </Head>
      <div>
        <h1>Create Project</h1>
        <h2>Submit a New Project for Financing</h2>
      </div>

      <Grid numColsMd={2} numColsLg={3} className="mt-6 gap-6">
        <Col numColSpanMd={3}>
          <CreateProjectButton />
        </Col>

        <Col>
          <Profile />
        </Col>

        <Col numColSpanLg={2}>
          <Grid className={"gap-6"}>
            <CarbonOffsets />
            <Totals />
          </Grid>
        </Col>
      </Grid>
    </section>
  );
}
