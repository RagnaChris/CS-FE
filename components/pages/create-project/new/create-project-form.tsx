import { useForm } from "@mantine/form";
import { DateInput } from "@mantine/dates";
import {
  Button,
  FileInput,
  Group,
  NumberInput,
  Radio,
  Select,
  Textarea,
  TextInput,
} from "@mantine/core";
import { Card, Grid } from "@tremor/react";
import { IconCurrencyDollar } from "@tabler/icons-react";

import TermsModal from "@/components/pages/create-project/new/terms-modal";

export default function CreateProjectForm() {
  const form = useForm({
    initialValues: {
      projectName: "",
      projectWebsite: "",
      projectType: "",
      natureBasedSolution: "", // optional if projectType is `nature-based-solution`
      regulatoryApproval: "",
      feasibilityStudy: "",
      sustainableDevelopmentGoals: "",
      sustainableDevelopmentGoalsContinued: "", // optional if sustainableDevelopmentGoals is `yes`
      thirdPartyVerification: "",
      thirdPartyVerifier: "", // optional if thirdPartyVerification is `yes`
      projectSize: "",
      projectRegion: "",
      projectBiography: "",
      startDate: "",
      finishDate: "",
      financingRequired: "",
      financingRequiredType: "",
      projectYield: "",
      projectDocuments: "",
      terms: false,
    },

    validate: {
      projectName: (value) => (value.length > 0 ? null : "Enter project name"),
      projectWebsite: (value) =>
        value.length > 0 ? null : "Enter project website",
      projectType: (value) => (value.length > 0 ? null : "Select project type"),
      natureBasedSolution: (value, values) =>
        values.projectType === "nature-based-solution" &&
        (value.length > 0 ? null : "Enter natured-based solution"),
      regulatoryApproval: (value) =>
        value.length > 0 ? null : "Select regulatory approval",
      feasibilityStudy: (value) =>
        value.length > 0 ? null : "Select feasibility study",
      sustainableDevelopmentGoals: (value) =>
        value.length > 0 ? null : "Select sustainable development goals",
      sustainableDevelopmentGoalsContinued: (value, values) =>
        values.sustainableDevelopmentGoals === "yes" &&
        (value.length > 0 ? null : "Enter your sustainable development goals"),
      thirdPartyVerification: (value) =>
        value.length > 0 ? null : "Select third party verification",
      thirdPartyVerifier: (value, values) =>
        values.thirdPartyVerification === "yes" &&
        (value.length > 0
          ? null
          : "Enter the name of your third party verifier"),
      projectSize: (value) => (value.length > 0 ? null : "Enter project size"),
      projectRegion: (value) =>
        value.length > 0 ? null : "Enter project region",
      projectBiography: (value) =>
        value.length > 0 ? null : "Enter project biography",
      startDate: (value) => (value ? null : "Enter project start date"),
      finishDate: (value) => (value ? null : "Enter project finish date"),
      financingRequired: (value) =>
        String(value).length > 0 ? null : "Enter financing required",
      financingRequiredType: (value) =>
        value.length > 0 ? null : "Select financing type",
      projectYield: (value) =>
        String(value).length > 0 ? null : "Enter project yield",
      projectDocuments: (value) =>
        value.length > 0 ? null : "Add project document(s)",
      terms: (value) => (value ? null : "Accept terms and conditions"),
    },
  });

  return (
    <Card className={"space-y-8"}>
      <form
        className={"space-y-6"}
        onSubmit={form.onSubmit(() => alert("Form submitted!"))}
      >
        <TextInput
          label={"Project Name"}
          withAsterisk
          {...form.getInputProps("projectName")}
        />
        <TextInput
          label={"Project Website"}
          withAsterisk
          {...form.getInputProps("projectWebsite")}
        />

        <Select
          label="Project Type"
          placeholder="Choose a project type"
          data={[
            {
              value: "solar-power",
              label: "Solar Power",
              group: "Renewable Energy",
            },
            { value: "asia", label: "Wind Power", group: "Renewable Energy" },
            {
              value: "hydro-power",
              label: "Hydro Power",
              group: "Renewable Energy",
            },
            {
              value: "geothermal",
              label: "Geothermal",
              group: "Renewable Energy",
            },
            {
              value: "bioenergy",
              label: "Bioenergy",
              group: "Renewable Energy",
            },
            {
              value: "wave",
              label: "Wave",
              group: "Renewable Energy",
            },
            { value: "hydrogen", label: "Hydrogen", group: "Renewable Energy" },
            {
              value: "nature-based-solution",
              label: "Nature-based Solution (specify)",
              group: "Carbon Credits",
            },
            {
              value: "carbon-storage",
              label: "Carbon Storage",
              group: "Carbon Credits",
            },
            {
              value: "waste-management",
              label: "Waste Management",
              group: "Carbon Credits",
            },
          ]}
          transitionProps={{
            transition: "fade",
            duration: 150,
            timingFunction: "ease",
          }}
          withAsterisk
          {...form.getInputProps("projectType")}
        />

        {form.values.projectType === "nature-based-solution" && (
          <TextInput
            label={"Nature-based Solution"}
            withAsterisk
            {...form.getInputProps("natureBasedSolution")}
          />
        )}

        <Radio.Group
          label="Regulatory Approval"
          description="License granted by the government for this project"
          withAsterisk
          {...form.getInputProps("regulatoryApproval")}
        >
          <Group mt="xs" mb={5}>
            <Radio value="yes" label="Yes" />
            <Radio value="no" label="no" />
          </Group>
        </Radio.Group>

        <Radio.Group
          label="Feasibility Study"
          withAsterisk
          {...form.getInputProps("feasibilityStudy")}
        >
          <Group mb={5}>
            <Radio value="done" label="Done" />
            <Radio value="not-yet" label="Not yet" />
          </Group>
        </Radio.Group>

        <Radio.Group
          label="Sustainable Development Goals"
          withAsterisk
          {...form.getInputProps("sustainableDevelopmentGoals")}
        >
          <Group mb={5}>
            <Radio value="yes" label="Yes" />
            <Radio value="no" label="No" />
          </Group>
        </Radio.Group>

        {form.values.sustainableDevelopmentGoals === "yes" && (
          <Textarea
            label={"Sustainable Development Goals (continued)"}
            withAsterisk
            {...form.getInputProps("sustainableDevelopmentGoalsContinued")}
          />
        )}

        <Radio.Group
          label="Third-party Verification"
          withAsterisk
          {...form.getInputProps("thirdPartyVerification")}
        >
          <Group mt="xs">
            <Radio value="yes" label="Yes" />
            <Radio value="no" label="No" />
          </Group>
        </Radio.Group>

        {form.values.thirdPartyVerification === "yes" && (
          <TextInput
            label={"Third-party Verifier Name"}
            withAsterisk
            {...form.getInputProps("thirdPartyVerifier")}
          />
        )}

        <TextInput
          label={"Project Size"}
          withAsterisk
          {...form.getInputProps("projectSize")}
        />

        <TextInput
          label={"Project Region"}
          withAsterisk
          {...form.getInputProps("projectRegion")}
        />

        <Textarea
          label={"Project Biography"}
          description={"Brief introductory info about the project"}
          withAsterisk
          {...form.getInputProps("projectBiography")}
        />

        <Grid numColsMd={2} className={"gap-6"}>
          <DateInput
            label={"Proposed Start Date"}
            withAsterisk
            {...form.getInputProps("startDate")}
          />
          <DateInput
            label={"Estimated Finish Date"}
            withAsterisk
            {...form.getInputProps("finishDate")}
          />
        </Grid>

        <NumberInput
          label={"Financing Required"}
          icon={<IconCurrencyDollar className={"h-5 w-5"} />}
          rightSection={<div className={"mr-4 text-sm"}>USD</div>}
          rightSectionWidth={0}
          min={0}
          withAsterisk
          {...form.getInputProps("financingRequired")}
        />

        <Radio.Group
          label="Type of Financing Required"
          withAsterisk
          {...form.getInputProps("financingRequiredType")}
        >
          <Group mb={5}>
            <Radio value="equity" label="Equity" />
            <Radio value="debt" label="Debt" />
          </Group>
        </Radio.Group>

        <NumberInput
          label={"Project Yield"}
          description={"Annual return on investment (ROI)"}
          rightSection={<div className={"text-sm"}>%</div>}
          rightSectionWidth={0}
          min={0}
          withAsterisk
          {...form.getInputProps("projectYield")}
        />

        <FileInput
          label="Project Documents"
          description="Accepted formats: .pdf, .xls, .xlsx, .ppt, .pptx"
          multiple
          accept="application/pdf,application/vnd.ms-excel,application/vnd.openxmlformats-officedocument.spreadsheetml.sheet,application/vnd.ms-powerpoint,application/vnd.openxmlformats-officedocument.presentationml.presentation"
          withAsterisk
          {...form.getInputProps("projectDocuments")}
        />

        <TermsModal form={form} />

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
            <span>Submit Project Application</span>
          </div>
        </Button>
      </form>
    </Card>
  );
}
