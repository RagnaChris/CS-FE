import { type ReactElement } from "react";
import Head from "next/head";
import NextLink from "next/link";

import Layout from "@/components/pages/dashboard/layout";

import { Col, Grid } from "@tremor/react";

import MintTokensForm from "@/components/pages/dashboard/exchange/mint/mint-tokens-form";

export default function MintPage() {
  return (
    <>
      <Head>
        <title>Mint Tokens - Carbon Sarhat</title>
      </Head>
      <section className={"space-y-10"}>
        <div>
          <h1>Mint Tokens</h1>
          <h2>
            <NextLink href={"/dashboard/exchange"}>Back</NextLink>
          </h2>
        </div>

        <Grid className={"gap-6"}>
          <Col>
            <MintTokensForm />
          </Col>
        </Grid>
      </section>
    </>
  );
}

MintPage.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};
