import NextLink from "next/link";
import Image from "next/image";

import { Tooltip } from "@mantine/core";
import { Card, Grid, Subtitle, Text, Title } from "@tremor/react";
import { IconPencil } from "@tabler/icons-react";

export default function Profile() {
  return (
    <Card>
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
        <div className={"flex flex-col items-center"}>
          <Image
            src={"/img/business.svg"}
            alt={"business image"}
            width={96}
            height={96}
            className={"mb-2 rounded-full"}
            priority={true}
          />
          <Subtitle>Rating</Subtitle>
          <Subtitle>
            <span className={"text-emerald-300"}>A (98%)</span>
          </Subtitle>
        </div>
        <div>
          <Title>ARPA Inc.</Title>
        </div>
      </div>

      <Subtitle className={"mb-1 border-b border-gray-500 pb-1 text-center"}>
        About Developer
      </Subtitle>
      <Text>
        ARPA is a leading renewable energy company based out of Toronto, Canada.
        ARPA has a portfolio of 320 MW across North America and primarily
        engages in asset management, operations and maintenance.
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
    title: "Project Portfolio",
    metric: "320 MW",
  },
  {
    title: "Amount Financed",
    metric: "$400 million",
  },
  {
    title: "Credits Generated",
    metric: "N/A",
  },
  {
    title: "Regions",
    metric: "N America",
  },
];
