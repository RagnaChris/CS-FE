import { AreaChart, BadgeDelta, Card, Metric, Text } from "@tremor/react";

export default function TokenChart() {
  return (
    <Card className={"h-full"}>
      <div className={"flex items-center justify-between gap-3"}>
        <Metric className={"text-xl"}>3.81 USDC/Token</Metric>
        <BadgeDelta deltaType={"moderateIncrease"}>2.8%</BadgeDelta>
      </div>
      <Text>Feb 8, 2023, 4:00 PM (UTC)</Text>

      <AreaChart
        className="mt-4 h-72"
        data={chartdata}
        index="date"
        categories={["amount"]}
        colors={["cyan"]}
        valueFormatter={dataFormatter}
        showLegend={false}
      />
    </Card>
  );
}

const chartdata = [
  {
    date: "13:00",
    amount: 2.0,
  },
  {
    date: "15:00",
    amount: 3.3,
  },
  {
    date: "17:00",
    amount: 4.0,
  },
  {
    date: "19:00",
    amount: 2.5,
  },
  {
    date: "21:00",
    amount: 3.0,
  },
  {
    date: "23:00",
    amount: 3.25,
  },
  {
    date: "01:00",
    amount: 3.5,
  },
  {
    date: "03:00",
    amount: 4.0,
  },
];

const dataFormatter = (number: number) => {
  return "$" + Intl.NumberFormat("us").format(number).toString();
};
