import NextLink from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";

import { Button, Tooltip } from "@mantine/core";
import {
  Card,
  Col,
  Flex,
  Grid,
  Metric,
  ProgressBar,
  Subtitle,
  Text,
  Title,
} from "@tremor/react";
import { IconInfoCircle, IconMapPin } from "@tabler/icons-react";

export default function ProjectDetailsCard() {
  const {
    query: { id },
  } = useRouter();

  return (
    <>
      <Card>
        <Grid numItemsMd={2} className={"gap-6"}>
          <Col className={"space-y-6"}>
            <Title>Green Moss River</Title>
            <div>
              <Image
                src={"/img/project.jpg"}
                alt={"project image"}
                width={500}
                height={333}
                className={"w-full rounded-md object-cover"}
                priority={true}
              />
            </div>
            <h3>
              Finance a forestation project along the Central Asia with an A
              rated developer
            </h3>
          </Col>

          <Col className={"space-y-6"}>
            <div>
              <Flex className={"mt-1"}>
                <div className={"flex items-center justify-center gap-1"}>
                  <IconMapPin
                    className={
                      "h-7 w-7 rounded-full bg-yellow-400 p-1 text-black"
                    }
                  />
                  <Text>In Progress</Text>
                </div>
                <Text>2 Financiers</Text>
              </Flex>

              <ProgressBar
                value={47.5}
                color="teal"
                className="mt-10 rounded-none"
                tooltip={"47.5% complete"}
              />
              <Flex className={"mt-1"}>
                <Text>$ 475,000</Text>
                <Text>$ 1,000,000</Text>
              </Flex>
            </div>

            <Button
              component={NextLink}
              href={`${id}/finance`}
              color="gray.6"
              bg={"#6b7280"}
              fullWidth
            >
              Finance Project
            </Button>
          </Col>

          <Col>
            <div>
              <Subtitle className={"mb-1 border-b pb-1 text-center text-sm"}>
                About
              </Subtitle>
              <Text>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </Text>
              <Grid numItems={2} className="mt-4 gap-4">
                {aboutDetails.map((item) => (
                  <div key={item.title}>
                    <Subtitle>{item.title}</Subtitle>
                    <Metric className="truncate">{item.metric}</Metric>
                  </div>
                ))}
              </Grid>
            </div>
          </Col>

          <Col>
            <div>
              <Subtitle className={"mb-1 border-b pb-1 text-center"}>
                Project Overview
              </Subtitle>
              <Grid numItems={2} className="mt-1 gap-4">
                <div>
                  <Subtitle className={"flex items-center gap-2"}>
                    Project Type
                    <Tooltip label={"info here"} withArrow>
                      <IconInfoCircle className={"h-5 w-5"} />
                    </Tooltip>
                  </Subtitle>
                  <Metric className="truncate">Afforestation</Metric>
                </div>

                <div>
                  <Subtitle>Financing</Subtitle>
                  <Metric className="truncate">$ 1,000,000</Metric>
                </div>

                <div>
                  <Subtitle>Region</Subtitle>
                  <Metric className="truncate">S Asia</Metric>
                </div>

                <div>
                  <Subtitle className={"flex items-center gap-2"}>
                    Class
                    <Tooltip label={"info here"} withArrow>
                      <IconInfoCircle className={"h-5 w-5"} />
                    </Tooltip>
                  </Subtitle>
                  <Title className="truncate">T-C</Title>
                </div>
              </Grid>
            </div>
          </Col>
        </Grid>
      </Card>
    </>
  );
}

const aboutDetails = [
  {
    title: "Output (Carbon)",
    metric: "498,687 Credits",
  },
  {
    title: "Maturity Date",
    metric: "12/02/2023",
  },
  {
    title: "Return Value",
    metric: "22%",
  },
];
