import { useState } from "react";
import { BarChart, Tab, TabList } from "@tremor/react";

export default function Charts() {
  const [showCard, setShowCard] = useState(false);

  return (
    <>
      <TabList
        defaultValue="2"
        onValueChange={(value) => setShowCard(value === "1")}
        className="mt-6"
        color={"cyan"}
      >
        <Tab value="1" text="Credits" />
        <Tab value="2" text="Projects" />
      </TabList>

      {showCard ? (
        <BarChart
          className="mt-6"
          data={creditsData}
          index="name"
          categories={["Credits"]}
          colors={["cyan"]}
          valueFormatter={dataFormatter}
        />
      ) : (
        <BarChart
          className="mt-6"
          data={projectsData}
          index="name"
          categories={["Cost", "Profit"]}
          colors={["cyan", "pink"]}
          stack={true}
          showGridLines={true}
        />
      )}
    </>
  );
}

const creditsData = [
  {
    name: "Credits 1",
    Credits: 5,
  },
  {
    name: "Credits 2",
    Credits: 10,
  },
  {
    name: "Credits 3",
    Credits: 15,
  },
  {
    name: "Credits 4",
    Credits: 20,
  },
  {
    name: "Credits 5",
    Credits: 25,
  },
];

const projectsData = [
  {
    name: "Project 1",
    Cost: 50000,
    Profit: 100000,
  },
  {
    name: "Project 2",
    Cost: 75000,
    Profit: 125000,
  },
  {
    name: "Project 3",
    Cost: 100000,
    Profit: 150000,
  },
  {
    name: "Project 4",
    Cost: 125000,
    Profit: 175000,
  },
  {
    name: "Project 5",
    Cost: 150000,
    Profit: 200000,
  },
];

const dataFormatter = (number: number) => {
  return "$ " + Intl.NumberFormat("us").format(number).toString();
};
