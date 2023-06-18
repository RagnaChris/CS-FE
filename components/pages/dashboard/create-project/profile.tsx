import NextLink from "next/link";
import Image from "next/image";

import { Tooltip } from "@mantine/core";
import { Card, Grid, Subtitle, Text, Title } from "@tremor/react";
import { IconPencil } from "@tabler/icons-react";

export default function Profile() {
  return (
    <Card className={"h-full"}>
      <NextLink
        href={"#"}
        className={"absolute right-4 top-4 float-right hover:underline"}
        aria-label={"edit profile"}
      >
        <Tooltip label={"Edit profile"} withArrow>
          <IconPencil className={"h-5 w-5"} />
        </Tooltip>
      </NextLink>
      <div className={"mb-5 flex items-center justify-center gap-3"}>
        <Image
          src={"/img/business.svg"}
          alt={"business image"}
          width={56}
          height={56}
          className={"rounded-full"}
          priority={true}
        />
        <div>
          <Text>Green Capital</Text>
          <div className={"flex-co flex"}>
            <Subtitle>
              <span className={"text-emerald-300"}>A (98%)</span>
            </Subtitle>
          </div>
        </div>
      </div>

      <Subtitle className={"mb-1 border-b pb-1 text-center text-sm"}>
        About You
      </Subtitle>
      <Text>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </Text>
      <Grid numItems={2} className="mt-4 gap-4 ">
        {profile.map((item) => (
          <div key={item.title}>
            <Subtitle>{item.title}</Subtitle>
            <Title className="truncate">{item.metric}</Title>
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