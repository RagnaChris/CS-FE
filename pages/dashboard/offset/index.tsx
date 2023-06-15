import { type ReactElement } from "react";
import Head from "next/head";
import NextLink from "next/link";

import Layout from "@/components/pages/dashboard/layout";

import { Card, Col, Flex, Grid, Metric, Text, Title } from "@tremor/react";
import { Button } from "@mantine/core";
import Image from "next/image";

export default function OffsetPage() {
  return (
    <section className={"space-y-10"}>
      <Head>
        <title>Offset Emissions - Carbon Sarhat</title>
      </Head>
      <div>
        <h1>Offset Emissions</h1>
        <h2>
          You are contributing to the longevity of our collective home, Earth!
        </h2>
      </div>

      <Grid numItemsMd={2} className="mt-6 gap-6">
        <Col className="space-y-6">
          <Title>How to Offset Your Emissions</Title>

          <div>
            <p>Offset your carbon emission in 5 simple steps:</p>
            <ol className={"ml-6 list-decimal"}>
              <li>Step 1</li>
              <li>Step 2</li>
              <li>Step 3</li>
              <li>Step 4</li>
              <li>Step 5</li>
            </ol>
          </div>

          <p>
            Congratulations, you have offset the amount of carbon credits
            represented by Token. An offset report will be generated detailing
            the carbon credits which you can access as a PDF via your email as
            well as in the History section.
          </p>

          <p>Disclaimer: Once Token is offset, it cannot be altered.</p>

          <Grid numItems={2} className="gap-6">
            <Button
              component={NextLink}
              href="/dashboard/offset/application"
              color="gray.6"
              bg={"#6b7280"}
            >
              Offset Emissions
            </Button>
            <Button
              component={NextLink}
              href={"/dashboard/exchange"}
              color="gray.6"
              bg={"#6b7280"}
            >
              Buy Token
            </Button>
          </Grid>
        </Col>

        <Col>
          <Card>
            <Flex>
              <Text>Making an Impact via Platform</Text>
            </Flex>
            <Flex className="mt-2 space-x-3 truncate">
              <div className={"relative w-full text-center"}>
                <Image
                  src={"/img/news.jpg"}
                  alt={"impact"}
                  width={500}
                  height={400}
                  className={"h-28 w-full rounded-md object-cover"}
                  priority={true}
                />
                <Metric
                  className={
                    "absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-gray-900 bg-opacity-50 p-3 text-xl backdrop-blur-sm"
                  }
                >
                  66 Banks
                </Metric>
              </div>

              <div className={"relative w-full text-center"}>
                <Image
                  src={"/img/news.jpg"}
                  alt={"impact"}
                  width={500}
                  height={400}
                  className={"h-28 w-full rounded-md object-cover"}
                  priority={true}
                />
                <Metric
                  className={
                    "absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-gray-900 bg-opacity-50 p-3 text-xl backdrop-blur-sm"
                  }
                >
                  201 Organizations
                </Metric>
              </div>
            </Flex>
          </Card>
        </Col>
      </Grid>
    </section>
  );
}

OffsetPage.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};
