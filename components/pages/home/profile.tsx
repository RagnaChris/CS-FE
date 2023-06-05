import NextLink from "next/link";

import { Avatar } from "@mantine/core";
import { Card, Grid, Subtitle, Text, Title } from "@tremor/react";

export default function Profile() {
  return (
    <Card>
      <NextLink
        href={"#"}
        className={"absolute right-4 top-4 float-right hover:underline"}
      >
        <small>Edit Profile</small>
      </NextLink>
      <div className={"mb-5 flex flex-col items-center justify-center gap-2"}>
        <Avatar size="lg" src="/img/avatar.jpg" alt={"avatar"} radius={9999} />
        <Title className={"text-base"}>Username</Title>
      </div>

      <Subtitle className={"mb-2 border-b pb-1 text-center text-sm"}>
        About You
      </Subtitle>
      <Text>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </Text>
      <Grid numCols={2} className="mt-4 gap-4 ">
        {profile.map((item) => (
          <div key={item.title}>
            <Subtitle className={"leading-5"}>
              <small>{item.title}</small>
            </Subtitle>
            <Title className="truncate text-base">{item.metric}</Title>
          </div>
        ))}
      </Grid>
    </Card>
  );
}

const profile = [
  {
    title: "Projects",
    metric: "3",
  },
  {
    title: "Financed",
    metric: "$ 1,234,567",
  },
  {
    title: "Credits Generated",
    metric: "1,234,567",
  },
  {
    title: "Regions",
    metric: "Region",
  },
];
