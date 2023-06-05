import { Card, Flex, Grid, Metric, Text } from "@tremor/react";

export function TokenSupply() {
  return (
    <Grid className="gap-6">
      <Card className={"border border-emerald-300"}>
        <Flex>
          <Text>Current Token Supply</Text>
        </Flex>
        <Flex className="mb-7 space-x-3 truncate">
          <Metric className={"text-xl"}>37,457,091</Metric>
        </Flex>
        <Flex>
          <Text>24h Token Supply</Text>
        </Flex>
        <Flex className="space-x-3 truncate">
          <Metric className={"text-xl"}>76,576</Metric>
        </Flex>
      </Card>
    </Grid>
  );
}

export function BurnedTokenSupply() {
  return (
    <Grid className="gap-6">
      <Card className={"border border-red-600"}>
        <Flex>
          <Text>Total Tokens Burned</Text>
        </Flex>
        <Flex className="mb-7 space-x-3 truncate">
          <Metric className={"text-xl"}>15,357,841</Metric>
        </Flex>
        <Flex>
          <Text>24h Tokens Burned</Text>
        </Flex>
        <Flex className="space-x-3 truncate">
          <Metric className={"text-xl"}>59,836</Metric>
        </Flex>
      </Card>
    </Grid>
  );
}
