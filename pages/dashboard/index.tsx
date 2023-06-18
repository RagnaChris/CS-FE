import type { ReactElement } from "react";
import Head from "next/head";

import Layout from "@/components/pages/dashboard/layout";

import { Card, Col, Grid, Metric, Subtitle } from "@tremor/react";

import Balance from "@/components/pages/dashboard/home/balance";
import Profile from "@/components/pages/dashboard/home/profile";
import StartTradingButton from "@/components/pages/dashboard/buttons/start-trading-button";
import CreateProjectButton from "@/components/pages/dashboard/buttons/create-project-button";
import Charts from "@/components/pages/dashboard/home/charts";
import {
  Change,
  TotalFinancing,
} from "@/components/pages/dashboard/home/stats";
import News from "@/components/pages/dashboard/home/news";

export default function HomePage() {
  return (
    <section className={"space-y-10"}>
      <Head>
        <title>Home - Carbon Sarhat</title>
      </Head>
      <div>
        <h1>Home</h1>
        <h2>Account Overview</h2>
      </div>

      <Grid numItemsMd={2} numItemsLg={3} className="mt-6 gap-6">
        <Col numColSpanLg={1}>
          <div className="space-y-6">
            <Balance />
            <Profile />
          </div>
        </Col>

        <Col numColSpan={1} numColSpanMd={1} numColSpanLg={2}>
          <Card className={"h-full"}>
            <Subtitle>Total Financing</Subtitle>
            <Metric>$ 123,456,789</Metric>

            <Charts />
          </Card>
        </Col>

        <Col numColSpanLg={1}></Col>

        <Col numColSpan={1} numColSpanLg={2}>
          <TotalFinancing />
        </Col>

        <Col numColSpanLg={1} className={"self-end"}>
          <Grid numItems={2} className="gap-6">
            <CreateProjectButton />
            <StartTradingButton />
          </Grid>
        </Col>

        <Col numColSpan={1} numColSpanLg={2}>
          <Change />
        </Col>
      </Grid>

      <News />
    </section>
  );
}

HomePage.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};
