import NextLink from "next/link";

import { Button } from "@mantine/core";

export default function CreateProjectButton() {
  return (
    <Button
      component={NextLink}
      href={"/create-project"}
      size={"xl"}
      variant="gradient"
      radius={"md"}
      styles={() => ({
        root: {
          padding: "12px",
          paddingTop: "10px",
          paddingBottom: "10px",
          backgroundColor: "#f857a6",
          background: "linear-gradient(to right, #f857a6, #ff5858)",
        },
        inner: {
          fontSize: "1rem",
          display: "block",
        },
      })}
      w={"150px"}
    >
      <div className={"flex flex-col leading-5"}>
        <span>Create New</span>
        <span>Project</span>
      </div>
    </Button>
  );
}
