import {
  BarChart,
  TabGroup,
  TabList,
  Tab,
  TabPanels,
  TabPanel,
} from "@tremor/react";

export default function Charts() {
  return (
    <>
      <TabGroup defaultIndex={1}>
        <TabList className="mb-6 mt-6">
          <Tab>Credits</Tab>
          <Tab>Projects</Tab>
        </TabList>

        <TabPanels>
          <TabPanel>
            <BarChart
              data={creditsData}
              index="name"
              categories={["Credits"]}
              colors={["cyan"]}
              valueFormatter={dataFormatter}
              animationDuration={500}
            />
          </TabPanel>
          <TabPanel>
            <BarChart
              data={projectsData}
              index="name"
              categories={["Cost", "Profit"]}
              colors={["cyan", "pink"]}
              stack={true}
              showGridLines={true}
              animationDuration={500}
            />
          </TabPanel>
        </TabPanels>
      </TabGroup>
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
