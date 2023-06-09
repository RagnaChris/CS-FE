import { Card } from "@tremor/react";
import { Button, Checkbox, TextInput } from "@mantine/core";
import NextLink from "next/link";

export default function OffsetApplicationForm() {
  return (
    <Card className={"space-y-8"}>
      <div className={"space-y-4"}>
        <h2>Offset Emissions</h2>

        <TextInput
          label={"Carbon Offset Amount"}
          placeholder={"Carbon offset amount"}
          rightSection={<div className={"mr-10 text-sm"}>Tokens</div>}
          rightSectionWidth={0}
        />
        <Checkbox label="Attribute this offset to someone else" />

        <TextInput
          label={"Organization Name"}
          placeholder={"Your organization's name"}
        />

        <TextInput
          label={"Organization Website"}
          placeholder={"Your organization's website"}
        />
        <Checkbox label="You accept that offsetting tokens are non-reversible" />
      </div>

      <Button
        component={NextLink}
        href={"#"}
        size={"md"}
        variant="gradient"
        radius={"md"}
        styles={() => ({
          root: {
            backgroundColor: "#f857a6",
            background: "linear-gradient(to right, #f857a6, #ff5858)",
          },
        })}
      >
        <div className={"flex flex-col leading-5"}>
          <span>Confirm Offset</span>
        </div>
      </Button>
    </Card>
  );
}
