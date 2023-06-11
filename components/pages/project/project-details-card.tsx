import NextLink from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";

import { Button, Tooltip } from "@mantine/core";
import {
  Card,
  Col,
  Flex,
  Grid,
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
        <Grid numColsMd={2} className={"gap-6"}>
          <Col className={"space-y-6"}>
            <div>
              <h2>Green Moss River</h2>
            </div>
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
                percentageValue={47.5}
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
              <Subtitle className={"mb-2 border-b pb-1 text-center text-sm"}>
                About
              </Subtitle>
              <Text>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </Text>
              <Grid numCols={2} className="mt-4 gap-4">
                {aboutDetails.map((item) => (
                  <div key={item.title}>
                    <Subtitle className={"leading-5"}>
                      <span className={"text-sm"}>{item.title}</span>
                    </Subtitle>
                    <Title className="truncate text-base">{item.metric}</Title>
                  </div>
                ))}
              </Grid>
            </div>
          </Col>

          <Col>
            <div>
              <Subtitle className={"mb-2 border-b pb-1 text-center text-sm"}>
                Project Overview
              </Subtitle>
              <Grid numCols={2} className="mt-4 gap-4">
                <div>
                  <Subtitle className={"flex items-center gap-2 leading-5"}>
                    <span className={"text-sm"}>Project Type</span>
                    <Tooltip label={"info here"} withArrow>
                      <IconInfoCircle className={"h-5 w-5"} />
                    </Tooltip>
                  </Subtitle>
                  <Title className="truncate text-base">Afforestation</Title>
                </div>

                <div>
                  <Subtitle className={"leading-5"}>
                    <span className={"text-sm"}>Financing</span>
                  </Subtitle>
                  <Title className="truncate text-base">$ 1,000,000</Title>
                </div>

                <div>
                  <Subtitle className={"leading-5"}>
                    <span className={"text-sm"}>Region</span>
                  </Subtitle>
                  <Title className="truncate text-base">S Asia</Title>
                </div>

                <div>
                  <Subtitle className={"flex items-center gap-2 leading-5"}>
                    <span className={"text-sm"}>Class</span>
                    <Tooltip label={"info here"} withArrow>
                      <IconInfoCircle className={"h-5 w-5"} />
                    </Tooltip>
                  </Subtitle>
                  <Title className="truncate text-base">T-C</Title>
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
