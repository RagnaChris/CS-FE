import { BadgeDelta, Card, Flex, Grid, Metric, Text } from "@tremor/react";

export default function Totals() {
  return (
    <Grid numColsLg={2} className="gap-6">
      <Card>
        <Flex>
          <Text>Total Platform Financing</Text>
        </Flex>
        <Flex className="mb-7 space-x-3 truncate">
          <Metric className={"text-xl"}>$ 87,678,672</Metric>
          <BadgeDelta deltaType="moderateIncrease">5.7%</BadgeDelta>
        </Flex>
        <Flex>
          <Text>Total Tokens</Text>
        </Flex>
        <Flex className="space-x-3 truncate">
          <Metric className={"text-xl"}>23,036,396</Metric>
          <BadgeDelta deltaType="moderateIncrease">3.2%</BadgeDelta>
        </Flex>
      </Card>

      <Card>
        <Flex>
          <Text>Total Active Developers</Text>
        </Flex>
        <Flex className="mb-7 space-x-3 truncate">
          <Metric className={"text-xl"}>102</Metric>
        </Flex>
        <Flex>
          <Text>Total Projects Done</Text>
        </Flex>
        <Flex className="space-x-3 truncate">
          <Metric className={"text-xl"}>357</Metric>
        </Flex>
      </Card>
    </Grid>
  );
}
