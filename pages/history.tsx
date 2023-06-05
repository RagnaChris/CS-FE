import Head from "next/head";

import { Card } from "@tremor/react";
import TradesTable from "@/components/pages/history/trades-table";

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
