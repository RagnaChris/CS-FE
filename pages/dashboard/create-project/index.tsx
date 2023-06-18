import { type ReactElement } from "react";
import Head from "next/head";

import Layout from "@/components/pages/dashboard/layout";

import { Col, Grid } from "@tremor/react";

import Profile from "@/components/pages/dashboard/create-project/profile";
import CarbonOffsets from "@/components/pages/dashboard/create-project/carbon-offsets";
import Totals from "@/components/pages/dashboard/create-project/totals";
import CreateProjectButton from "@/components/pages/dashboard/buttons/create-project-button";

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

      <Grid numItemsMd={2} numItemsLg={3} className="mt-6 gap-6">
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

CreateProjectPage.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};
