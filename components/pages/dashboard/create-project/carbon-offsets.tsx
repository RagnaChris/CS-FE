import Image from "next/image";
import { Card, Flex, Grid, Metric, Text } from "@tremor/react";

export default function CarbonOffsets() {
  return (
    <Grid numItemsLg={2} className="gap-6">
      <Card>
        <Text>Total Carbon Offset</Text>
        <Flex className="mt-2 space-x-3 truncate">
          <div className={"relative w-full text-center"}>
            <Image
              src={"/img/co2-one.jpg"}
              alt={"co2"}
              width={500}
              height={400}
              className={"h-28 w-full rounded-md object-cover"}
              priority={true}
            />
            <Metric
              className={
                "absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-gray-900 bg-opacity-50 p-3 text-xl backdrop-blur-sm"
              }
            >
              23,036,396 tons of CO2
            </Metric>
          </div>
        </Flex>
      </Card>

      <Card>
        <Flex>
          <Text>Your Carbon Offset</Text>
        </Flex>
        <Flex className="mt-2 space-x-3 truncate">
          <div className={"relative w-full text-center"}>
            <Image
              src={"/img/co2-two.jpg"}
              alt={"co2"}
              width={500}
              height={400}
              className={"h-28 w-full rounded-md object-cover"}
              priority={true}
            />
            <Metric
              className={
                "absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-gray-900 bg-opacity-50 p-3 text-xl backdrop-blur-sm"
              }
            >
              49,7341 tons of CO2
            </Metric>
          </div>
        </Flex>
      </Card>
    </Grid>
  );
}
