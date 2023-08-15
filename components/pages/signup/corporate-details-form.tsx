import { useState } from "react";

import { useForm } from "@mantine/form";
import {
  Button,
  Group,
  Stepper,
  TextInput,
  Select,
  Radio,
  FileInput,
  MultiSelect,
} from "@mantine/core";
import { countries } from "@/src/data";
import { IconChevronDown } from "@tabler/icons-react";

export default function RetailDetailsForm() {
  const form = useForm({
    initialValues: {
      // General Information
      organizationName: "",
      organizationWebsite: "",
      role: "",
      roleContinued: "",
      country: "",
      city: "",
      businessAddress: "",
      phoneNumber: "",
      organizationRegistrationNumber: "",
      purposeOfJoining: [],
      assetsUnderManagement: "",
      investmentInterest: [],
    },

    validate: {
      organizationName: (value) =>
        value.length <= 0 && "Enter organization name",
      organizationWebsite: (value) =>
        value.length <= 0 && "Enter organization website",
      role: (value) => value.length <= 0 && "Select role",
      roleContinued: (value, values) =>
        values.role === "other" && value.length <= 0 && "Specify your role",
      country: (value) => value.length <= 0 && "Select country",
      city: (value) => value.length <= 0 && "Enter city",
      businessAddress: (value) => value.length <= 0 && "Enter business address",
      phoneNumber: (value) => value.length <= 0 && "Enter phone number",
      organizationRegistrationNumber: (value) =>
        value.length <= 0 && "Enter organization registration number",
      purposeOfJoining: (value) =>
        value.length <= 0 && "Select purpose(s) of joining",
      assetsUnderManagement: (value) =>
        value.length <= 0 && "Enter assets under management",
      investmentInterest: (value) =>
        value.length <= 0 && "Select investment interests",
    },
  });

  async function handleSubmit({}: {}) {
    alert("submitted");
  }

  return (
    <>
      <form onSubmit={form.onSubmit((values) => handleSubmit(values))}>
        <div className={"mx-auto mt-10 space-y-6 md:max-w-lg"}>
          <div className={"grid gap-6 md:grid-cols-2"}>
            <TextInput
              size={"md"}
              variant="unstyled"
              label={"Organization Name"}
              withAsterisk
              {...form.getInputProps("organizationName")}
            />

            <TextInput
              size={"md"}
              variant="unstyled"
              label={"Organization Website"}
              withAsterisk
              {...form.getInputProps("organizationWebsite")}
            />
          </div>

          <Select
            size={"md"}
            variant="unstyled"
            label="Role"
            data={[
              {
                value: "corporate",
                label: "Corporate",
              },
              {
                value: "financial-institution-asset-manager-licensed-investor",
                label:
                  "Financial institution, Asset Manager, Licensed Investor",
              },
              {
                value: "government-entity",
                label: "Government Entity",
              },
              {
                value: "ngo",
                label: "NGO",
              },
              {
                value: "other",
                label: "Other (specify)",
              },
            ]}
            transitionProps={{
              transition: "fade",
              duration: 150,
              timingFunction: "ease",
            }}
            rightSection={<IconChevronDown className={"h-4 w-4"} />}
            rightSectionWidth={20}
            withAsterisk
            {...form.getInputProps("role")}
          />

          {form.values.role === "other" && (
            <TextInput
              size={"md"}
              variant="unstyled"
              label={"Role"}
              withAsterisk
              {...form.getInputProps("roleContinued")}
            />
          )}

          <div className={"grid gap-6 md:grid-cols-2"}>
            <Select
              size={"md"}
              variant="unstyled"
              label="Country"
              data={countries.map((country) => ({
                value: country.toLowerCase(),
                label: country,
              }))}
              searchable
              nothingFound={"No country found"}
              transitionProps={{
                transition: "fade",
                duration: 150,
                timingFunction: "ease",
              }}
              rightSection={<IconChevronDown className={"h-4 w-4"} />}
              rightSectionWidth={20}
              withAsterisk
              {...form.getInputProps("country")}
            />

            <TextInput
              size={"md"}
              variant="unstyled"
              label={"City"}
              withAsterisk
              {...form.getInputProps("city")}
            />
          </div>

          <TextInput
            size={"md"}
            variant="unstyled"
            label={"Business Address"}
            withAsterisk
            {...form.getInputProps("businessAddress")}
          />

          <TextInput
            size={"md"}
            variant="unstyled"
            label={"Phone Number"}
            withAsterisk
            {...form.getInputProps("phoneNumber")}
          />

          <TextInput
            size={"md"}
            variant="unstyled"
            label={"Organization Registration Number"}
            withAsterisk
            {...form.getInputProps("organizationRegistrationNumber")}
          />

          <MultiSelect
            size={"md"}
            variant="unstyled"
            label="Purpose of joining Carbon Sarhat"
            data={[
              {
                value: "raise-capital",
                label: "Raise capital / issue tokenized securities",
              },
              { value: "invest", label: "Invest" },
              {
                value: "purchasing-and-offset",
                label: "Purchasing and offset of carbon credits",
              },
            ]}
            rightSection={<IconChevronDown className={"h-4 w-4"} />}
            rightSectionWidth={20}
            withAsterisk
            {...form.getInputProps("purposeOfJoining")}
          />

          <TextInput
            size={"md"}
            variant="unstyled"
            label={"Assets under management (USD)"}
            withAsterisk
            {...form.getInputProps("assetsUnderManagement")}
          />

          <MultiSelect
            size={"md"}
            variant="unstyled"
            label="Investment interest"
            data={[
              { value: "bonds", label: "Bonds" },
              { value: "carbon-projects", label: "Carbon projects" },
              { value: "green-energy", label: "Green energy" },
              { value: "infrastructure", label: "Infrastructure" },
              { value: "private-fund", label: "Private fund" },
              { value: "private-equity", label: "Private equity" },
              { value: "private-credit", label: "Private credit" },
              { value: "real-estate", label: "Real estate" },
            ]}
            rightSection={<IconChevronDown className={"h-4 w-4"} />}
            rightSectionWidth={20}
            withAsterisk
            {...form.getInputProps("investmentInterest")}
          />
        </div>

        <div className={"mt-10 flex justify-center"}>
          <Button size={"lg"} color="dark" type={"submit"}>
            Submit
          </Button>
        </div>
      </form>
    </>
  );
}
