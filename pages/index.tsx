import Head from "next/head";

import { Card, Col, Grid, Metric, Text } from "@tremor/react";

import Balance from "@/components/pages/home/balance";
import Profile from "@/components/pages/home/profile";
import StartTradingButton from "@/components/buttons/start-trading-button";
import CreateProjectButton from "@/components/buttons/create-project-button";
import Charts from "@/components/pages/home/charts";
import { Change, TotalFinancing } from "@/components/pages/home/stats";
import News from "@/components/pages/home/news";

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

      <Grid numColsMd={2} numColsLg={3} className="mt-6 gap-6">
        <Col numColSpanLg={1}>
          <div className="space-y-6">
            <Balance />
            <Profile />
          </div>
        </Col>

        <Col numColSpan={1} numColSpanMd={1} numColSpanLg={2}>
          <Card className={"h-full"}>
            <Text>Total Financing</Text>
            <Metric className={"text-xl"}>$ 123,456,789</Metric>

            <Charts />
          </Card>
        </Col>

        <Col numColSpanLg={1}></Col>

        <Col numColSpan={1} numColSpanLg={2}>
          <TotalFinancing />
        </Col>

        <Col numColSpanLg={1} className={"self-end"}>
          <Grid numCols={2} className="gap-6">
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
