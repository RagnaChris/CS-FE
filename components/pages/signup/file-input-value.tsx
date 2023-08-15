import { FileInputProps, Group } from "@mantine/core";
import { IconFile, IconPhoto } from "@tabler/icons-react";

function Value({ file }: { file: File | null }) {
  return (
    <>
      <div
        className={
          "mb-1 inline-flex items-center gap-1 rounded border border-gray-700 bg-gray-100 px-1 py-0.5"
        }
      >
        <IconFile className={"h-4 w-4"} />
        <span
          className={
            "inline-block overflow-hidden overflow-ellipsis whitespace-nowrap text-sm"
          }
        >
          {file?.name}
        </span>
      </div>
    </>
  );
}

const ValueComponent: FileInputProps["valueComponent"] = ({ value }) => {
  if (Array.isArray(value)) {
    return (
      <Group spacing="0.5rem">
        {value.map((file, index) => (
          <Value file={file} key={index} />
        ))}
      </Group>
    );
  } else if (value) {
    return <Value file={value} />;
  }

  return null;
};

export default ValueComponent;
