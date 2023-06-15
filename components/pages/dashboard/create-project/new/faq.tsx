import { Accordion } from "@mantine/core";
import { Card } from "@tremor/react";

export default function FAQ() {
  return (
    <Card>
      <h2>FAQs</h2>
      <Accordion
        styles={{
          control: {
            "&:hover": {
              backgroundColor: "transparent",
            },
          },
        }}
      >
        <Accordion.Item value="one">
          <Accordion.Control>Question one?</Accordion.Control>
          <Accordion.Panel>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </Accordion.Panel>
        </Accordion.Item>
        <Accordion.Item value="two">
          <Accordion.Control>Question two?</Accordion.Control>
          <Accordion.Panel>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </Accordion.Panel>
        </Accordion.Item>
        <Accordion.Item value="three">
          <Accordion.Control>Question three?</Accordion.Control>
          <Accordion.Panel>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </Accordion.Panel>
        </Accordion.Item>
      </Accordion>
    </Card>
  );
}
