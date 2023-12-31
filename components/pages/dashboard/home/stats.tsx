import {
  BadgeDelta,
  Card,
  DeltaType,
  Flex,
  Grid,
  Metric,
  Subtitle,
} from "@tremor/react";

export function TotalFinancing() {
  return (
    <Grid className="gap-6">
      {totalCategories.map((item) => (
        <Card
          key={item.title}
          className={"flex items-center justify-center gap-10"}
        >
          <div>
            <Subtitle>{item.title}</Subtitle>
            <Metric>{item.metric}</Metric>
          </div>
          <div>
            <Subtitle>{item.subtitle}</Subtitle>
            <Metric>{item.sub_metric}</Metric>
          </div>
        </Card>
      ))}
    </Grid>
  );
}

export function Change() {
  return (
    <Grid numItemsSm={2} className="gap-6">
      {categories.map((item) => (
        <Card key={item.title}>
          <Flex>
            <Subtitle>{item.title}</Subtitle>
            <BadgeDelta deltaType={item.deltaType}>{item.delta}</BadgeDelta>
          </Flex>
          <Flex className="space-x-3 truncate">
            <Metric>{item.metric}</Metric>
          </Flex>
        </Card>
      ))}
    </Grid>
  );
}

const categories: {
  title: string;
  metric: string;
  metricPrev: string;
  delta: string;
  deltaType: DeltaType;
}[] = [
  {
    title: "Token Price (24hr)",
    metric: "$ 12.53",
    metricPrev: "$10.22",
    delta: "13.3%",
    deltaType: "moderateIncrease",
  },
  {
    title: "Token Supply (24hr)",
    metric: "123,456,789",
    metricPrev: "121,123,456",
    delta: "1.5%",
    deltaType: "moderateIncrease",
  },
];

const totalCategories = [
  {
    title: "Total Platform Financing",
    metric: "$ 123,456,789",
    subtitle: "Tokens",
    sub_metric: "123,456,789",
  },
];
