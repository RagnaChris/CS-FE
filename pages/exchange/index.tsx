import Head from "next/head";

import { Tabs } from "@mantine/core";
import { Card, Col, Grid } from "@tremor/react";

import TokenChart from "@/components/pages/exchange/token-chart";
import TokenSwap from "@/components/pages/exchange/token-swap/token-swap";
import {
  TokenSupply,
  BurnedTokenSupply,
} from "@/components/pages/exchange/token-supply";
import TradesCard from "@/components/pages/exchange/trades-card";
import CreditCard from "@/components/pages/exchange/credit-card";
import NewsLoop from "@/components/pages/exchange/news-loop";

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
        <Col numColSpanMd={3}>
          <NewsLoop />
        </Col>

        <Col numColSpan={1} numColSpanMd={2}>
          <TokenChart />
        </Col>

        <Col numColSpanLg={1}>
          <Tabs
            variant="outline"
            defaultValue="swap"
            styles={() => ({
              tabsList: {
                borderBottom: "none",
              },
              tab: {
                borderTopLeftRadius: "0.375rem",
                borderTopRightRadius: "0.375rem",
                "&[data-active]": {
                  backgroundColor: "rgb(31 41 55)",
                  borderColor: "rgb(55 65 81)",
                  zIndex: 10,
                },
                "&[data-active]::before": {
                  backgroundColor: "rgb(31 41 55)",
                },
              },
            })}
          >
            <Tabs.List grow position={"right"}>
              <Tabs.Tab value="swap">Swap</Tabs.Tab>
              <Tabs.Tab value="info">Info</Tabs.Tab>
            </Tabs.List>

            <Tabs.Panel value="swap">
              <div className={"space-y-6"}>
                <TokenSwap />
                <CreditCard />
              </div>
            </Tabs.Panel>

            <Tabs.Panel value="info">
              <Card
                className={
                  "h-full rounded-tr-none border border-gray-700 ring-0"
                }
              >
                <h2>Info here</h2>
              </Card>
            </Tabs.Panel>
          </Tabs>
        </Col>

        <Col>
          <div className={"space-y-6"}>
            <TokenSupply />
            <BurnedTokenSupply />
          </div>
        </Col>

        <Col numColSpanMd={2}>
          <TradesCard />
        </Col>
      </Grid>
    </section>
  );
}
