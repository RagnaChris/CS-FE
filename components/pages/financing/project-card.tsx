import Image from "next/image";

import { Tooltip } from "@mantine/core";
import { Card, Grid, Subtitle, Text, Title } from "@tremor/react";
import { IconInfoCircle, IconMapPin } from "@tabler/icons-react";

export default function ProjectCard() {
  return (
    <Card className={"space-y-5"}>
      <div className={"flex justify-between"}>
        <Title>Title</Title>
        <IconMapPin
          className={"h-7 w-7 rounded-full bg-yellow-400 p-1 text-black"}
        />
      </div>

      <Image
        src={"/img/project.jpg"}
        alt={"project image"}
        width={500}
        height={333}
        className={"h-28 w-full rounded-md object-cover"}
        priority={true}
      />

      <Text>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor.
      </Text>

      <Grid numCols={2} className="mt-4 gap-4">
        <div>
          <Subtitle className={"flex items-center gap-2 leading-5"}>
            <small>Project Type</small>
            <Tooltip label={"info here"}>
              <IconInfoCircle className={"h-5 w-5"} />
            </Tooltip>
          </Subtitle>
          <Title className="truncate text-base">Afforestation</Title>
        </div>

        <div>
          <Subtitle className={"leading-5"}>
            <small>Financing</small>
          </Subtitle>
          <Title className="truncate text-base">$ 1,000,000</Title>
        </div>

        <div>
          <Subtitle className={"leading-5"}>
            <small>Region</small>
          </Subtitle>
          <Title className="truncate text-base">S Asia</Title>
        </div>

        <div>
          <Subtitle className={"flex items-center gap-2 leading-5"}>
            <small>Class</small>
            <Tooltip label={"info here"}>
              <IconInfoCircle className={"h-5 w-5"} />
            </Tooltip>
          </Subtitle>
          <Title className="truncate text-base">T-C</Title>
        </div>
      </Grid>
    </Card>
  );
}
