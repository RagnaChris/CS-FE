import { Button, FileInput } from "@mantine/core";
import ValueComponent from "@/components/pages/signup/file-input-value";
import { IconUpload } from "@tabler/icons-react";
import { useRef } from "react";
import { UseFormReturnType } from "@mantine/form";
import { FormValues } from "@/components/pages/signup/retail-details-form";

export default function FormFileInput({
  form,
  name,
  label,
  description,
  accept,
}: {
  form: UseFormReturnType<FormValues>;
  name: string;
  label: string;
  description: string;
  accept: string;
}) {
  const ref = useRef<HTMLButtonElement>(null);

  return (
    <div className={"flex items-end gap-2"}>
      <FileInput
        ref={ref}
        size={"md"}
        variant="unstyled"
        label={label}
        description={description}
        accept={accept}
        withAsterisk
        multiple
        {...form.getInputProps(name)}
        valueComponent={ValueComponent}
        className={"grow"}
      />
      <Button
        onClick={() => ref?.current?.click()}
        size="xs"
        variant="outline"
        color="dark"
        leftIcon={<IconUpload className={"h-4 w-4"} />}
      >
        Upload
      </Button>
    </div>
  );
}
