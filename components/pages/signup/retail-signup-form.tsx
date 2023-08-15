import { useState } from "react";

import { useDisclosure } from "@mantine/hooks";
import { useForm, isEmail } from "@mantine/form";

import {
  Button,
  PasswordInput,
  Popover,
  Progress,
  TextInput,
} from "@mantine/core";

import PasswordRequirement from "@/components/pages/signup/password-requirement";
import SignupDisclaimer from "@/components/pages/signup/signup-disclaimer";

const requirements = [
  { re: /[0-9]/, label: "Includes number" },
  { re: /[a-z]/, label: "Includes lowercase letter" },
  { re: /[A-Z]/, label: "Includes uppercase letter" },
  { re: /[$&+,:;=?@#|'<>.^*()%!-]/, label: "Includes special character" },
];

function getStrength(password: string) {
  let multiplier = password.length > 5 ? 0 : 1;

  requirements.forEach((requirement) => {
    if (!requirement.re.test(password)) {
      multiplier += 1;
    }
  });

  return Math.max(100 - (100 / (requirements.length + 1)) * multiplier, 10);
}

export default function CorporateSignupForm() {
  const [loading, setLoading] = useState(false);
  const [visible, { toggle }] = useDisclosure(false);

  const form = useForm({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      confirmPassword: "",
    },

    validate: {
      firstName: (value) => value.length <= 0 && "Enter first name",
      lastName: (value) => value.length <= 0 && "Enter last name",
      email: isEmail("Invalid email"),
      password: (value) => {
        if (
          !/[0-9]/.test(value) ||
          !/[a-z]/.test(value) ||
          !/[A-Z]/.test(value) ||
          !/[$&+,:;=?@#|'<>.^*()%!-]/.test(value)
        ) {
          return "Password doesn't meet minimum requirements";
        }
      },
      confirmPassword: (value, values) =>
        value !== values.password && "Password doesn't match",
    },
  });

  async function handleSubmit({
    email,
    password,
  }: {
    email: string;
    password: string;
  }) {
    alert("submitted");
  }

  const [popoverOpened, setPopoverOpened] = useState(false);

  const checks = requirements.map((requirement, index) => (
    <PasswordRequirement
      key={index}
      label={requirement.label}
      meets={requirement.re.test(form.values.password)}
    />
  ));

  const strength = getStrength(form.values.password);
  const color = strength === 100 ? "teal.7" : strength > 50 ? "yellow" : "red";

  return (
    <form
      className={"space-y-6 sm:max-w-sm"}
      onSubmit={form.onSubmit((values) => handleSubmit(values))}
    >
      <div className={"grid gap-6 md:grid-cols-2"}>
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
          label={"Last Name"}
          withAsterisk
          {...form.getInputProps("lastName")}
        />
      </div>

      <TextInput
        size={"md"}
        variant="unstyled"
        label={"Email"}
        withAsterisk
        {...form.getInputProps("email")}
      />

      <div className={"grid gap-6 md:grid-cols-2"}>
        <Popover
          opened={popoverOpened}
          position="bottom"
          width="target"
          transitionProps={{ transition: "pop" }}
          styles={{ dropdown: { marginTop: 0 } }}
        >
          <Popover.Target>
            <div
              onFocusCapture={() => setPopoverOpened(true)}
              onBlurCapture={() => setPopoverOpened(false)}
            >
              <PasswordInput
                size={"md"}
                variant="unstyled"
                label={"Password"}
                visible={visible}
                onVisibilityChange={toggle}
                withAsterisk
                {...form.getInputProps("password")}
              />
            </div>
          </Popover.Target>
          <Popover.Dropdown>
            <Progress color={color} value={strength} size={5} mb="xs" />
            <PasswordRequirement
              label="Includes 8+ characters"
              meets={form.values.password.length > 7}
            />
            {checks}
          </Popover.Dropdown>
        </Popover>

        <PasswordInput
          size={"md"}
          variant="unstyled"
          label={"Confirm Password"}
          visible={visible}
          onVisibilityChange={toggle}
          withAsterisk
          {...form.getInputProps("confirmPassword")}
        />
      </div>

      <SignupDisclaimer />

      <Button size={"md"} color="dark" type={"submit"} loading={loading}>
        Create Account
      </Button>
    </form>
  );
}
