import { BadgeDelta, Card, Flex, Grid, Metric, Subtitle } from "@tremor/react";

export default function Totals() {
  return (
    <Grid numItemsLg={2} className="gap-6">
      <Card>
        <Subtitle>Total Platform Financing</Subtitle>
        <Flex className="mb-7 space-x-3 truncate">
          <Metric>$ 87,678,672</Metric>
          <BadgeDelta deltaType="moderateIncrease">5.7%</BadgeDelta>
        </Flex>
        <Subtitle>Total Tokens</Subtitle>
        <Flex className="space-x-3 truncate">
          <Metric>23,036,396</Metric>
          <BadgeDelta deltaType="moderateIncrease">3.2%</BadgeDelta>
        </Flex>
      </Card>

      <Card>
        <Subtitle>Total Active Developers</Subtitle>
        <Flex className="mb-7 space-x-3 truncate">
          <Metric>102</Metric>
        </Flex>
        <Subtitle>Total Projects Done</Subtitle>
        <Flex className="space-x-3 truncate">
          <Metric>357</Metric>
        </Flex>
      </Card>
    </Grid>
  );
}
