import { Card, Flex, Grid, Metric, Subtitle } from "@tremor/react";

export function TokenSupply() {
  return (
    <Grid className="gap-6">
      <Card className={"border"}>
        <Subtitle>Current Token Supply</Subtitle>
        <Flex className="mb-7 space-x-3 truncate">
          <Metric>37,457,091</Metric>
        </Flex>
        <Subtitle>24h Token Supply</Subtitle>
        <Flex className="space-x-3 truncate">
          <Metric>76,576</Metric>
        </Flex>
      </Card>
    </Grid>
  );
}

export function BurnedTokenSupply() {
  return (
    <Grid className="gap-6">
      <Card className={"border !border-red-600"}>
        <Subtitle>Total Tokens Burned</Subtitle>
        <Flex className="mb-7 space-x-3 truncate">
          <Metric>15,357,841</Metric>
        </Flex>
        <Subtitle>24h Tokens Burned</Subtitle>
        <Flex className="space-x-3 truncate">
          <Metric>59,836</Metric>
        </Flex>
      </Card>
    </Grid>
  );
}
