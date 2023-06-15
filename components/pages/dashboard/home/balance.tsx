import { Card, Grid, Metric, Subtitle } from "@tremor/react";

export default function Balance() {
  return (
    <Grid className="gap-6">
      {balance.map((item) => (
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

const balance = [
  {
    title: "Total Balance",
    metric: "$ 123,456",
    subtitle: "Total Tokens",
    sub_metric: "123,456",
  },
];
