import { useRef, useState } from "react";
import { useForm } from "@mantine/form";
import {
  Autocomplete,
  Button,
  Loader,
  NumberInput,
  TextInput,
} from "@mantine/core";
import { Card } from "@tremor/react";
import AutoCompleteItem from "@/components/pages/dashboard/exchange/mint/autocomplete-item";

const projects = [
  {
    label: "projectRefabcdefghijklmnopqrstuvwxyz",
    description: "Project excerpt",
    image: "/img/project.jpg",
  },
  {
    label: "projectRef2",
    description: "Project excerpt",
    image: "/img/project.jpg",
  },
  {
    label: "projectRef3",
    description: "Project excerpt",
    image: "/img/project.jpg",
  },
];

export default function MintTokensForm() {
  const timeoutRef = useRef<number>(-1);

  const [loading, setLoading] = useState(false);
  const [data, setData] = useState<[] | { value: string; label: string }[]>([]);

  const form = useForm({
    initialValues: {
      mintAmount: "",
      recipient: "",
      projectReference: "",
    },

    validate: {
      mintAmount: (value) =>
        String(value).length > 0 ? null : "Invalid mint amount",
      recipient: (value) => (value.length > 0 ? null : "Enter recipient"),
      projectReference: (value) =>
        value.length > 0 ? null : "Enter project reference",
    },
  });

  const handleChange = (val: string) => {
    window.clearTimeout(timeoutRef.current);

    form.setFieldValue("projectReference", val);

    setData([]);

    if (val.trim().length === 0) {
      setLoading(false);
    } else {
      setLoading(true);
      timeoutRef.current = window.setTimeout(() => {
        setLoading(false);

        setData(projects.map((item) => ({ ...item, value: item.label })));
      }, 500);
    }
  };

  return (
    <Card className={"space-y-8"}>
      <form
        className={"space-y-6"}
        onSubmit={form.onSubmit((values) => alert("Form submitted!"))}
      >
        <NumberInput
          label={"Mint Amount"}
          rightSection={<div className={"mr-10 text-sm"}>Tokens</div>}
          rightSectionWidth={0}
          withAsterisk
          {...form.getInputProps("mintAmount")}
        />

        <TextInput
          label={"Recipient"}
          withAsterisk
          {...form.getInputProps("recipient")}
        />

        <Autocomplete
          label="Project Reference"
          data={data}
          itemComponent={AutoCompleteItem}
          filter={(value, item) =>
            item.value.toLowerCase().includes(value.toLowerCase().trim()) ||
            item.description.toLowerCase().includes(value.toLowerCase().trim())
          }
          rightSection={loading ? <Loader size="1rem" /> : null}
          {...form.getInputProps("projectReference")}
          onChange={handleChange}
          withAsterisk
        />

        <Button
          type={"submit"}
          size={"md"}
          variant="gradient"
          radius={"md"}
          styles={() => ({
            root: {
              backgroundColor: "#f857a6",
              background: "linear-gradient(to right, #f857a6, #ff5858)",
            },
          })}
        >
          <div className={"flex flex-col leading-5"}>
            <span>Mint</span>
          </div>
        </Button>
      </form>
    </Card>
  );
}
