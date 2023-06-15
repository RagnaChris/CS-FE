import { type ReactElement } from "react";
import Head from "next/head";

import Layout from "@/components/pages/dashboard/layout";

import { Card } from "@tremor/react";
import TradesTable from "@/components/pages/dashboard/history/trades-table";

export default function HistoryPage() {
  return (
    <section className={"space-y-10"}>
      <Head>
        <title>Trading History - Carbon Sarhat</title>
      </Head>
      <h1>Trading History</h1>
      <Card>
        <TradesTable />
      </Card>
    </section>
  );
}

HistoryPage.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};
