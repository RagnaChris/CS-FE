import { type ReactElement } from "react";
import Head from "next/head";

import Layout from "@/components/pages/dashboard/layout";

import {
  Card,
  Col,
  Grid,
  TabGroup,
  TabList,
  Tab,
  TabPanels,
  TabPanel,
} from "@tremor/react";

import TokenChart from "@/components/pages/dashboard/exchange/token-chart";
import TokenSwap from "@/components/pages/dashboard/exchange/token-swap/token-swap";
import {
  TokenSupply,
  BurnedTokenSupply,
} from "@/components/pages/dashboard/exchange/token-supply";
import TradesCard from "@/components/pages/dashboard/exchange/trades-card";
import CreditCard from "@/components/pages/dashboard/exchange/credit-card";
import NewsLoop from "@/components/pages/dashboard/exchange/news-loop";

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

      <Grid numItemsMd={2} numItemsLg={3} className="mt-6 gap-6">
        <Col numColSpanMd={3}>
          <NewsLoop />
        </Col>

        <Col numColSpan={1} numColSpanMd={2}>
          <TokenChart />
        </Col>

        <Col numColSpanLg={1}>
          <div className={"space-y-6"}>
            <Card>
              <TabGroup>
                <TabList className="mb-6">
                  <Tab>Swap</Tab>
                  <Tab>Info</Tab>
                </TabList>
                <TabPanels>
                  <TabPanel>
                    <div className={"space-y-6"}>
                      <TokenSwap />
                    </div>
                  </TabPanel>
                  <TabPanel>
                    <h2>Info here</h2>
                  </TabPanel>
                </TabPanels>
              </TabGroup>
            </Card>

            <CreditCard />
          </div>
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

ExchangePage.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};
