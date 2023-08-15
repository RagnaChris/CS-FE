import { useState } from "react";
import { useRouter } from "next/router";

import { useDisclosure } from "@mantine/hooks";
import { useForm, isEmail } from "@mantine/form";
import { notifications } from "@mantine/notifications";
import { Button, PasswordInput, TextInput } from "@mantine/core";

import { IconX } from "@tabler/icons-react";

import { signIn } from "next-auth/react";

export default function LoginForm() {
  const { push } = useRouter();

  const [loading, setLoading] = useState(false);
  const [visible, { toggle }] = useDisclosure(false);

  const form = useForm({
    initialValues: {
      email: "",
      password: "",
    },

    validate: {
      email: isEmail("Invalid email"),
      password: (value) => value.length <= 0 && "Enter password",
    },
  });

  async function handleSubmit({
    email,
    password,
  }: {
    email: string;
    password: string;
  }) {
    setLoading(true);
    try {
      const result = await signIn("credentials", {
        email,
        password,
        redirect: false,
      });

      if (result?.error) {
        notifications.show({
          message: "Login failed",
          color: "red",
          icon: <IconX />,
        });
        setLoading(false);
      } else {
        push("/dashboard");
      }
    } catch (err) {
      console.error(err);
      setLoading(false);
    }
  }

  return (
    <form
      className={"space-y-6 sm:max-w-sm"}
      onSubmit={form.onSubmit((values) => handleSubmit(values))}
    >
      <TextInput
        size={"md"}
        variant="unstyled"
        label={"Email"}
        withAsterisk
        {...form.getInputProps("email")}
      />

      <PasswordInput
        size={"md"}
        variant="unstyled"
        label={"Password"}
        visible={visible}
        onVisibilityChange={toggle}
        withAsterisk
        {...form.getInputProps("password")}
      />

      <Button size={"md"} color="dark" type={"submit"} loading={loading}>
        Log In
      </Button>
    </form>
  );
}
