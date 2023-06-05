import Head from "next/head";

import { Col, Grid } from "@tremor/react";

import TokenChart from "@/components/pages/exchange/token-chart";
import TokenSwap from "@/components/pages/exchange/token-swap";
import {
  TokenSupply,
  BurnedTokenSupply,
} from "@/components/pages/exchange/token-supply";

export default function ExchangePage() {
  return (
    <section className={"space-y-10"}>
      <Head>
        <title>Exchange - Carbon Sarhat</title>
      </Head>
      <div>
        <h1>Exchange</h1>
        <h2>USDC/CASA</h2>
      </div>

      <Grid numColsMd={2} numColsLg={3} className="mt-6 gap-6">
        <Col numColSpan={1} numColSpanMd={1} numColSpanLg={2}>
          <TokenChart />
        </Col>

        <Col numColSpanLg={1}>
          <TokenSwap />
        </Col>

        <Col numColSpanLg={1}>
          <TokenSupply />
        </Col>

        <Col numColSpanLg={1}>
          <BurnedTokenSupply />
        </Col>
      </Grid>
    </section>
  );
}
