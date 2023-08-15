import { useState } from "react";

import { useForm } from "@mantine/form";
import { notifications } from "@mantine/notifications";
import { Button, Textarea, TextInput } from "@mantine/core";
import { IconCheck } from "@tabler/icons-react";
import { showErrorNotification } from "@/src/lib/notifications";

interface FormValues {
  name: string;
  email: string;
  message: string;
}

export default function GetEarlyAccessForm() {
  const [loading, setLoading] = useState(false);

  const form = useForm({
    initialValues: {
      formType: "Early Access",
      name: "",
      email: "",
      message: "",
    },

    validate: {
      name: (value) => value.length <= 0 && "Enter name",
      email: (value) => {
        if (!value.trim().length) return "Enter email";
        if (!RegExp(/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/).test(value))
          return "Invalid email";
        return null;
      },
      message: (value) => value.length <= 0 && "Enter message",
    },
  });

  async function handleSubmit(values: FormValues) {
    setLoading(true);

    try {
      // send email submission
      const response = await fetch("/api/form/get-early-access", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });

      const data = await response.json();

      if (data.success) {
        notifications.show({
          message:
            "Thank you for your interest in getting early access! We'll be in contact shortly.",
          color: "green",
          icon: <IconCheck />,
        });

        form.reset();
      } else {
        showErrorNotification();
      }
      setLoading(false);
    } catch (err) {
      showErrorNotification();

      setLoading(false);
    }
  }

  return (
    <form
      className={"flex flex-col gap-6"}
      onSubmit={form.onSubmit((values) => handleSubmit(values))}
    >
      <TextInput className={"hidden"} {...form.getInputProps("formType")} />

      <TextInput
        size={"md"}
        label={"Name"}
        withAsterisk
        {...form.getInputProps("name")}
      />

      <TextInput
        size={"md"}
        label={"Email"}
        withAsterisk
        {...form.getInputProps("email")}
      />

      <Textarea
        size={"md"}
        label="Message"
        minRows={3}
        withAsterisk
        {...form.getInputProps("message")}
      />

      <Button
        className={"self-start"}
        size={"sm"}
        color="dark"
        type={"submit"}
        loading={loading}
      >
        Submit Interest
      </Button>
    </form>
  );
}
