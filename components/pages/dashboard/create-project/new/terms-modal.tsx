import { useEffect, useRef, useState } from "react";

import { useDisclosure } from "@mantine/hooks";
import { type UseFormReturnType } from "@mantine/form";
import { Button, Checkbox, Modal, ScrollArea } from "@mantine/core";

interface FormValues {
  projectName: string;
  projectWebsite: string;
  projectType: string;
  natureBasedSolution: string;
  regulatoryApproval: string;
  feasibilityStudy: string;
  sustainableDevelopmentGoals: string;
  sustainableDevelopmentGoalsContinued: string;
  thirdPartyVerification: string;
  thirdPartyVerifier: string;
  projectSize: string;
  projectRegion: string;
  projectBiography: string;
  startDate: string;
  finishDate: string;
  financingRequired: string;
  financingRequiredType: string;
  projectYield: string;
  projectDocuments: string;
  terms: boolean;
}

export default function TermsModal({
  form,
}: {
  form: UseFormReturnType<FormValues>;
}) {
  const [opened, { open, close }] = useDisclosure(false);

  const viewport = useRef<HTMLDivElement>(null);
  const [scrolledToBottom, setScrolledToBottom] = useState(false);

  const [checked, setChecked] = useState(false);
  const [finalChecked, setFinalChecked] = useState(false);

  const [scrollPosition, onScrollPositionChange] = useState({ x: 0, y: 0 });

  useEffect(() => {
    if (viewport.current) {
      const scrolledToBottom =
        viewport.current.scrollHeight - scrollPosition.y ===
        viewport.current.clientHeight;

      if (scrolledToBottom) setScrolledToBottom(scrolledToBottom);
    }
  }, [scrollPosition]);

  return (
    <>
      <Modal opened={opened} onClose={close} withCloseButton={false} centered>
        <div className={"space-y-6"}>
          <h2 className={"text-center font-bold"}>Terms of use</h2>

          <ScrollArea
            onScrollPositionChange={onScrollPositionChange}
            h={200}
            type={"auto"}
            viewportRef={viewport}
            styles={{
              root: {
                border: "1px solid rgb(55 65 81)",
                borderRadius: "0.375rem",
              },
            }}
          >
            <div className={"space-y-3 p-3 pr-5"}>
              <p>
                This website is operated by [Merchant Name]. The terms “we”,
                “us”, and “our” refer to [Merchant Name]. The use of our website
                is subject to the following terms and conditions of use, as
                amended from time to time (the “Terms”).
              </p>
              <p>
                The Terms are to be read together by you with any terms,
                conditions or disclaimers provided in the pages of our website.
                Please review the Terms carefully. The Terms apply to all users
                of our website, including without limitation, users who are
                browsers, customers, merchants, vendors and/or contributors of
                content.
              </p>
            </div>
          </ScrollArea>

          <div className={"h-10"}>
            {scrolledToBottom && (
              <div className={"flex items-center justify-between"}>
                <Checkbox
                  checked={checked}
                  onChange={(e) => setChecked(e.currentTarget.checked)}
                  label={"Accept terms of use"}
                />
                <Button
                  onClick={() => {
                    close();
                    if (checked) {
                      setFinalChecked(checked);
                      form.setFieldValue("terms", true);
                    } else {
                      setFinalChecked(false);
                      form.setFieldValue("terms", false);
                    }
                  }}
                  color="gray.6"
                  bg={"#6b7280"}
                >
                  Continue
                </Button>
              </div>
            )}
          </div>
        </div>
      </Modal>

      <Checkbox
        label={
          <>
            I agree to the Platform&apos;s terms of use{" "}
            <span className={"text-[#e03131]"}>*</span>
          </>
        }
        {...form.getInputProps("terms")}
        checked={finalChecked}
        onChange={(e) => {
          e.preventDefault();
        }}
        onClick={(e) => {
          e.preventDefault();
          open();
        }}
      />
    </>
  );
}
