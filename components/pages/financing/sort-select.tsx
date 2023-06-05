import { Select } from "@mantine/core";

export default function SortSelect() {
  return (
    <Select
      placeholder="Sort by"
      data={[
        { value: "sort", label: "Sort" },
        { value: "options", label: "options" },
        { value: "go", label: "go" },
        { value: "here", label: "here" },
      ]}
      styles={() => ({
        item: {
          "&[data-selected]": {
            "&, &:hover": {
              backgroundColor: "#374151",
            },
          },
        },
        input: {
          backgroundColor: "#1f2937",
          "&:focus": {
            borderColor: "#374151",
          },
        },
      })}
    />
  );
}
