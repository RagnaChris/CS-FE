import { forwardRef } from "react";
import {
  Avatar,
  Group,
  MantineColor,
  Text,
  type SelectItemProps,
} from "@mantine/core";

interface ItemProps extends SelectItemProps {
  color: MantineColor;
  description: string;
  image: string;
}

const AutoCompleteItem = forwardRef<HTMLDivElement, ItemProps>(
  ({ description, value, image, ...others }: ItemProps, ref) => (
    <div ref={ref} {...others}>
      <Group noWrap>
        <Avatar
          size={"lg"}
          src={image}
          styles={{ root: { borderRadius: "9999px" } }}
        />

        <div>
          <Text>{value}</Text>
          <Text size="xs" color="dimmed">
            {description}
          </Text>
        </div>
      </Group>
    </div>
  )
);
AutoCompleteItem.displayName = "AutoCompleteItem";

export default AutoCompleteItem;
