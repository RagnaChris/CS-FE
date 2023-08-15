import NextLink from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";

import { Accordion, Button, Tooltip } from "@mantine/core";
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
        <Grid numItemsMd={5} className={"gap-6"}>
          <Col numColSpanMd={3} className={"space-y-6"}>
            <div>
              <Image
                src={"/img/project.jpg"}
                alt={"project image"}
                width={500}
                height={333}
                className={"w-full rounded-md object-cover"}
                priority={true}
              />

              <Subtitle className={"mt-1"}>
                <span className={"mr-2 text-white"}>Project started</span> 01
                Jan 2022
              </Subtitle>
            </div>

            <div>
              <Subtitle
                className={"mb-1 border-b border-gray-500 pb-1 text-center"}
              >
                About Project
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

            <div>
              <Subtitle
                className={"mb-1 border-b border-gray-500 pb-1 text-center"}
              >
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
                  <Metric className="truncate">Wind Power</Metric>
                </div>

                <div>
                  <Subtitle>Financing</Subtitle>
                  <Metric className="truncate">$ 250,000,000</Metric>
                </div>

                <div>
                  <Subtitle>Region</Subtitle>
                  <Metric className="truncate">North America</Metric>
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

            <Accordion
              styles={{
                control: {
                  padding: 0,
                  "&:hover": {
                    backgroundColor: "transparent",
                  },
                },
                content: {
                  padding: 0,
                },
              }}
            >
              <Accordion.Item value="one">
                <Accordion.Control>
                  <Subtitle className={"mb-1 text-center"}>
                    More project info
                  </Subtitle>
                </Accordion.Control>
                <Accordion.Panel>
                  ARPA is developing a 180 MW wind farm in Hill, Saskakatchewan
                  with full regulatory approvals and has secured power purchase
                  agreement with the local grid.
                </Accordion.Panel>
              </Accordion.Item>
            </Accordion>
          </Col>

          <Col numColSpanMd={2} className={"space-y-6"}>
            <div>
              <Title>180 MW Wind Farm</Title>
              <Text>
                180 MW wind power plant developed by ARPA in the Hill, SK.
              </Text>
            </div>

            <Text className={"mt-2 text-sm text-white"}>
              Regulatory Approval
            </Text>

            <div>
              <Text className={"mt-2 text-sm text-white"}>
                Sustainable Development Goals
              </Text>
              <div className={"flex gap-3"}>
                {Array.from(Array(4).keys()).map((idx) => (
                  <Image
                    key={idx}
                    src={"/img/goals/8.png"}
                    alt="goals"
                    width={48}
                    height={48}
                  />
                ))}
              </div>
            </div>

            <div>
              <Subtitle
                className={"mb-1 border-b border-gray-500 pb-1 text-center"}
              >
                Project Status
              </Subtitle>
              <Flex className={"mt-1 justify-between gap-5"}>
                <div className={"flex flex-col items-center"}>
                  <IconMapPin
                    className={
                      "h-7 w-7 rounded-full bg-green-400 p-1 text-black"
                    }
                  />
                  <Text>Finished</Text>
                </div>
                <Text>100% of Financing Complete.</Text>
              </Flex>

              <Text className={"mb-1 mt-5 text-center"}>6 Investors</Text>
              <ProgressBar value={100} color="teal" />
              <Text className={"mt-1 text-center"}>$250,000,000</Text>
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

            <div className={"text-center"}>
              <Button variant={"outline"} color={"gray.3"}>
                Go to Data Room
              </Button>
            </div>
          </Col>
        </Grid>
      </Card>
    </>
  );
}

const aboutDetails = [
  {
    title: "Carbon Offset Output",
    metric: "75,000 CASA",
  },
  {
    title: "Maturity Date",
    metric: "12/02/2025",
  },
  {
    title: "Return on Investment",
    metric: "18%",
  },
];
