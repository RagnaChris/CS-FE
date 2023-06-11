import { useForm } from "@mantine/form";
import { Button, Group, NumberInput, Radio } from "@mantine/core";
import { Card } from "@tremor/react";
import { IconCurrencyDollar } from "@tabler/icons-react";

import TermsModal from "@/components/pages/project/terms-modal";
import SignDocumentsModal from "@/components/pages/project/sign-documents-modal";

export default function FinanceProjectForm() {
  const form = useForm({
    initialValues: {
      financingAmount: "",
      financingType: "",
      terms: false,
      signDocuments: false,
    },

    validate: {
      financingAmount: (value) =>
        String(value).length > 0 ? null : "Invalid amount",
      financingType: (value) => (value ? null : "Select financing type"),
      terms: (value) => (value ? null : "Accept terms and conditions"),
      signDocuments: (value) => (value ? null : "Sign documents to proceed"),
    },
  });

  return (
    <Card className={"space-y-8"}>
      <form
        className={"space-y-6"}
        onSubmit={form.onSubmit((values) => alert("Form submitted!"))}
      >
        <NumberInput
          label={"Financing Amount"}
          icon={<IconCurrencyDollar className={"h-5 w-5"} />}
          rightSection={<div className={"mr-4 text-sm"}>USD</div>}
          rightSectionWidth={0}
          min={0}
          withAsterisk
          {...form.getInputProps("financingAmount")}
        />

        <Radio.Group
          label="Financing Type"
          withAsterisk
          {...form.getInputProps("financingType")}
        >
          <Group mb={5}>
            <Radio value="equity" label="Equity" />
            <Radio value="debt" label="Debt" />
          </Group>
        </Radio.Group>

        <TermsModal form={form} />
        <SignDocumentsModal form={form} />

        <Button
          type={"submit"}
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
            <span>Submit Financing Interest</span>
          </div>
        </Button>
      </form>
    </Card>
  );
}
