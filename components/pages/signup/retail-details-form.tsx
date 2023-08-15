import { useRef, useState } from "react";

import { useForm } from "@mantine/form";
import {
  Button,
  Group,
  Stepper,
  TextInput,
  Select,
  Radio,
  FileInput,
  Checkbox,
} from "@mantine/core";

import {
  IconArrowLeft,
  IconArrowRight,
  IconChevronDown,
  IconUpload,
} from "@tabler/icons-react";

import { countries } from "@/src/data";
import { DateInput } from "@mantine/dates";
import FormFileInput from "@/components/pages/signup/file-input";

export interface FormValues {
  firstName: string;
  middleName: string;
  lastName: string;
  dateOfBirth: string;
  countryOfBirth: string;
  citizenship: string;
  passportNo: string;
  addressLine1: string;
  addressLine2: string;
  addressCity: string;
  addressPostCode: string;
  addressCountry: string;
  primarySourceOfWealth: string;
  otherSourceOfWealth: string;
  usCitizen: string;
  taxCountry: string;
  taxIdentifyingNo: string;
  accreditedInvestor: string;
  politicallyExposedPerson: string;
  pepGovernmentOrganization: string;
  pepCurrentPosition: string;
  pepAssociate: string;
  pepAssociateName: string;
  pepAssociateRelationship: string;
  proofOfIdentity: string;
  photo: string;
  proofOfResidence: string;
  uploadProofOfResidenceLater: boolean;
}

export default function RetailDetailsForm() {
  const [active, setActive] = useState(0);

  const form = useForm({
    initialValues: {
      // General Information
      firstName: "",
      middleName: "",
      lastName: "",
      dateOfBirth: "",
      countryOfBirth: "",
      citizenship: "",
      passportNo: "",
      addressLine1: "",
      addressLine2: "",
      addressCity: "",
      addressPostCode: "",
      addressCountry: "",

      // Financial Information
      primarySourceOfWealth: "",
      otherSourceOfWealth: "",
      usCitizen: "",
      taxCountry: "",
      taxIdentifyingNo: "",

      // Declarations
      accreditedInvestor: "",
      politicallyExposedPerson: "",
      pepGovernmentOrganization: "",
      pepCurrentPosition: "",
      pepAssociate: "",
      pepAssociateName: "",
      pepAssociateRelationship: "",

      // Documents
      proofOfIdentity: "",
      photo: "",
      proofOfResidence: "",
      uploadProofOfResidenceLater: false,
    },

    validate: (values) => {
      /* if (active === 0) {
        return {
          firstName: values.firstName.length <= 0 && "Enter first name",
          lastName: values.lastName.length <= 0 && "Enter last name",
          dateOfBirth: values.dateOfBirth.length <= 0 && "Enter date of birth",
          countryOfBirth:
            values.countryOfBirth.length <= 0 && "Select country of birth",
          citizenship: values.citizenship.length <= 0 && "Select citizenship",
          passportNo: values.passportNo.length <= 0 && "Enter passport number",
          addressLine1:
            values.addressLine1.length <= 0 && "Enter residential address",
          addressCity:
            values.addressCity.length <= 0 && "Enter residential city",
          addressPostCode:
            values.addressPostCode.length <= 0 &&
            "Enter residential postal code",
          addressCountry:
            values.addressCountry.length <= 0 && "Enter residential country",
        };
      }

      if (active === 1) {
        return {
          primarySourceOfWealth:
            values.primarySourceOfWealth.length <= 0 &&
            "Select primary source of wealth",
          otherSourceOfWealth:
            values.primarySourceOfWealth === "other" &&
            values.otherSourceOfWealth.length <= 0 &&
            "Enter other source of wealth",
          usCitizen: values.usCitizen ? null : "Select status",
          taxCountry: values.taxCountry.length <= 0 && "Enter tax country",
          taxIdentifyingNo:
            values.taxIdentifyingNo.length <= 0 &&
            "Enter Tax Identifying Number",
        };
      }

      if (active === 2) {
        return {
          accreditedInvestor: values.accreditedInvestor.length
            ? null
            : "Select yes or no",
          politicallyExposedPerson: values.politicallyExposedPerson.length
            ? null
            : "Select yes or no",
          pepGovernmentOrganization:
            values.politicallyExposedPerson === "yes" &&
            values.pepGovernmentOrganization.length <= 0 &&
            "Enter government or organization",
          pepCurrentPosition:
            values.politicallyExposedPerson === "yes" &&
            values.pepCurrentPosition.length <= 0 &&
            "Enter current position",
          pepAssociate: values.pepAssociate.length ? null : "Select yes or no",
          pepAssociateName:
            values.pepAssociate === "yes" &&
            values.pepAssociateName.length <= 0 &&
            "Enter name of PEP",
          pepAssociateRelationship:
            values.pepAssociate === "yes" &&
            values.pepAssociateRelationship.length <= 0 &&
            "Enter relationship",
        };
      }

      if (active === 3) {
        return {
          proofOfIdentity:
            values.proofOfIdentity.length <= 0 && "Add proof of identity",
          photo: values.photo.length <= 0 && "Add photo",
          proofOfResidence:
            values.proofOfResidence.length <= 0 &&
            !values.uploadProofOfResidenceLater &&
            "Add proof of residence",
        };
      }*/

      return {};
    },
  });

  const nextStep = () =>
    setActive((current) => {
      if (form.validate().hasErrors) {
        return current;
      }
      return current < 4 ? current + 1 : current;
    });

  const prevStep = () =>
    setActive((current) => (current > 0 ? current - 1 : current));

  async function handleSubmit({}: {}) {
    alert("submitted");
  }

  const ref = useRef<HTMLButtonElement>(null);

  return (
    <>
      <form onSubmit={form.onSubmit((values) => handleSubmit(values))}>
        <Stepper active={active} breakpoint="sm" color="teal" iconSize={37}>
          <Stepper.Step label={"Step 1"} description="General Information">
            <div className={"mx-auto mt-10 space-y-6 md:max-w-lg"}>
              <div className={"grid gap-6 md:grid-cols-3"}>
                <TextInput
                  size={"md"}
                  variant="unstyled"
                  label={"First Name"}
                  withAsterisk
                  {...form.getInputProps("firstName")}
                />

                <TextInput
                  size={"md"}
                  variant="unstyled"
                  label={"Middle Name"}
                  {...form.getInputProps("middleName")}
                />

                <TextInput
                  size={"md"}
                  variant="unstyled"
                  label={"Last Name"}
                  withAsterisk
                  {...form.getInputProps("lastName")}
                />
              </div>

              <div className={"grid gap-6 md:grid-cols-2"}>
                <DateInput
                  size={"md"}
                  variant="unstyled"
                  label="Date of Birth"
                  withAsterisk
                  {...form.getInputProps("dateOfBirth")}
                />

                <Select
                  size={"md"}
                  variant="unstyled"
                  label="Country of Birth"
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
                  {...form.getInputProps("countryOfBirth")}
                />
              </div>

              <div className={"grid gap-6 md:grid-cols-2"}>
                <Select
                  size={"md"}
                  variant="unstyled"
                  label="Citizenship"
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
                  {...form.getInputProps("citizenship")}
                />

                <TextInput
                  size={"md"}
                  variant="unstyled"
                  label={"Passport Number"}
                  withAsterisk
                  {...form.getInputProps("passportNo")}
                />
              </div>

              <h2 className={"text-lg font-bold"}>Residential Address</h2>

              <div className={"grid gap-6 md:grid-cols-2"}>
                <TextInput
                  size={"md"}
                  variant="unstyled"
                  label={"Address Line 1"}
                  withAsterisk
                  {...form.getInputProps("addressLine1")}
                />

                <TextInput
                  size={"md"}
                  variant="unstyled"
                  label={"Address Line 2"}
                  {...form.getInputProps("addressLine2")}
                />
              </div>

              <div className={"grid gap-6 md:grid-cols-2"}>
                <TextInput
                  size={"md"}
                  variant="unstyled"
                  label={"City"}
                  withAsterisk
                  {...form.getInputProps("addressCity")}
                />

                <TextInput
                  size={"md"}
                  variant="unstyled"
                  label={"Post Code"}
                  withAsterisk
                  {...form.getInputProps("addressPostCode")}
                />
              </div>

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
                {...form.getInputProps("addressCountry")}
              />
            </div>
          </Stepper.Step>
          <Stepper.Step label={"Step 2"} description="Financial Information">
            <div className={"mx-auto mt-10 space-y-6 md:max-w-lg"}>
              <Select
                size={"md"}
                variant="unstyled"
                label="Primary source of wealth"
                data={[
                  {
                    value: "business-income",
                    label: "Business income",
                  },
                  {
                    value: "salary",
                    label: "Salary",
                  },
                  {
                    value: "inheritance",
                    label: "Inheritance",
                  },
                  {
                    value: "lottery",
                    label: "Lottery",
                  },
                  {
                    value: "investment",
                    label: "Investment",
                  },
                  {
                    value: "loan",
                    label: "Loan",
                  },
                  {
                    value: "rental-income",
                    label: "Rental income",
                  },
                  {
                    value: "spouse-income",
                    label: "Spouse income",
                  },
                  {
                    value: "other",
                    label: "Other (specify)",
                  },
                ]}
                searchable
                nothingFound={"No option found"}
                transitionProps={{
                  transition: "fade",
                  duration: 150,
                  timingFunction: "ease",
                }}
                rightSection={<IconChevronDown className={"h-4 w-4"} />}
                rightSectionWidth={20}
                withAsterisk
                {...form.getInputProps("primarySourceOfWealth")}
              />

              {form.values.primarySourceOfWealth === "other" && (
                <TextInput
                  size={"md"}
                  variant="unstyled"
                  label={"Other"}
                  withAsterisk
                  {...form.getInputProps("otherSourceOfWealth")}
                />
              )}

              <Radio.Group
                label="Are you a U.S. citizen or resident?"
                withAsterisk
                {...form.getInputProps("usCitizen")}
              >
                <Group mt="xs">
                  <Radio
                    value="true"
                    label="I am a U.S. citizen or a resident for tax purposes"
                  />
                  <Radio
                    value="false"
                    label="I am not a U.S. citizen or resident"
                  />
                </Group>
              </Radio.Group>

              <Select
                size={"md"}
                variant="unstyled"
                label="Which country do you pay tax in?"
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
                {...form.getInputProps("taxCountry")}
              />

              <TextInput
                size={"md"}
                variant="unstyled"
                label={"Tax Identifying Number (TIN)"}
                withAsterisk
                {...form.getInputProps("taxIdentifyingNo")}
              />
            </div>
          </Stepper.Step>
          <Stepper.Step label={"Step 3"} description="Declaration">
            <div className={"mx-auto mt-10 space-y-6 md:max-w-lg"}>
              <Radio.Group
                label="I am an accredited investor and consent to be treated as one on Carbon Sarhat"
                withAsterisk
                {...form.getInputProps("accreditedInvestor")}
              >
                <Group mt="xs">
                  <Radio value="yes" label="Yes" />
                  <Radio value="no" label="No" />
                </Group>
              </Radio.Group>
              <Radio.Group
                label="Are you a politically exposed person (PEP)?"
                withAsterisk
                {...form.getInputProps("politicallyExposedPerson")}
              >
                <Group mt="xs">
                  <Radio value="yes" label="Yes" />
                  <Radio value="no" label="No" />
                </Group>
              </Radio.Group>

              {form.values.politicallyExposedPerson === "yes" && (
                <TextInput
                  size={"md"}
                  variant="unstyled"
                  label={"Government/Organization"}
                  withAsterisk
                  {...form.getInputProps("pepGovernmentOrganization")}
                />
              )}

              {form.values.politicallyExposedPerson === "yes" && (
                <TextInput
                  size={"md"}
                  variant="unstyled"
                  label={"Current Position"}
                  withAsterisk
                  {...form.getInputProps("pepCurrentPosition")}
                />
              )}

              <Radio.Group
                label=" Are you a close associate or a family member of a PEP?"
                withAsterisk
                {...form.getInputProps("pepAssociate")}
              >
                <Group mt="xs">
                  <Radio value="yes" label="Yes" />
                  <Radio value="no" label="No" />
                </Group>
              </Radio.Group>

              {form.values.pepAssociate === "yes" && (
                <TextInput
                  size={"md"}
                  variant="unstyled"
                  label={"Name of PEP"}
                  withAsterisk
                  {...form.getInputProps("pepAssociateName")}
                />
              )}

              {form.values.pepAssociate === "yes" && (
                <TextInput
                  size={"md"}
                  variant="unstyled"
                  label={"Relationship"}
                  withAsterisk
                  {...form.getInputProps("pepAssociateRelationship")}
                />
              )}
            </div>
          </Stepper.Step>

          <Stepper.Step label={"Step 4"} description="Documents">
            <div className={"mx-auto mt-10 space-y-6 md:max-w-lg"}>
              <FormFileInput
                form={form}
                name={"proofOfIdentity"}
                label={"Proof of Identity"}
                description={"Upload an unedited image of your passport"}
                accept={"image/png,image/jpeg,image/webp"}
              />

              <FormFileInput
                form={form}
                name={"photo"}
                label={"Submit a Photo"}
                description={"Upload a recent unedited image of yourself"}
                accept={"image/png,image/jpeg,image/webp"}
              />

              {!form.values.uploadProofOfResidenceLater && (
                <FormFileInput
                  form={form}
                  name={"proofOfResidence"}
                  label={"Proof of Residence"}
                  description={
                    "Upload at least one of the following documents - bank statement, government ID, utility bill"
                  }
                  accept={"image/png,image/jpeg,image/webp,application/pdf"}
                />
              )}

              <Checkbox
                label="I will upload proof of residence later"
                {...form.getInputProps("uploadProofOfResidenceLater", {
                  type: "checkbox",
                })}
              />
            </div>
          </Stepper.Step>

          <Stepper.Completed>
            <div className={"mt-10 flex justify-center"}>
              <Button size={"lg"} color="dark" type={"submit"}>
                Submit
              </Button>
            </div>
          </Stepper.Completed>
        </Stepper>

        <Group position="center" mt="xl">
          {active !== 0 && (
            <Button
              size={"md"}
              variant="outline"
              color="dark"
              leftIcon={<IconArrowLeft />}
              onClick={prevStep}
              disabled={active === 0}
            >
              Back
            </Button>
          )}

          {active !== 4 && (
            <Button
              size={"md"}
              color="dark"
              rightIcon={<IconArrowRight />}
              onClick={nextStep}
            >
              Continue
            </Button>
          )}
        </Group>
      </form>
    </>
  );
}
