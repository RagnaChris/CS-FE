import { useState } from "react";
import Image from "next/image";

import { useDisclosure } from "@mantine/hooks";
import { type UseFormReturnType } from "@mantine/form";
import { Button, Checkbox, Modal } from "@mantine/core";

interface FormValues {
  financingAmount: string;
  financingType: string;
  terms: boolean;
  signDocuments: boolean;
}

export default function SignDocumentsModal({
  form,
}: {
  form: UseFormReturnType<FormValues>;
}) {
  const [opened, { open, close }] = useDisclosure(false);

  const [checked, setChecked] = useState(false);
  const [finalChecked, setFinalChecked] = useState(false);
  const [loading, setLoading] = useState(false);

  return (
    <>
      <Modal opened={opened} onClose={close} withCloseButton={false} centered>
        <div className={"space-y-6"}>
          <div>
            <Image
              src={"/img/project.jpg"}
              alt={"project image"}
              width={500}
              height={333}
              className={"mb-3 h-40 w-full rounded-md object-cover"}
              priority={true}
            />
            <h2 className={"text-center text-xl font-bold"}>Project Name</h2>
            <h3 className={"text-center text-sm"}>Project ID: REF2023-0001</h3>
          </div>

          <div className={"flex flex-col justify-center space-y-3"}>
            <Checkbox
              size={"md"}
              label={
                <a href="#" target="_blank" className={"underline"}>
                  Digital Signature
                </a>
              }
              checked={checked}
              onChange={(event) => setChecked(event.currentTarget.checked)}
              styles={{ body: { justifyContent: "center" } }}
            />
          </div>

          <Button
            onClick={async () => {
              setLoading(true);

              if (checked) {
                await new Promise((resolve) =>
                  setTimeout(() => resolve("completed"), 1500)
                );

                setFinalChecked(true);
                form.setFieldValue("signDocuments", true);
              } else {
                setFinalChecked(false);
                form.setFieldValue("signDocuments", false);
              }

              close();
              setLoading(false);
            }}
            loading={loading}
            color="gray.6"
            bg={"#6b7280"}
            fullWidth
          >
            Continue
          </Button>
        </div>
      </Modal>

      <Checkbox
        label={
          <>
            Sign documents <span className={"text-[#e03131]"}>*</span>
          </>
        }
        {...form.getInputProps("signDocuments")}
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
