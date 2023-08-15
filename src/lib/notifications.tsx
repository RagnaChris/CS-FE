import { notifications } from "@mantine/notifications";
import { IconX } from "@tabler/icons-react";

export function showErrorNotification() {
  notifications.show({
    message:
      "An error occurred. Please try again or email contact@carbonsarhat.com.",
    color: "red",
    icon: <IconX />,
  });
}
