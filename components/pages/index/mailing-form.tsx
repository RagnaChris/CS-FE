import { useState } from "react";

import { useForm } from "@mantine/form";
import { notifications } from "@mantine/notifications";
import { ActionIcon, Loader, TextInput } from "@mantine/core";
import { IconArrowUpRight, IconCheck } from "@tabler/icons-react";
import { showErrorNotification } from "@/src/lib/notifications";

export default function MailingForm() {
  const [loading, setLoading] = useState(false);

  const form = useForm({
    initialValues: {
      email: "",
    },

    validate: {
      email: (value) => {
        if (!value.trim().length) return "Enter email";
        if (!RegExp(/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/).test(value))
          return "Invalid email";
        return null;
      },
    },
  });

  async function handleSubmit(values: { email: string }) {
    setLoading(true);

    try {
      // send email submission
      const response = await fetch("/api/form/mailing", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });

      const data = await response.json();

      if (data.success) {
        notifications.show({
          message: "Thank you for signing up for our mailing list!",
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
      className={"space-y-2"}
      onSubmit={form.onSubmit((values) => handleSubmit(values))}
    >
      <TextInput
        size={"lg"}
        placeholder="Enter your email"
        variant="unstyled"
        styles={{
          input: {
            transition: "0.15s border-color",
            borderBottom: "2px solid white",
            ":focus": {
              borderBottom: "2px solid white",
            },
            color: "white",
            "&::placeholder": {
              color: "#94a3b8",
            },
          },
        }}
        rightSection={
          loading ? (
            <Loader color="gray" size="xs" />
          ) : (
            <ActionIcon
              variant={"transparent"}
              type={"submit"}
              aria-label={"Send email for marketing/mailing purposes"}
            >
              <IconArrowUpRight
                className={"h-8 w-8 text-white transition hover:rotate-45"}
              />
            </ActionIcon>
          )
        }
        rightSectionWidth={28}
        {...form.getInputProps("email")}
      />
      <p>Hear from us</p>
    </form>
  );
}
